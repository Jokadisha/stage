"use client";
// dependencies
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
// hooks
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useOTP } from "@/features/auth/hooks";
// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { toast } from "sonner";

const EmailVerificationSchema = z.object({
  code: z.string().min(6, { message: "Code invalide" }),
});

type EmailVerificationFormValues = z.infer<typeof EmailVerificationSchema>;

export default function EmailVerificationForm() {
  const { mutateAsync, error, isPending } = useOTP();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailVerificationFormValues>({
    resolver: zodResolver(EmailVerificationSchema),
  });

  const onSubmit = async (values: EmailVerificationFormValues) => {
    if (!email) {
      toast.error("Email manquant !");
      return;
    }
    const credentials = {
      email: email,
      code: values.code,
    };
    toast.promise(
      await mutateAsync(credentials, {
        onSuccess: () => {
          router.push("/");
        },
        onError: (error) => {
          const axiosError = error as AxiosError<{ message?: string }>;
          return (
            axiosError.message ||
            "Une erreur s'est produite lors de la vérification, veuillez réessayer"
          );
        },
      })
    );
  };

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-4xl font-medium">Vérification de l&apos;e-mail</h1>
        <p className="text-muted-foreground">
          Nous avons envoyé une vérification à votre e-mail pour vérifier votre
          adresse et activer votre compte.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Input
          type="number"
          placeholder="Code de vérification"
          className="py-6"
          {...register("code")}
        />
        {errors.code && (
          <p className="text-red-500 text-sm">{errors.code.message}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <p>Je n&apos;ai pas reçu de code !</p>
        <p className="text-blue-500">Renvoyer le code</p>
      </div>

      <div>
        {error && <p className="text-red-500 text-sm">{error?.message}</p>}
      </div>

      <Button
        className="mt-6 py-6 text-md flex items-center justify-center"
        type="submit"
        // onClick={onSubmit}
        disabled={isPending}
      >
        Vérifier mon compte
        {isPending ? (
          <span className="ml-2 animate-spin text-primary">
            <LoaderCircle size={24} className="h-12 w-12 text-white" />
          </span>
        ) : (
          <ArrowRight size={20} className="ml-2 h-6 w-6" />
        )}
      </Button>
    </form>
  );
}

"use client";
// dependencies
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// hooks
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, LoaderCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useUser } from "../hooks/useUser";

const signInSchema = z.object({
  email: z.string().email({ message: "Adresse email invalide" }),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
  remember: z.string().default("false"),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });
  const { data: user } = useUser();

  if (user?.user_id) {
    router.push("/");
  }

  const onSubmit = async (values: SignInFormValues) => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
    // await login.mutateAsync(credentials);
    // if (login.isSuccess) {
    //   router.push("/");
    //   toast.success("Connexion réussie !");
    // }
    // if (login.isError) {
    //   toast.error("Une erreur s'est produite lors de la connexion, veuillez réessayer");
    // }
    await login.mutateAsync(credentials, {
      onSuccess: () => {
        router.push("/");
        toast.success("Connexion réussie !");
      },
      onError: (error) => {
        toast.error(
          error.message ||
            `Une erreur s'est produite lors de la connexion, veuillez réessayer`
        );
      },
    });
  };

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-4xl font-medium">Se connecter</h1>
        <p className="text-muted-foreground">
          Tu ne possèdes pas de compte ?{" "}
          <Link href="/auth/sign-up" className="font-semibold text-primary">
            Créer un compte
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Adresse email"
          className="py-6"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            className="pr-10 py-6"
            {...register("password")}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={20} className="h-6 w-6" />
            ) : (
              <Eye size={20} className="h-6 w-6" />
            )}
            <span className="sr-only">
              {showPassword
                ? "Masquer le mot de passe"
                : "Afficher le mot de passe"}
            </span>
          </Button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div>
        {login.error && (
          <p className="text-red-500 text-sm">{login.error.message}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" {...register("remember")} />
          <label
            htmlFor="remember"
            className="text-sm text-muted-foreground font-medium"
          >
            Se souvenir de moi
          </label>
        </div>

        <Link
          href="/auth/forgot-password"
          className="text-sm font-medium text-primary"
        >
          Mot de passe oublié ?
        </Link>
      </div>

      <Button
        className="mt-6 py-6 text-md flex items-center justify-center"
        type="submit"
        disabled={isSubmitting}
      >
        Se connecter
        {login.isPending ? (
          <span className="ml-2 animate-spin text-primary">
            <LoaderCircle size={24} className="h-12 w-12 text-white" />
          </span>
        ) : (
          <ArrowRight size={20} className="ml-2 h-6 w-6" />
        )}
      </Button>

      <p className="text-muted-foreground text-center mt-2">ou</p>

      <div className="flex flex-wrap items-center gap-2">
        <Button className="py-6 flex-1" variant="outline" type="button">
          <Image
            src="/google.svg"
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          Se connecter avec Google
        </Button>
        <Button className="py-6 flex-1" variant="outline" type="button">
          <Image
            src="/facebook.svg"
            alt="Facebook"
            width={20}
            height={20}
            className="mr-2"
          />
          Se connecter avec Facebook
        </Button>
      </div>
    </form>
  );
}

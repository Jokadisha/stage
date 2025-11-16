"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { ArrowRight, Eye, EyeOff, LoaderCircle } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignUp from "@/features/auth/hooks/useSignUp";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useUser } from "../hooks/useUser";

const signInSchema = z
  .object({
    name: z.string(),
    username: z.string(),
    email: z.string().email({ message: "Adresse email invalide" }),
    password: z.string().min(8, {
      message: "Le mot de passe doit contenir au moins 8 caractères",
    }),
    confirmPassword: z.string().min(8, {
      message: "Le mot de passe doit contenir au moins 8 caractères",
    }),
    agree: z.string().default("false"),
    acteur: z.string().optional(),
  })
  .refine(
    (passwordTyped) => passwordTyped.password === passwordTyped.confirmPassword,
    {
      message: "Les mots de passe ne correspondent pas",
      path: ["confirmPassword"],
    }
  );

type SignInFormValues = z.infer<typeof signInSchema>;

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const { mutate, error, isPending } = useSignUp();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: "false",
      acteur: "student",
    },
  });
  const { data: user } = useUser();

  if (user?.user_id) {
    router.push("/");
  }

  const onSubmit = async (values: SignInFormValues) => {
    const registerPayload = {
      full_name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      role: values.acteur,
    };
    await mutate(registerPayload, {
      onSuccess: () => {
        router.push(
          `/auth/email-verification/?email=${encodeURIComponent(values.email)}`
        );
      },
      onError: (error) => {
        toast.error(
          error.message ||
            `Une erreur s'est produite lors de la creation du compte, veuillez réessayer`
        );
      },
    });
  };

  return (
    <form
      className="w-full flex flex-col gap-4 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-4xl font-medium">Creer un compte</h1>
          <p className="text-muted-foreground">
            Vous avez deja un compte?{" "}
            <Link href="/auth/sign-in" className="font-semibold text-primary">
              Se connecter
            </Link>{" "}
          </p>
        </div>

        <div className="pt-2">
          <Select onValueChange={(Value) => setValue("acteur", Value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Acteur" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Etudiant</SelectItem>
              {/* <SelectItem value="worker">Travailleur</SelectItem> */}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="w-[47%]">
          <Input
            type="text"
            placeholder="Nom complet"
            className=""
            {...register("name")}
          />
        </div>
        <div className="w-[47%]">
          <Input
            type="text"
            placeholder="Nom d'utlisateur"
            className=""
            {...register("username")}
          />
        </div>
      </div>
      <div>
        <Input
          type="email"
          placeholder="Adresse mail"
          className=""
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Mot de passe"
          className="pr-10"
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
      <div className="relative">
        <Input
          type={showPasswordConfirmation ? "text" : "password"}
          placeholder="Confirmer le mot de passe"
          className="pr-10"
          {...register("confirmPassword")}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
          onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
        >
          {" "}
          {showPasswordConfirmation ? (
            <EyeOff size={20} className="h-6 w-6" />
          ) : (
            <Eye size={20} className="h-6 w-6" />
          )}
          <span className="sr-only">
            {showPasswordConfirmation
              ? "Masquer le mot de passe"
              : "Afficher le mot de passe"}
          </span>
        </Button>
      </div>
      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword.message}</p>
      )}
      <div className="flex items-center space-x-2 ">
        <Checkbox id="agree" {...register("agree")} />
        <label htmlFor="agree" className="">
          j&apos;ai lu et j&apos;accepte vos{" "}
          <Link href={""}>conditions d&apos;utlisation</Link>
        </label>
      </div>
      <div>
        {error && <p className="text-red-500 text-sm">{error.message}</p>}
      </div>
      <div>
        <Button
          type="submit"
          className="w-full mt-6 py-6 text-md flex items-center justify-center"
          disabled={isPending}
        >
          Creer un compte
          {isPending ? (
            <span className="ml-2 animate-spin text-primary">
              <LoaderCircle size={24} className="h-12 w-12 text-white" />
            </span>
          ) : (
            <ArrowRight size={20} className="ml-2 h-6 w-6" />
          )}
        </Button>
      </div>
      <div className="flex items-center justify-center">ou</div>
      <div className="flex flex-wrap items-center gap-2">
        <Button className="py-6 flex-1" variant="outline" type="button">
          <FaLinkedin size={12} className="mr-2" />
          s&apos;inscire avec Linkedin
        </Button>

        <Button className="py-6 flex-1" variant="outline" type="button">
          <FaGoogle size={12} className="mr-2" />
          s&apos;inscrire avec Google
        </Button>
      </div>
    </form>
  );
}

import { SignInForm } from "@/features/auth/components";

export default function SignInPage() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center flex-1">
      <div className="w-full flex flex-col items-center p-4 sm:p-2 md:p-0 gap-4">
        <SignInForm />
      </div>
    </div>
  );
}

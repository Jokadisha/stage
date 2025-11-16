import { SignUpForm } from "@/features/auth/components";

export default function SignUpPage() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center flex-1">
      <div className="w-full flex flex-col items-center gap-4 p-4 sm:p-2 md:p-0">
        <SignUpForm />
      </div>
    </div>
  );
}

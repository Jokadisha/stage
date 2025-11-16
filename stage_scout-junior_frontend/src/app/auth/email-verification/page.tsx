"use client";

import { Suspense } from "react";
import { EmailVerificationForm } from "@/features/auth/components";
import Loader from "@/components/ui/loader";

export default function EmailVerificationPage() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center flex-1">
      <div className="w-full flex flex-col items-center p-4 sm:p-2 md:p-0 gap-4">
        <Suspense fallback={<Loader />}>
          <EmailVerificationForm />
        </Suspense>
      </div>
    </div>
  );
}

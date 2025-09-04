"use client"

import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="flex justify-center pt-40">
      <SignIn routing="path" path="/sign-in" />
    </div>
  )
}


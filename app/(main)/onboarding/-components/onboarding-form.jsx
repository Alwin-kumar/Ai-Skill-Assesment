"use client"

import { onboardingSchema } from "@/app/lib/schema"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

const OnboardingForm = ({ industries}) =>{

  const [selectedIndustry,setSelectedIndustry] = useState(null);
  
  const router = useRouter();


  const {
    register,
    handleSubmit,
    formState:{errors},
    watch,
    setValue,
  }    =  useForm({
    resolver: zodResolver(onboardingSchema),
  })

  return <div>

  <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      
    </Card>

  </div>
}
export default OnboardingForm
"use client"

import { onboardingSchema } from "@/app/lib/schema"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

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

  const onSubmit = async(values) =>{

  }
   const watchIndustry = watch("industry");


  return (<div className="flex items-center justify-center bg-background ">

  <Card className='w-full max-w-lg  mx-2 '>
  <CardHeader>
    <CardTitle className='text-4xl gradient-text'>Complete Your Profile</CardTitle>
      <CardDescription>Select Your Industry To Get  Personalized  career Insights and recommendations</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="my-4" onSubmit={handleSubmit(onSubmit)}> 
          <div><Label htmlFor="industry" className="space-y-2 mb-2">Industry</Label>
          
          <Select  onValueChange={(value) => {
            setValue("industry", value);
            setSelectedIndustry(
              industries.find((ind) => ind.id === value)
            );
            setValue("subIndustry", "");
          }}>
            <SelectTrigger  id="industry" className='w-full'>
              <SelectValue placeholder="Select an Industry" />
            </SelectTrigger>
            <SelectContent  className='bg-white text-black font-bold'>

              {industries.map((ind)=>{
              return (
              <SelectItem value={ind.id} key={ind.id}>{ind.name} </SelectItem>

             ) })}
              
          </SelectContent>
          </Select>
          {errors.industry && (
            <p className="text-sm text-red-700 ">{errors.industry.message}</p>
          )}

          </div>

          

          {watchIndustry && (
              <div className="space-y-2 mt-4"><Label htmlFor="subIndustry" >Specalization</Label>
          
          <Select onValueChange={(value) => {
           
            setValue("subIndustry", value);
          }}>
            <SelectTrigger  id="SubIndustry" className='w-full'>
              <SelectValue placeholder="Select an Industry" />
            </SelectTrigger>
            <SelectContent className='bg-white text-black font-bold'>

              {selectedIndustry?.subIndustries.map((ind)=>{
              return (
              <SelectItem value={ind} key={ind}>{ind} </SelectItem>

             ) })}
              
          </SelectContent>
          </Select>
          {errors.subIndustry && (
            <p className="text-sm text-red-700 ">{errors.subIndustry.message}</p>
          )}

          </div>
            )}

        <div className="space-y-2 mt-4">
          <Label htmlFor="experience" >Years of Experience </Label>

          <Input 
          className='text-gray-400'
          id="experience"
          type="number"
          min= "0"
          max = "50"
          placeholder = "Enter Your years of  Experience"
          {...register("experience")}
          ></Input>
          
          
          {errors.experience && (
            <p className="text-sm text-red-700 ">{errors.experience.message}</p>
          )}

          </div>
        <div className="space-y-2 mt-4">
          <Label htmlFor="skills" >Skills </Label>

          <Input 
          id="skills"
         className='text-gray-400'
          placeholder = "Python, Java ,JavaScript ..."
          {...register("skills")}
          ></Input>
          
          
          {errors.skills && (
            <p className="text-sm text-red-700 ">{errors.skills.message}</p>
          )}
          <p className="text-sm text-gray-500">
            Seperate multiple  skills with commas 
          </p>

          </div>
        <div className="space-y-2 mt-4">
          <Label htmlFor="bio" >BIO </Label>

          <Textarea
          id="bio"
          className='text-gray-400'
         
          placeholder = "Tell us about your educational background"
          {...register("bio")}
          ></Textarea>
          
          
          {errors.bio && (
            <p className="text-sm text-red-700 ">{errors.bio.message}</p>
          )}
          </div>

           <Button type="submit" className="w-full bg-blue-500" disabled={updateLoading}>
              {updateLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Complete Profile"
              )}
            </Button>
          
        </form>
      </CardContent>
      
    </Card>


  </div>);
}
export default OnboardingForm
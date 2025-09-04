import { industries } from "@/data/industries";
import z from "zod";

export const onboardingSchema = z.object({
    industry: z.string({
        required_error: "Please select an industry",
    }),
    subIndustry: z.string({
        required_error: "Please select a specalization ",
    }),
    bio: z.string().max(500).optional(),
    experience: z
        .string()
        .transform((val) => parseInt(val , 10))
        .pipe(
            z
                .number()
                .min(0,"Expereince  must be atleast 0")
                .max(50,"Expereince  must be atleast 50")
        ),
    skills: z.string().transform((val) => 
    val
        ?val
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean)
        :undefined
    ),
});
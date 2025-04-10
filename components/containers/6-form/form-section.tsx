"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useIsMobile } from "@/hooks/use-mobile"

// Define industries directly here for the dropdown
const industries = [
  { name: 'Corporations' },
  { name: 'Financial Services' },
  { name: 'Government' },
  { name: 'Legal' },
  { name: 'Technology' },
  { name: 'Political Parties' },
  { name: 'NGOs & Thinktanks' },
  { name: 'Lobbyists' },
  { name: 'Other' },
]

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(), // Added industry
  message: z.string().optional(),
})

export function ProfileForm() {
  const isMobile = useIsMobile() // Still useful for text sizes etc.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // TODO: Implement email sending logic here
    // Send email to klaudija@copilotagency.lt
  }

  return (
    // Reduced padding on mobile, restore on larger screens
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto">
        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // Reduced bottom margin on mobile
          className="text-center mb-10 md:mb-16"
        >
          {/* Adjusted text sizes slightly */}
          <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-foreground mb-4 md:mb-6`}>
            Get in Touch
          </h2>
          <p className={`${isMobile ? 'text-base' : 'text-xl'} text-muted-foreground max-w-3xl mx-auto px-4`}>
            Have questions or need strategic advice? Fill out the form below and we&apos;ll contact you shortly.
          </p>
        </motion.div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto px-4">
          <Form {...form}>
             {/* Reduced overall form spacing */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Grid for side-by-side fields - NOW grid-cols-2 on ALL sizes */}
              {/* Reduced gaps */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel> {/* Removed (Optional) for space */}
                      <FormControl>
                        <Input placeholder="Phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 {/* Company */}
                 <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel> {/* Removed (Optional) for space */}
                      <FormControl>
                        <Input placeholder="Company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Industry Dropdown */}
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel> {/* Removed (Optional) for space */}
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            {/* Simplified placeholder */}
                            <SelectValue placeholder="Industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry.name} value={industry.name}>
                              {industry.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 {/* Message Textarea - Spans both columns */}
                 <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      // Add col-span-2 here
                      <FormItem className="col-span-2">
                        <FormLabel>Message</FormLabel> {/* Removed (Optional) for space */}
                        <FormControl>
                          <Textarea
                            placeholder="Tell us how we can help you..."
                            className="resize-none min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div> {/* End Grid */}


              {/* Submit Button - Spans both columns and centered */}
              <div className="col-span-2 text-center pt-4"> {/* Added top padding */}
                 <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
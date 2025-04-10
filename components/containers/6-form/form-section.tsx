import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from 'framer-motion'; // Added import
import { Shield } from 'lucide-react'; // Added import
import { useIsMobile } from '@/hooks/use-mobile'; // Added import

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Define Zod schema
const profileFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  message: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// Default values
const defaultValues: Partial<ProfileFormValues> = {};

export function ProfileForm({ id }: { id?: string }) {
  const isMobile = useIsMobile(); // Added hook usage
  const { toast } = useToast();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log("Form Data:", data); // Log data to console
  }

  return (
    // Added pb-20 for bottom padding
    <section id={id} className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* --- Copied Section Start --- */}
        <div className={`max-w-5xl mx-auto ${isMobile ? 'px-0' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
             // Added bottom margin mb-12 md:mb-16
            className="flex flex-col items-center text-center mb-12 md:mb-16"
          >
            <div className="bg-[hsl(var(--primary))] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8">
              {/* Changed icon background to primary */}
              <Shield className="h-8 w-8 text-black" /> {/* Changed icon color to black */}
            </div>

            <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-foreground mb-4 md:mb-6`}>
              {/* Simplified Heading */}
              Ready to Discuss Your Needs?
            </h2>
            <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground max-w-2xl`}>
              {/* Updated text to be a CTA for the form */}
              Reach out to schedule a consultation or inquire about our services. Fill out the form below, and our team will be in touch shortly.
            </p>
          </motion.div>
        </div>
        {/* --- Copied Section End --- */}

        {/* --- Original Form Start --- */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto">
            {/* Grid Layout for Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {/* First Name */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
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
                    <FormControl>
                      <Input placeholder="Email Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone (Optional) */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phone (Optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Company (Optional) */}
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Company (Optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Industry (Optional) */}
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Industry (Optional)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="politics">Politics & Government</SelectItem>
                        <SelectItem value="nonprofit">Non-Profit</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message (Optional) - Spans full width */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Your Message (Optional)"
                      className="min-h-[100px]" // Set a minimum height
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button - Centered */}
            <div className="flex justify-center pt-4">
              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        </Form>
        {/* --- Original Form End --- */}
      </div>
    </section>
  );
}
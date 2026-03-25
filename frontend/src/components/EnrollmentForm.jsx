import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ShieldCheck, Calendar, Loader2 } from "lucide-react";
import { brand } from "../mock";
import { useEnrollmentSubmit } from "../hooks/use-enrollment-submit";

export default function EnrollmentForm({ content, endpoint }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  // Consume our custom hook
  const { submitHandler, isSubmitting } = useEnrollmentSubmit(endpoint, reset);

  return (
    <Card className="border-2 shadow-2xl relative overflow-hidden" style={{ borderColor: brand.colors.slate }}>
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <ShieldCheck className="h-24 w-24" />
      </div>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
          <Calendar className="h-4 w-4" />
          Upcoming Batch Enrollment
        </div>
        <CardTitle className="text-2xl font-bold" style={{ fontFamily: brand.fonts.heading }}>
          Secure Your Certification
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
              <Input 
                placeholder="Required" 
                {...register("name", { required: "Name is required" })} 
                className={errors.name ? "border-destructive" : ""}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Work Email</label>
              <Input 
                placeholder="Required" 
                type="email" 
                {...register("email", { required: "Email is required" })} 
                className={errors.email ? "border-destructive" : ""}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company Name</label>
            <Input placeholder="Organization Name" {...register("company")} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message / Technical Requirements</label>
            <Textarea 
              placeholder={content.hero.title.includes("WEM") ? "Facility details or specific monitoring needs..." : "How can we help?"} 
              rows={4} 
              {...register("message")} 
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-14 text-lg font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]" 
            style={{ backgroundColor: brand.colors.primary, color: brand.colors.white }}
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Enroll Now"}
          </Button>
          <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest mt-4">
            Response time: &lt; 24 Business Hours
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
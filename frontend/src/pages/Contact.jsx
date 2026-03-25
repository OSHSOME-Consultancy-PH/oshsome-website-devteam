import React, { useState } from "react";
import axios from "axios";
import { brand, saveFormLocally } from "../mock";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";
import { Mail, Phone, MapPin, Send, Loader2, Clock, Globe } from "lucide-react";

// Helper for Contact Detail Items
const ContactDetail = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
      {href ? (
        <a href={href} className="text-sm font-medium hover:text-primary transition-colors underline-offset-4 hover:underline">
          {value}
        </a>
      ) : (
        <p className="text-sm font-medium leading-relaxed">{value}</p>
      )}
    </div>
  </div>
);

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/contacts`, { ...data, source_page: "contact" });
      toast.success("Message sent! Rogelio or a team member will reach out shortly.");
      reset();
    } catch (e) {
      const ok = saveFormLocally("osh-contact", data);
      if (ok) toast.success("Offline: Response saved locally for sync.");
      else toast.error("Submission failed. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: brand.fonts.body }}>
      <Toaster richColors position="top-center" />

      {/* --- Header Section --- */}
      <section className="bg-slate-50 border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl px-4">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1">
            Get in Touch
          </Badge>
          <h1 
            className="text-4xl md:text-6xl font-bold tracking-tight" 
            style={{ fontFamily: brand.fonts.heading, color: brand.colors.slate }}
          >
            Let’s start a <span style={{ color: brand.colors.primary }}>conversation.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Whether you need a technical audit, a tailored training proposal, or simply have a question about OSH standards, we're here to help.
          </p>
        </div>
      </section>

      {/* --- Main Content --- */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid gap-2">
              <ContactDetail 
                icon={Mail} 
                label="Email Address" 
                value={brand.contact.email} 
                href={`mailto:${brand.contact.email}`} 
              />
              <ContactDetail 
                icon={Phone} 
                label="Phone Number" 
                value={brand.contact.phone} 
                href={`tel:${brand.contact.phone}`} 
              />
              <ContactDetail 
                icon={MapPin} 
                label="Main Office" 
                value={brand.contact.address} 
              />
            </div>

            {/* Visual Map Placeholder */}
            <div className="relative group overflow-hidden rounded-2xl border border-border shadow-inner aspect-video md:aspect-square bg-muted">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <Globe className="h-12 w-12 text-muted-foreground/30 mb-4 animate-pulse" />
                <p className="text-sm font-medium text-muted-foreground">Interactive Map Coming Soon</p>
                <p className="text-xs text-muted-foreground/60 mt-1 max-w-[200px]">{brand.contact.address}</p>
              </div>
              {/* Optional: Add a real Google Maps Iframe here */}
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4 items-center">
              <Clock className="h-6 w-6 text-primary shrink-0" />
              <p className="text-sm text-slate-700 leading-snug">
                <strong>Service Commitment:</strong> We prioritize technical inquiries and usually respond within <strong>24 business hours</strong>.
              </p>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="lg:col-span-7">
            <Card className="shadow-xl border-border/50">
              <CardContent className="pt-8 px-6 md:px-10 pb-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: brand.fonts.heading }}>Send us a Message</h2>
                  <p className="text-sm text-muted-foreground">Fill out the form below and we’ll get back to you shortly.</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider">Full Name</label>
                      <Input 
                        placeholder="Juan Dela Cruz" 
                        {...register("name", { required: "Name is required" })} 
                        className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.name && <p className="text-[10px] text-destructive font-bold">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider">Work Email</label>
                      <Input 
                        placeholder="juan@company.com" 
                        type="email" 
                        {...register("email", { 
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })} 
                        className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.email && <p className="text-[10px] text-destructive font-bold">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider">Company / Organization</label>
                    <Input placeholder="Enter company name" {...register("company")} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider">Your Message</label>
                    <Textarea 
                      placeholder="Tell us about your training needs or inquiry..." 
                      rows={6} 
                      {...register("message", { required: "Please enter your message" })} 
                      className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.message && <p className="text-[10px] text-destructive font-bold">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-bold transition-all hover:shadow-lg active:scale-[0.98]" 
                    style={{ backgroundColor: brand.colors.primary, color: brand.colors.white }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </div>
  );
}
import React, { useMemo, useState } from "react";
import axios from "axios";
import { brand, valuePillars, modules, trust, faqHome, saveFormLocally } from "../mock";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";
import * as Icons from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Reusable Icon Component
const Icon = ({ name, className, color }) => {
  const Lucide = Icons[name] || Icons.Circle;
  return <Lucide className={className} style={{ color: color }} />;
};

export default function HomePage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const API = `${process.env.REACT_APP_BACKEND_URL}api` || "";

  // Syncing the "Coming Soon" logic from your Services overview
  const processedModules = useMemo(() => {
    const comingSoonIds = ["2", "3", "4", "5", "6", "7"];
    return modules.map(m => ({
      ...m,
      isComingSoon: comingSoonIds.includes(String(m.id))
    })).slice(0, 4); // Only show top 4 on home
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/proposals`, { ...data, source_page: "home" });
      toast.success("Request received. We'll respond within 24 hours.");
      reset();
    } catch (e) {
      const ok = saveFormLocally("osh-proposal-requests", data);
      if (ok) toast.success("Offline: Saved locally for sync.");
      else toast.error("Submission failed. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-0" style={{ fontFamily: brand.fonts.body }}>
      <Toaster richColors position="top-center" />

      {/* --- HERO SECTION: Authority & Lead Gen --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 -z-20">
          <img 
            src={brand.hero.images[0]} 
            alt="Consultancy Background" 
            className="h-full w-full object-cover scale-105 animate-slow-zoom" 
          />
          <div 
            className="absolute inset-0" 
            style={{ background: `linear-gradient(to right, ${brand.colors.slate}F2, ${brand.colors.slate}80)` }}
          />
        </div>

        <div className="mx-auto max-w-screen-xl px-4 grid lg:grid-cols-2 gap-12 py-20 items-center w-full">
          <div className="text-white space-y-6">
            <Badge className="bg-primary/20 text-grey border-primary/30 backdrop-blur-md px-4 py-1">
              Trusted OSH Consultancy
            </Badge>
            <h1 
              className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
              style={{ fontFamily: brand.fonts.heading }}
            >
              {brand.hero.headline.split(' ').map((word, i) => 
                i === 2 ? <span key={i} style={{ color: brand.colors.primary }}>{word} </span> : word + ' '
              )}
            </h1>
            <p className="text-xl text-white/80 max-w-xl leading-relaxed">
              {brand.hero.sub}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 h-14 text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: brand.colors.primary }}
                onClick={() => navigate("/services")}
              >
                View Training Modules
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 h-14 text-lg border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate("/about")}
              >
                Our Story
              </Button>
            </div>
          </div>

          {/* Lead Gen Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-gold rounded-2xl blur opacity-25" />
            <Card className="relative border-white/20 bg-white/10 backdrop-blur-2xl text-white shadow-2xl overflow-hidden">
              <CardHeader className="border-b border-white/10 pb-6">
                <CardTitle className="text-2xl">Request a Proposal</CardTitle>
                <p className="text-sm text-white/60">Tailored safety solutions for your organization.</p>
              </CardHeader>
              <CardContent className="pt-8">
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Name" {...register("name", { required: true })} className="bg-white/5 border-white/10 focus:bg-white/10" />
                    <Input placeholder="Work Email" type="email" {...register("email", { required: true })} className="bg-white/5 border-white/10 focus:bg-white/10" />
                  </div>
                  <Input placeholder="Company Name" {...register("company")} className="bg-white/5 border-white/10 focus:bg-white/10" />
                  <Textarea placeholder="How can we help?" {...register("message")} className="bg-white/5 border-white/10 focus:bg-white/10 min-h-[100px]" />
                  <Button 
                    disabled={isSubmitting}
                    className="w-full h-12 text-lg font-bold"
                    style={{ backgroundColor: brand.colors.primary, color: brand.colors.white }}
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* --- VALUE PILLARS: Why OSHSOME? --- */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: brand.fonts.heading }}>The OSHSOME Advantage</h2>
            <p className="text-muted-foreground">We combine technical standards with modern pedagogy to deliver measurable safety results.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {valuePillars.map((p, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-transparent hover:border-border hover:bg-muted/30 transition-all duration-300">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={p.icon} className="h-7 w-7" color={brand.colors.primary} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: brand.fonts.heading }}>{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST & CREDENTIALS --- */}
      <section className="py-20 bg-slate-50 border-y border-border">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: brand.fonts.heading }}>Accredited Expertise. <br/>Measurable Impact.</h2>
              <div className="flex flex-wrap gap-2">
                {trust.badges.map((b, i) => (
                  <Badge key={i} variant="outline" className="py-2 px-4 rounded-lg bg-white shadow-sm border-border/50">
                    <span className="font-bold text-primary mr-1">{b.label}</span> {b.sub}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {trust.metrics.map((m, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-border/50 text-center shadow-sm">
                  <div className="text-3xl font-black text-primary" style={{ color: brand.colors.primary }}>
                    {m.value}{m.suffix}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-2">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED MODULES --- */}
      <section className="py-24 mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: brand.fonts.heading }}>Featured Training</h2>
            <p className="text-muted-foreground mt-2">Specialized curriculum for modern safety standards.</p>
          </div>
          <Button variant="ghost" className="w-fit group" onClick={() => navigate("/services")}>
            View all modules <Icons.ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processedModules.map((m) => (
            <Card key={m.id} className={`group flex flex-col h-full transition-all hover:shadow-lg ${m.isComingSoon ? 'opacity-70 grayscale-[0.3]' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={m.icon} className="h-5 w-5" color={m.isComingSoon ? brand.colors.slate : brand.colors.primary} />
                  </div>
                  {m.isComingSoon && <Badge variant="secondary" className="text-[10px]">Coming Soon</Badge>}
                </div>
                <CardTitle className="text-lg mt-4 leading-tight">{m.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-2 mb-6">{m.blurb}</p>
                <Button 
                  disabled={m.isComingSoon}
                  variant={m.isComingSoon ? "outline" : "default"}
                  className="mt-auto w-full rounded-xl"
                  style={{ backgroundColor: m.isComingSoon ? 'transparent' : brand.colors.primary }}
                  onClick={() => navigate(m.path)}
                >
                  {m.isComingSoon ? "Under Development" : m.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-white border-t border-border">
        <div className="mx-auto max-w-screen-xl px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: brand.fonts.heading }}>Common Inquiries</h2>
            <p className="text-muted-foreground leading-relaxed">Everything you need to know about our consultancy engagement and training process.</p>
            <Button variant="link" className="p-0 mt-4 text-primary" onClick={() => navigate("/contact")}>
              Still have questions? Contact us.
            </Button>
          </div>
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqHome.map((f, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-xl px-4 bg-muted/20 border-transparent hover:border-border transition-colors">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-24">
        <div className="mx-auto max-w-screen-xl px-4">
          <div 
            className="rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden"
            style={{ backgroundColor: brand.colors.slate }}
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <h2 
              className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight"
              style={{ fontFamily: brand.fonts.heading }}
            >
              Ready to build a <span style={{ color: brand.colors.primary }}>safer, smarter</span> workplace?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Join leading organizations that prioritize people and performance through accredited OSH expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="rounded-full px-12 h-16 text-xl font-bold shadow-2xl transition-transform hover:scale-105"
                style={{ backgroundColor: brand.colors.primary }}
                onClick={() => navigate("/contact")}
              >
                Request Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

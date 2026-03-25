import React from "react";
import { brand } from "../mock";
import EnrollmentForm from "../components/EnrollmentForm"; // Ensure this path is correct
import { Toaster } from "../components/ui/sonner";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ShieldCheck, 
  FileText 
} from "lucide-react";
import * as Icons from "lucide-react";

// --- 1. UTILITY: Dynamic Icon Resolver ---
const ServiceIcon = ({ name, className }) => {
  const Lucide = Icons[name] || Icons.Circle;
  return <Lucide className={className} />;
};

// --- 2. SUB-COMPONENT: Hero Section (Optimized for Readability) ---
const HeroSection = ({ content, onScrollToForm }) => (
  <section className="relative overflow-hidden pt-24 pb-24 border-b border-white/10">
    {/* Deep Background with subtle texture */}
    <div className="absolute inset-0 -z-10 bg-[#0F172A]" /> 
    
    {/* Refined Glow: Reduced opacity and shifted further away from card */}
    <div 
      className="absolute inset-0 -z-0 opacity-30 pointer-events-none" 
      style={{ 
        background: `radial-gradient(circle at 90% 10%, ${brand.colors.primary}33, transparent 50%)` 
      }} 
    />
    
    <div className="mx-auto max-w-screen-xl px-4 grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        {/* Badge: High contrast text on semi-transparent background */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
            DOLE-OSHC Accredited
          </span>
        </div>

        <div className="space-y-4">
          <h1 
            className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl" 
            style={{ fontFamily: brand.fonts.heading, color: brand.colors.slate }}
          >
            {content.hero.title}
          </h1>
          {/* Lightened from slate-300 to slate-200 for better contrast */}
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
            {content.hero.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
          <Button 
            size="lg" 
            className="font-black px-10 h-16 text-lg shadow-xl hover:brightness-110 transition-all" 
            style={{ backgroundColor: brand.colors.gold, color: brand.colors.ink }}
            onClick={onScrollToForm}
          >
            {content.hero.cta} <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          
          <div className="flex items-center gap-3 py-2">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck className="h-6 w-6" style={{ color: brand.colors.primary }} />
            </div>
            <div className="flex flex-col">
              <span className="text-black font-bold text-sm">Official Certification</span>
              <span className="text-slate-400 text-xs uppercase tracking-tighter">Included upon completion</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side: Enhanced Glassmorphism Card */}
      <div className="hidden lg:block relative">
        <div 
          className="absolute -inset-4 opacity-20 blur-3xl rounded-full" 
          style={{ backgroundColor: brand.colors.primary }}
        />
        {/* Increased background opacity for better text contrast */}
        <Card className="relative border-white/10 bg-white/[0.07] backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Subtle top-light border effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <CardContent className="p-10 space-y-8">
            <div className="flex items-center gap-5 border-b border-white/10 pb-6">
              <div className="p-3 rounded-xl bg-gold/10" style={{ backgroundColor: `${brand.colors.gold}15` }}>
                <FileText className="h-8 w-8" style={{ color: brand.colors.gold }} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Resource Context</p>
                <p className="text-lg font-bold text-black-400">Program Syllabus</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* Added subtle text shadow to enhance legibility over glass background */}
              <p className="text-muted-foreground leading-relaxed text-lg italic drop-shadow-sm">
                "{content.overview || content.definition}"
              </p>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="h-4 w-4" />
                <span>Fully compliant with RA 11058</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

// --- 3. SUB-COMPONENT: Curriculum Grid ---
const CurriculumSection = ({ content }) => {
  const topics = content.keyTopics || content.scope || [];
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: brand.fonts.heading, color: brand.colors.slate }}>
              What You'll Master
            </h2>
            <p className="text-muted-foreground italic">Comprehensive modules designed for practical workplace application.</p>
          </div>
          <Badge variant="outline" className="h-fit py-2 px-4 border-primary text-primary font-bold">
            {topics.length} Core Focus Areas
          </Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {topics.map((item, idx) => (
            <Card key={idx} className="group hover:shadow-xl transition-all border-border/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ServiceIcon name={item.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg" style={{ fontFamily: brand.fonts.heading }}>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.items}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. SUB-COMPONENT: Benefits List ---
const BenefitsSection = ({ content }) => {
  const benefits = content.highlights || content.benefits || [];
  return (
    <section className="py-24 border-y border-border bg-white">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: brand.fonts.heading }}>
          {content.benefits ? "Why Choose This Service?" : "Program Highlights"}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((point, idx) => (
            <div key={idx} className="flex gap-4 items-start p-6 rounded-2xl bg-muted/30">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">{point.title || `Result ${idx + 1}`}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.desc || point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. MAIN ORCHESTRATOR ---
export default function ServiceModulePage({ content, endpoint }) {
  const handleScrollToForm = () => {
    document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: brand.fonts.body }}>
      <Toaster richColors position="top-center" />

      <HeroSection content={content} onScrollToForm={handleScrollToForm} />
      
      <CurriculumSection content={content} />
      
      <BenefitsSection content={content} />

      <section className="py-24 mx-auto max-w-screen-xl px-4" id="enroll-form">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* FAQ Accordion */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-6 text-primary font-bold uppercase tracking-widest text-xs">
              <HelpCircle className="h-4 w-4" />
              Common Questions
            </div>
            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: brand.fonts.heading }}>Knowledge Base</h2>
            <Accordion type="single" collapsible className="w-full">
              {content.faq?.map((f, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-border/60">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Registration Card */}
          <div className="lg:col-span-7">
            <EnrollmentForm content={content} endpoint={endpoint} />
          </div>
        </div>
      </section>
    </div>
  );
}
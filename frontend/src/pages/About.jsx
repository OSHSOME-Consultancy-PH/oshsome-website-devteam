import React from "react";
import { brand } from "../mock";
import { Card, CardContent } from "../components/ui/card";
import { Target, Eye, ShieldCheck, Heart, Zap, Award, User } from "lucide-react";

// Sub-component for Value Items to keep the main render clean
const ValueItem = ({ icon: Icon, title, description }) => (
  <div className="flex gap-4 p-4 rounded-xl transition-colors hover:bg-muted/50">
    <div 
      className="flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center" 
      style={{ backgroundColor: `${brand.colors.primary}15` }}
    >
      <Icon className="h-5 w-5" style={{ color: brand.colors.primary }} />
    </div>
    <div>
      <h4 className="font-semibold text-foreground" style={{ fontFamily: brand.fonts.heading }}>{title}</h4>
      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0" style={{ fontFamily: brand.fonts.body }}>
      
      {/* 1. Hero Section - Dynamic & Authoritative */}
      <section className="relative overflow-hidden py-20 lg:py-32 border-b border-border">
        <div 
          className="absolute inset-0 -z-10 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(${brand.colors.primary} 1px, transparent 1px)`, 
            backgroundSize: '32px 32px' 
          }} 
        />
        <div className="mx-auto max-w-screen-xl px-4 text-center md:text-left">
          <Badge className="mb-4" style={{ backgroundColor: `${brand.colors.primary}20`, color: brand.colors.primary }}>
            Safety First Excellence
          </Badge>
          <h1 
            className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl" 
            style={{ fontFamily: brand.fonts.heading, color: brand.colors.slate }}
          >
            Empowering organizations to build <span style={{ color: brand.colors.primary }}>resilient workplaces.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            OSHSOME Consultancy delivers standards-aligned training and evidence-based measurement to ensure every worker returns home healthy, every day.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision - Split Layout */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-screen-xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6" style={{ color: brand.colors.primary }} />
                <h2 className="text-2xl font-bold" style={{ fontFamily: brand.fonts.heading }}>Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-9 border-l-2 border-primary/20 group-hover:border-primary transition-colors">
                To equip teams with practical, measurable OSH competencies that protect people and power organizational performance.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6" style={{ color: brand.colors.primary }} />
                <h2 className="text-2xl font-bold" style={{ fontFamily: brand.fonts.heading }}>Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-9 border-l-2 border-primary/20 group-hover:border-primary transition-colors">
                To lead a nationwide culture of safety and resilience, setting the gold standard for workplace wellness in the region.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-background shadow-sm border-none">
              <CardContent className="pt-6">
                <ShieldCheck className="h-8 w-8 mb-4 opacity-50" />
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Standards Aligned</p>
              </CardContent>
            </Card>
            <Card className="bg-background shadow-sm border-none md:mt-8">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 mb-4 opacity-50" />
                <p className="text-2xl font-bold text-primary">Evidence</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Based Pedagogy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Core Values - Feature Grid */}
      <section className="py-20 mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: brand.fonts.heading }}>Our Core Values</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ValueItem icon={ShieldCheck} title="Integrity" description="Radical transparency in every engagement and outcome." />
          <ValueItem icon={Award} title="Evidence" description="Results driven by data and proven safety methodologies." />
          <ValueItem icon={Heart} title="Respect" description="Deep commitment to the dignity and safety of every worker." />
          <ValueItem icon={Zap} title="Agility" description="Continuous improvement through modern, pedagogical innovation." />
        </div>
      </section>

      {/* 4. Brand Story - Spotlight Layout */}
      <section className="py-20 bg-slate-950 text-slate-50 overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-4 grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-2 relative">
             <div 
              className="aspect-square rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700"
              aria-label="Founder Spotlight"
            >
              <User className="h-32 w-32 text-slate-600" />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 bg-primary rounded-xl hidden lg:block shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-white/80">Founder</p>
              <p className="text-lg font-bold text-white">Rogelio V. Mendoza Jr.</p>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: brand.fonts.heading }}>The OSHSOME Story</h2>
            <p className="text-lg text-slate-300 leading-relaxed italic">
              "Building OSHSOME was about bridging the gap between technical precision and human-centered delivery."
            </p>
            <p className="text-slate-400 leading-relaxed">
              Founded by Rogelio Valle Mendoza Jr., OSHSOME Consultancy blends accredited expertise with a passion for transformative workplace culture. We don't just teach safety; we engineer the mindset and systems that sustain it. 
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-white">Accredited</p>
                <p className="text-sm text-slate-500">Expertise</p>
              </div>
              <div className="border-l border-slate-800 pl-8">
                <p className="text-2xl font-bold text-white">Pedagogy</p>
                <p className="text-sm text-slate-500">Modernized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Simple Badge component assuming it might not be in your UI library
const Badge = ({ children, style, className }) => (
  <span 
    className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${className}`}
    style={style}
  >
    {children}
  </span>
);
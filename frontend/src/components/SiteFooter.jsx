import React from "react";
import { Link } from "react-router-dom";
import { brand, modules } from "../mock";
import { Mail, Phone, MapPin, Shield, ArrowUpRight, Globe } from "lucide-react";

// Reusable Footer Link Component
const FooterLink = ({ to, children, external = false }) => {
  const className = "text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group";
  
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children} <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-border bg-background">
      {/* Visual Accent - Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. Brand & Identity */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div 
                className="h-10 w-10 rounded-xl transition-transform group-hover:rotate-12" 
                style={{ backgroundColor: brand.colors.primary }} 
              />
              <span 
                className="text-xl font-bold tracking-tight" 
                style={{ color: brand.colors.slate, fontFamily: brand.fonts.heading }}
              >
                {brand.name}
              </span>
            </Link>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {brand.legalName} — Leading the way in standards-aligned OSH consultancy and technical excellence.
            </p>

            {/* Credibility Badge */}
            <div className="inline-flex flex-col gap-2 p-4 rounded-2xl bg-muted/50 border border-border/50">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Accredited Operations</span>
              </div>
              <p className="text-[10px] text-muted-foreground leading-tight">
                Permit: {brand.contact.permit.permitNo}<br/>
                eOR: {brand.contact.permit.eOR}<br/>
                Issued: {brand.contact.permit.dateIssued}
              </p>
            </div>
          </div>

          {/* 2. Quick Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest" style={{ color: brand.colors.slate }}>
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">Our Story</FooterLink>
              <FooterLink to="/services">All Services</FooterLink>
              <FooterLink to="/contact">Request Proposal</FooterLink>
            </nav>
          </div>

          {/* 3. Training Modules (Dynamic) */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest" style={{ color: brand.colors.slate }}>
              Training
            </h4>
            <nav className="flex flex-col gap-3">
              {modules.slice(0, 4).map((m) => (
                <FooterLink key={m.id} to={m.path}>
                  {m.title}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* 4. Contact & Location */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest" style={{ color: brand.colors.slate }}>
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="mt-1 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">Email</p>
                  <a href={`mailto:${brand.contact.email}`} className="text-sm hover:text-primary transition-colors">
                    {brand.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="mt-1 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">Phone</p>
                  <a href={`tel:${brand.contact.phone}`} className="text-sm hover:text-primary transition-colors">
                    {brand.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="mt-1 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">Location</p>
                  <p className="text-sm text-muted-foreground leading-tight">
                    {brand.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {brand.legalName}. All rights reserved. Built for Operational Excellence.
          </p>
          
          <div className="flex items-center gap-6">
            <ul className="flex gap-4 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
              <li><a href="#" className="hover:text-primary">Cookies</a></li>
            </ul>
            <div className="h-4 w-px bg-border hidden md:block" />
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Globe className="h-3 w-3" />
              <span>PH / EN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
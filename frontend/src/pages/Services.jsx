import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as Icons from "lucide-react";
import { modules, brand } from "../mock";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const ServiceIcon = ({ name, color, isComingSoon }) => {
  const LucideIcon = Icons[name] || Icons.Circle;
  return (
    <div 
      className="h-12 w-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300" 
      style={{ backgroundColor: isComingSoon ? `${brand.colors.slate}15` : `${color}15` }}
    >
      <LucideIcon className="h-6 w-6" style={{ color: isComingSoon ? brand.colors.slate : color }} />
    </div>
  );
};

const ServiceCard = ({ module, isComingSoon, onNavigate }) => {
  return (
    <Card 
      className={`group relative flex flex-col h-full overflow-hidden transition-all duration-300 ${
        isComingSoon 
          ? "opacity-75 grayscale-[0.4] border-dashed" 
          : "hover:shadow-xl hover:-translate-y-1 cursor-pointer border-solid"
      }`}
      onClick={() => !isComingSoon && onNavigate(module.path)}
    >
      {isComingSoon && (
        <Badge 
          className="absolute top-3 right-3 z-10 bg-muted text-muted-foreground border-none backdrop-blur-md"
          variant="outline"
        >
          Coming Soon
        </Badge>
      )}
      
      <CardHeader className="pb-4">
        <ServiceIcon name={module.icon} color={brand.colors.primary} isComingSoon={isComingSoon} />
        <CardTitle 
          className="text-lg mt-4 leading-tight transition-colors group-hover:text-primary" 
          style={{ fontFamily: brand.fonts.heading }}
        >
          {module.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow">
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
          {module.blurb}
        </p>
        
        <Button 
          disabled={isComingSoon}
          className="mt-6 w-full rounded-lg font-medium transition-all"
          style={{ 
            backgroundColor: isComingSoon ? 'transparent' : brand.colors.primary, 
            color: isComingSoon ? brand.colors.slate : brand.colors.white,
            border: isComingSoon ? `1px solid ${brand.colors.slate}33` : 'none',
            cursor: isComingSoon ? 'not-allowed' : 'pointer'
          }}
        >
          {isComingSoon ? "Module in Progress" : module.cta}
        </Button>
      </CardContent>
    </Card>
  );
};

export default function ServicesPage() {
  const navigate = useNavigate();

  // Logic to identify coming soon modules (2-7)
  const processedModules = useMemo(() => {
    const comingSoonIds = ["2", "3", "4", "5", "6", "7"]; 
    return modules.map(m => ({
      ...m,
      isComingSoon: comingSoonIds.includes(String(m.id))
    }));
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16" style={{ fontFamily: brand.fonts.body }}>
      <header className="max-w-3xl mb-12">
        <h1 
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4" 
          style={{ fontFamily: brand.fonts.heading, color: brand.colors.slate }}
        >
          Training <span style={{ color: brand.colors.primary }}>Roadmap</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We are rapidly expanding our curriculum to cover the full spectrum of operational consultancy. 
          <strong> Modules 2 through 7</strong> are currently in active development as we finalize 
          technical documentation and interactive materials.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {processedModules.map((m) => (
          <ServiceCard 
            key={m.id} 
            module={m} 
            isComingSoon={m.isComingSoon} 
            onNavigate={navigate}
          />
        ))}
      </div>
    </div>
  );
}
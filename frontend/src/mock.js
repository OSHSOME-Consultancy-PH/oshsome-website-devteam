// Centralized mock data and brand config for OSHSOME Consultancy (frontend-only)
// Note: Colors and fonts are placeholders derived from brand proposal descriptions.
// Replace with exact hex codes and font families once provided.

export const brand = {
  name: "OSHSOME Consultancy",
  legalName: "OSHSOME Resiliency Training Consultancy Service",
  colors: {
    // Safety Green (approx rich emerald) – replace with exact brand hex when available
    primary: "#1B8E6B",
    // Slate Gray (professional neutral)
    slate: "#2F3B45",
    // Gold Accent (prestige)
    gold: "#C9A227",
    // Base neutrals
    white: "#FFFFFF",
    ink: "#0F172A",
    muted: "#F3F4F6",
  },
  fonts: {
    heading: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
    body: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
  },
  contact: {
    email: "oshsome2025@gmail.com",
    phone: "(02) 7116-1132",
    address:
      "Unit 1503, South Tower, AMAIA Skies Sta. Mesa, V. Mapa St., Barangay 600, Sampaloc, NCR, City of Manila, First District, 1016",
    permit: {
      permitNo: "2025-000000000",
      eOR: "OR-2025-00000-A",
      dateIssued: "10/06/2025",
    },
  },
  hero: {
    headline: "Empowering Safer, Smarter, and More Resilient Workplaces.",
    sub: "Building a culture of safety and resilience through professional OSH training.",
    images: [
      // Selected for text-overlaid hero usage
      "https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1662309376159-b95fb193d96b?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1659353588972-f3be41ae0834?auto=format&fit=crop&w=2000&q=80",
    ],
  },
};

export const valuePillars = [
  {
    title: "Safety",
    desc: "Protecting people with practical, standards-aligned training.",
    icon: "ShieldCheck",
  },
  {
    title: "Resilience",
    desc: "Strengthening culture to anticipate, adapt, and recover.",
    icon: "Activity",
  },
  {
    title: "Compliance",
    desc: "Guided by DOLE-OSHC standards and global best practices.",
    icon: "FileCheck",
  },
];

export const modules = [
  {
    id: "so1",
    title: "Module 1: Introduction to OSH for Safety Officer 1 (SO1)",
    blurb:
      "Foundational OSH training covering RA 11058, DO 198, duties of employers and workers, and the essentials for establishing an OSH program. Mandatory for new safety officers.",
    icon: "ShieldCheck",
    cta: "Explore Module 1",
    path: "/module/so1",
  },
  {
    id: "so2",
    title: "Module 2: General Concepts on OSH",
    blurb:
      "Understand accident causation, the Domino Theory, the iceberg principle, and how to identify and control workplace hazards (safety, physical, chemical, biological, ergonomic).",
    icon: "BookOpen",
    cta: "Explore Module 2",
    path: "/module/so2",
  },
  {
    id: "so3a",
    title: "Module 3a: Basic Safety Rules and Measures",
    blurb:
      "Essential safety practices: 5S housekeeping, fire safety, machine guarding, materials handling, and electrical safety. Build a strong safety foundation.",
    icon: "Shield",
    cta: "Explore Module 3a",
    path: "/module/so3a",
  },
  {
    id: "so3b",
    title: "Module 3b: Chemical Safety",
    blurb:
      "Master GHS labeling, Safety Data Sheets (SDS), hierarchy of controls, and safe chemical handling and storage.",
    icon: "FlaskConical",
    cta: "Explore Module 3b",
    path: "/module/so3b",
  },
  {
    id: "wem",
    title: "Module 4: Work Environment Measurement (WEM)",
    blurb:
      "Certified industrial hygienists assess physical, chemical, and ventilation factors for compliance and well-being.",
    icon: "Wind",
    cta: "Explore Module 4",
    path: "/module/wem",
  },
  {
    id: "custom",
    title: "Custom Training",
    blurb: "Tailored programs for your specific hazards and operations.",
    icon: "Sliders",
    cta: "Request Proposal",
    path: "/contact",
  },
];

export const trust = {
  badges: [
    { label: "DOLE OSHC", sub: "Accredited Consultancy" },
    { label: "Permits", sub: "Verified & Current" },
  ],
  metrics: [
    { label: "Trained Employees", value: 1200, suffix: "+" },
    { label: "Programs Delivered", value: 85, suffix: "+" },
    { label: "Avg. CSAT", value: 4.9, suffix: "/5" },
  ],
};

export const faqHome = [
  {
    q: "What industries do you serve?",
    a: "Manufacturing, offices, healthcare, retail, logistics, and more—programs adapt to your risk profile.",
  },
  {
    q: "Are trainings customizable?",
    a: "Yes. We tailor content, depth, and delivery to your needs, including on-site seminars.",
  },
  {
    q: "How fast can we start?",
    a: "Proposal typically within 24 hours after your request.",
  },
];

export const wemContent = {
  hero: {
    title: "Work Environment Measurement (WEM)",
    subtitle:
      "Optimizing Indoor Air Quality — a breath of fresh air for your employees.",
    cta: "Book a WEM Training Session",
  },
  definition:
    "Oshsome’s certified industrial hygienists assess physical and chemical hazards such as ventilation, airborne contaminants, illumination, and noise to ensure workplace compliance and employee well-being. DOLE-OSHC-ECD Accredited Consultancy Service.",
  scope: [
    {
      title: "CAT 1A – Physical Hazards",
      items:
        "Noise, illumination, temperature, humidity, ventilation, radiation, ergonomics",
      icon: "Activity",
    },
    {
      title: "CAT 1B – Chemical Hazards",
      items: "Dust, fumes, gases, vapors, solvents",
      icon: "FlaskConical",
    },
    {
      title: "CAT 1C – Ventilation",
      items: "Air movement, air change rates, local exhaust ventilation",
      icon: "Wind",
    },
    {
      title: "Optional – Biological Hazards",
      items: "Upon request",
      icon: "Biohazard",
    },
  ],
  benefits: [
    {
      title: "Enhanced Employee Well-Being",
      icon: "HeartPulse",
      desc: "Reduce exposure and improve comfort through targeted controls.",
    },
    {
      title: "Compliance Expertise",
      icon: "ShieldCheck",
      desc: "Align with Philippine OSHS and international standards.",
    },
    {
      title: "Proactive & Actionable",
      icon: "CheckCircle2",
      desc: "Prioritize hazards and plan corrective actions efficiently.",
    },
    {
      title: "Data-Driven Decisions",
      icon: "BarChart3",
      desc: "Collect, analyze, and act on measurements that matter.",
    },
  ],
  process: [
    "Submit Request (email / form)",
    "Ocular Visit & Assessment",
    "Proposal Sent within 24 hours",
    "Test Plan Preparation",
    "On-Site Awareness Seminar",
    "WEM Sampling & Discussion of Findings",
    "Laboratory & Data Analysis",
    "Certificate of Completion",
    "Client Access via QR Code Results",
  ],
  faq: [
    {
      q: "What is the process?",
      a: "We follow a 9-step sequence from request to certificate and QR-based results access.",
    },
    {
      q: "How long does an assessment take?",
      a: "It depends on facility size and scope; proposals include timelines.",
    },
    {
      q: "Can you help comply with Philippine OSHS?",
      a: "Yes, we align with Rules 1070–1180 and related regulations.",
    },
    {
      q: "Do you follow international standards?",
      a: "Yes, including SS 554 (Singapore) and cross-referenced benchmarks.",
    },
    {
      q: "Do you provide recommendations?",
      a: "Yes — engineering, administrative controls, and PPE guidance.",
    },
  ],
};

// Additional Page Content SO1&SO2

export const so1Content = {
  hero: {
    title: "Introduction to Occupational Safety and Health for Safety Officer 1 (SO1)",
    subtitle:
      "Mandatory 8‑hour orientation course covering Philippine OSH laws, employer/worker duties, and the essentials for establishing an effective OSH program.",
    cta: "Enroll in SO1 Training",
  },
  overview:
    "This foundational module is designed for newly designated safety officers, supervisors, and business owners who need to understand the legal framework and core principles of occupational safety and health in the Philippines. It covers RA 11058, DOLE Department Order No. 198, OSH Standards, and the roles of the OSH Committee and Safety Officer.",
  keyTopics: [
    {
      title: "Legal Basis",
      items: "RA 11058, DO 198, OSH Standards, employer/worker duties, workers' rights",
      icon: "FileText",
    },
    {
      title: "OSH Data & Statistics",
      items: "Global and national occupational injury/illness data, Vision 1 Million campaign",
      icon: "BarChart3",
    },
    {
      title: "OSH Committee & Safety Officer",
      items: "Composition, duties, classification (SO1 to SO4), and minimum requirements",
      icon: "Users",
    },
    {
      title: "OH Personnel & Facilities",
      items: "First-aiders, nurses, physicians, clinics, and dental services",
      icon: "HeartPulse",
    },
  ],
  highlights: [
    "Every worker has the right to a safe and healthy workplace.",
    "Establishments must comply with RA 11058 and its IRR.",
    "Employers, workers, safety officers, and OSH committee members share responsibility.",
    "The OSH committee is a crucial avenue for communicating OSH policies.",
  ],
  faq: [
    {
      q: "Who should take this course?",
      a: "Newly appointed safety officers, supervisors, managers, and business owners who need to understand OSH compliance and program implementation.",
    },
    {
      q: "Is this course mandatory?",
      a: "Yes, for anyone designated as Safety Officer 1 (SO1) under DOLE requirements. It also serves as a prerequisite for higher-level safety officer courses.",
    },
    {
      q: "What will I learn?",
      a: "You'll learn about OSH laws, accident data, the roles of the OSH committee and safety officer, and the basic steps to establish an OSH program.",
    },
    {
      q: "How long is the training?",
      a: "The orientation is 8 hours, plus 2 hours of trainers' training as per DOLE requirements.",
    },
  ],
};

export const so2Content = {
  hero: {
    title: "General Concepts on Occupational Safety and Health",
    subtitle:
      "Master the foundational theories of accident causation, hazard identification, and risk assessment to build a safer workplace.",
    cta: "Book This Module",
  },
  overview:
    "This module dives deep into the core concepts of OSH: understanding accidents, unsafe acts vs. unsafe conditions, the Domino Theory, the iceberg principle, and the classification of workplace hazards (safety, physical, chemical, biological, ergonomic). Participants will learn to identify hazards and assess risks effectively.",
  keyTopics: [
    {
      title: "Accident Causation",
      items: "Definition of accident, common excuses, Heinrich's Domino Theory, iceberg principle",
      icon: "AlertTriangle",
    },
    {
      title: "Unsafe Acts vs. Unsafe Conditions",
      items: "Examples and how to identify them in the workplace",
      icon: "Eye",
    },
    {
      title: "Workplace Hazards",
      items: "Safety hazards, physical hazards (noise, vibration, illumination, temperature, pressure, radiation), chemical, biological, ergonomic",
      icon: "FlaskConical",
    },
    {
      title: "Risk Assessment",
      items: "Definition of risk, risk = likelihood × consequence, classification of establishments (low/medium/high risk)",
      icon: "Gauge",
    },
  ],
  highlights: [
    "A fatal accident is just the tip of the iceberg – there are many unsafe acts and conditions below.",
    "98% of accidents are preventable.",
    "88% of accidents are caused by unsafe acts; 10% by unsafe conditions.",
    "Hazard = potential to cause harm; Risk = probability × severity.",
  ],
  faq: [
    {
      q: "What is the difference between a hazard and a risk?",
      a: "A hazard is anything with the potential to cause harm (e.g., a wet floor). Risk is the likelihood that harm will occur multiplied by its severity.",
    },
    {
      q: "How do I identify unsafe acts?",
      a: "Look for behaviors that deviate from safe procedures: removing guards, using defective equipment, horseplay, etc.",
    },
    {
      q: "What are the four categories of health hazards?",
      a: "Physical (noise, radiation, etc.), Chemical (dust, gases, fumes), Biological (bacteria, viruses), and Ergonomic (repetitive motion, poor posture).",
    },
    {
      q: "Why is the iceberg principle important?",
      a: "It reminds us that a single fatal accident is preceded by many minor incidents and unsafe conditions. Preventing minor issues prevents major ones.",
    },
  ],
};

// ==================== Module 3a: Basic Safety Rules and Measures ====================
export const so3aContent = {
  hero: {
    title: "Basic Safety Rules and Measures",
    subtitle:
      "Learn the essential safety practices for housekeeping, fire prevention, machine guarding, materials handling, and electrical safety to create a safer workplace.",
    cta: "Enroll in Module 3a",
  },
  overview:
    "This module covers the fundamental safety rules and control measures that every safety officer and worker must know. Topics include the 5S system for good housekeeping, fire safety principles, machine guarding and lock-out/tag-out, safe materials handling and storage, and electrical safety practices. These are the building blocks of an effective workplace safety program.",
  keyTopics: [
    {
      title: "Workplace Good Housekeeping (5S)",
      items: "Sort, Set in order, Shine, Standardize, Sustain – principles to eliminate hazards and improve efficiency",
      icon: "Grid",
    },
    {
      title: "Fire Safety",
      items: "Fire triangle, fire classification, prevention principles, detection, suppression, evacuation",
      icon: "Flame",
    },
    {
      title: "Machine Safety",
      items: "Hazardous motions, machine guarding, lock-out/tag-out (LOTO), safety devices",
      icon: "Cog",
    },
    {
      title: "Materials Handling & Storage",
      items: "Manual lifting techniques, mechanical handling, storage principles, labeling",
      icon: "Package",
    },
    {
      title: "Electrical Safety",
      items: "Hazard clues, grounding, GFCI, guarding, personal protective equipment",
      icon: "Zap",
    },
  ],
  highlights: [
    "5S is the foundation of workplace organization and hazard prevention.",
    "Fire prevention relies on controlling the three elements: fuel, oxygen, and heat.",
    "Machine guards are barriers that prevent contact with hazardous moving parts.",
    "Proper lifting techniques and storage prevent musculoskeletal injuries and accidents.",
    "Regular inspection of electrical equipment and use of GFCI reduces electrocution risk.",
  ],
  faq: [
    {
      q: "What is the 5S system?",
      a: "5S is a workplace organization method: Sort (remove unnecessary items), Set in order (arrange for efficiency), Shine (clean regularly), Standardize (create procedures), Sustain (maintain discipline).",
    },
    {
      q: "How do I choose the right fire extinguisher?",
      a: "Match the extinguisher class to the fire type: Class A for ordinary combustibles, B for flammable liquids, C for electrical fires, D for combustible metals, K for kitchen fires.",
    },
    {
      q: "What is lock-out/tag-out (LOTO)?",
      a: "LOTO is a procedure to isolate hazardous energy sources (electrical, mechanical, etc.) during maintenance to prevent unexpected startup or release of stored energy.",
    },
    {
      q: "What is the proper way to lift heavy objects?",
      a: "Stand close to the load, keep feet apart, bend knees, keep back straight, get a firm grip, lift with legs, and avoid twisting.",
    },
    {
      q: "What are signs of electrical hazards?",
      a: "Tripped breakers, blown fuses, warm tools or cords, frayed insulation, and circuit breakers that repeatedly shut off.",
    },
  ],
};

// ==================== Module 3b: Chemical Safety ====================
export const so3bContent = {
  hero: {
    title: "Chemical Safety",
    subtitle:
      "Master the safe handling, storage, and disposal of chemicals through proper labeling, Safety Data Sheets (SDS), and the hierarchy of controls.",
    cta: "Enroll in Module 3b",
  },
  overview:
    "Chemical safety is critical for any workplace that uses, stores, or transports hazardous substances. This module teaches how to identify chemical hazards using GHS labels and Safety Data Sheets, implement safe work practices, apply the hierarchy of controls, and manage chemical storage and emergency response. Protect your workers and the environment by building a robust chemical safety program.",
  keyTopics: [
    {
      title: "Hazard Identification",
      items: "Walk‑through surveys, process review, worker input, GHS labels, Safety Data Sheets (SDS)",
      icon: "Search",
    },
    {
      title: "GHS Labeling & SDS",
      items: "Globally Harmonized System pictograms, signal words, hazard statements, and the 16‑section SDS format",
      icon: "Tag",
    },
    {
      title: "Safe Handling & Storage",
      items: "Chemical compatibility, storage containers, ventilation, access, and labeling",
      icon: "Warehouse",
    },
    {
      title: "Hierarchy of Controls",
      items: "Elimination, substitution, engineering controls, administrative controls, PPE",
      icon: "BarChart3",
    },
    {
      title: "Emergency Preparedness",
      items: "Spill response, first aid, fire measures, and personal protective equipment",
      icon: "AlertTriangle",
    },
  ],
  highlights: [
    "Every chemical container must have a proper GHS label with hazard pictograms.",
    "Safety Data Sheets (SDS) provide 16 sections of critical information about a chemical.",
    "The hierarchy of controls prioritizes elimination and substitution over PPE.",
    "Chemical storage must consider compatibility, segregation, ventilation, and spill containment.",
    "Workers must be trained on safe handling procedures and emergency response.",
  ],
  faq: [
    {
      q: "What is the Globally Harmonized System (GHS)?",
      a: "GHS is an international standard for classifying and labeling chemicals, using consistent hazard pictograms, signal words, and statements to communicate risks.",
    },
    {
      q: "What information is on a Safety Data Sheet (SDS)?",
      a: "An SDS includes 16 sections: identification, hazards, composition, first‑aid, firefighting, accidental release, handling/storage, exposure controls, physical/chemical properties, stability, toxicology, ecology, disposal, transport, regulatory, and other information.",
    },
    {
      q: "What is the hierarchy of controls?",
      a: "It ranks control measures from most effective to least: Elimination, Substitution, Engineering Controls, Administrative Controls, and Personal Protective Equipment (PPE).",
    },
    {
      q: "How should I store chemicals?",
      a: "Store by compatibility (e.g., acids separate from bases), in properly labeled containers, with adequate ventilation, secondary containment, and away from ignition sources.",
    },
    {
      q: "What should I do in a chemical spill?",
      a: "Evacuate the area, alert others, refer to the SDS for spill response, use appropriate PPE, contain the spill, and clean up following established procedures.",
    },
  ],
};

export function saveFormLocally(key, data) {
  try {
    const list = JSON.parse(localStorage.getItem(key) || "[]");
    list.push({ ...data, savedAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(list));
    return true;
  } catch (e) {
    console.error("Local save error", e);
    return false;
  }
}

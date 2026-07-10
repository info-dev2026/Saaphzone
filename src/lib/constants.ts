export const COMPANY = {
  name: "Saaphzone Technologies",
  tagline: "Innovating for a Cleaner & Sustainable Tomorrow",
  description:
    "Saaphzone Technologies delivers advanced environmental solutions — from pollution control to renewable energy systems.",
  email: "sales@saaphzone.com",
  phone: "+91 98182 19904",
  address: "Plot No. 80, 1st Floor, Udyog Vihar Phase 1, Gurugram, Haryana, India",
  founded: "2018",
  website: "https://www.saaphzone.com",
};

export const DIRECTOR = {
  name: "Dr.VIVEK PRAKASH PANKAJ",
  phone: "+91 9882810053",
  designation: "Director, Saaphzone Technologies",
  bio: "Over 15 years of expertise in clean technology, industrial pollution control, and sustainable energy solutions — driving Saaphzone's mission of a greener tomorrow.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Solid Waste Management", href: "/services/solid-waste" },
      {
        label: "Air Pollution",
        href: "/services/air-pollution",
        children: [
          { label: "SPM (Dust Analyzer)", href: "/services/air-pollution/spm" },
        ],
      },
      { label: "BESS", href: "/services/bess" },
      { label: "Solar & Wind Energy", href: "/services/solar-wind" },
      { label: "Software Development", href: "/services/software-development" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "solid-waste",
    icon: "Recycle",
    title: "Solid Waste Management",
    description:
      "End-to-end solid waste processing solutions — collection, segregation, treatment, and safe disposal systems for industries and municipalities.",
    href: "/services/solid-waste",
    color: "from-blue-50 to-blue-100",
  },
  {
    id: "air-pollution",
    icon: "Wind",
    title: "Air Pollution",
    description:
      "Advanced filtration, scrubbing and dust-collection systems that bring industrial emissions below regulatory limits.",
    href: "/services/air-pollution",
    color: "from-sky-50 to-sky-100",
  },
  {
    id: "bess",
    icon: "Battery",
    title: "Battery Energy Storage System",
    description:
      "Grid-scale and commercial BESS solutions for reliable, intelligent energy storage that maximises renewable utilisation.",
    href: "/services/bess",
    color: "from-indigo-50 to-indigo-100",
  },
  {
    id: "solar-wind",
    icon: "Sun",
    title: "Solar & Wind Energy",
    description:
      "Turnkey solar PV, wind turbine, and hybrid renewable energy plants engineered for maximum yield and long-term ROI.",
    href: "/services/solar-wind",
    color: "from-blue-50 to-cyan-100",
  },
  {
    id: "software-development",
    icon: "Code",
    title: "Software Development",
    description:
      "Custom environmental tracking software, IoT telemetry integration, and enterprise compliance reporting dashboards.",
    href: "/services/software-development",
    color: "from-cyan-50 to-cyan-100",
  },
];

export const STATS = [
  { value: 350, suffix: "+", label: "Projects Completed" },
  { value: 40, suffix: "+", label: "Industries Served" },
  { value: 120000, suffix: "T", label: "CO₂ Reduced (tonnes)" },
  { value: 85, suffix: "MW", label: "Renewable Capacity" },
];

export const WHY_CHOOSE_US = [
  {
    icon: "Cpu",
    title: "Smart Technology",
    desc: "AI-driven monitoring and IoT sensors for real-time environmental data.",
  },
  {
    icon: "ShieldCheck",
    title: "Regulatory Compliance",
    desc: "Full alignment with CPCB, MoEFCC, and international ISO standards.",
  },
  {
    icon: "Factory",
    title: "Industrial Expertise",
    desc: "Sector-specific solutions built on 15+ years of field experience.",
  },
  {
    icon: "Leaf",
    title: "Sustainability Focus",
    desc: "Every solution designed to minimise environmental footprint.",
  },
  {
    icon: "Clock",
    title: "24/7 Monitoring",
    desc: "Round-the-clock remote monitoring with instant alert notifications.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Anil Mehta",
    company: "Mehta Steel Industries",
    quote:
      "Saaphzone's air pollution control system brought our emission levels well within CPCB norms. Their team was professional and efficient throughout the project.",
  },
  {
    name: "Priya Nair",
    company: "GreenBuild Constructions",
    quote:
      "The solid waste management solution installed by Saaphzone has significantly reduced our landfill dependency. Excellent ROI within the first year.",
  },
  {
    name: "Rajesh Gupta",
    company: "Apex Chemicals Ltd.",
    quote:
      "From consultation to commissioning, the BESS project was seamlessly managed. Our energy costs dropped by 30% in the first six months.",
  },
  {
    name: "Sneha Patel",
    company: "Suncrest Agro Industries",
    quote:
      "Our 2 MW solar plant by Saaphzone has been generating clean energy consistently. The monitoring dashboard keeps us informed at all times.",
  },
];

export const PROJECTS = [
  {
    category: "Air Pollution Control",
    title: "Dust Suppression System — Cement Plant, Rajasthan",
    description:
      "Installed a multi-stage ESP and wet scrubber system, reducing particulate matter by 94% across 4 production lines.",
  },
  {
    category: "Solid Waste Management",
    title: "Waste-to-Energy Plant — Municipal Corporation, UP",
    description:
      "Designed and commissioned a 15 TPD waste processing facility converting MSW to compost and energy pellets.",
  },
  {
    category: "Solar & Wind Energy",
    title: "5 MW Hybrid Solar-Wind Farm — Gujarat",
    description:
      "Integrated solar PV array with small wind turbines and BESS for 24/7 renewable power supply to an industrial cluster.",
  },
];

export const CORE_VALUES = [
  { icon: "Target", title: "Integrity", desc: "Honest, transparent operations in every engagement." },
  { icon: "Lightbulb", title: "Innovation", desc: "Continuously improving our technologies for better outcomes." },
  { icon: "Globe", title: "Sustainability", desc: "Long-term thinking that balances people, planet and profit." },
  { icon: "Users", title: "Collaboration", desc: "Working alongside clients as partners in progress." },
  { icon: "Star", title: "Excellence", desc: "Uncompromising quality in design, delivery and service." },
  { icon: "Shield", title: "Compliance", desc: "Zero tolerance for regulatory shortcuts or safety risks." },
];

export const MILESTONES = [
  { year: "2018", event: "Saaphzone Technologies founded in Noida with focus on industrial pollution control." },
  { year: "2019", event: "Completed first 50 projects across steel, cement, and chemical industries." },
  { year: "2020", event: "Expanded to renewable energy — solar and wind project portfolio launched." },
  { year: "2021", event: "ISO 9001:2015 certification achieved. BESS division established." },
  { year: "2022", event: "200+ projects milestone crossed. Pan-India operations expanded." },
  { year: "2023", event: "Launched IoT-based 24/7 emission monitoring platform." },
  { year: "2024", event: "350+ projects completed. 85 MW renewable capacity installed." },
];

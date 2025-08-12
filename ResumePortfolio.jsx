import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Download, Github, Linkedin, FolderOpen, Sun, Moon, ArrowRight } from "lucide-react";

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

const GlobalStyle = () => (
  <style>{`
    html { scroll-behavior: smooth; }
    .grad { background: radial-gradient(1200px 400px at 10% -10%, rgba(99,102,241,.15), transparent),
                         radial-gradient(1200px 400px at 90% -10%, rgba(16,185,129,.15), transparent); }
  `}</style>
);

const data = {
  name: "Felix R. Collazo Helgeson",
  title: "Prompt Engineer & AI Content Ops • Bilingual Writer • Archaeologist (Remote)",
  tagline:
    "Bilingual (EN/ES) prompt engineer focused on research-grade case studies, Veo 3 video generation, content ops, and advertising workflows—grounded in editorial rigor and public-sector experience.",
  contact: {
    email: "Felixcolahelllolz@gmail.com",
    phone: "803-404-7609",
    location: "Columbia, South Carolina",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile"
  },
  skills: [
    "Bilingual (EN/ES)",
    "Chat & Email Support",
    "Windows OS Troubleshooting",
    "Microsoft Office (Excel/Word/Outlook)",
    "ArcGIS, Avenza, GPS",
    "Photoshop & Visual Docs",
    "WordPress & CMS",
    "Digital Archiving",
    "Security+ (studying)",
    "Section 106 / NHPA",
    "AI Prompt Engineering for Case Studies",
    "Video Generation (Veo3)",
    "Content Creation & Management",
    "Advertising Strategy",
    "Portfolio & PDF Production",
    "Light HTML/CSS/JS"
  ],
  experience: [
    {
      role: "Archaeologist (GS-7)",
      org: "USDA NRCS — Caribbean Area (Corozal, PR)",
      points: [
        "Reviewed conservation plans (ProTracts, ArcGIS) for Section 106 / NEPA compliance under PR Programmatic Agreement.",
        "Guided planners and producers to protect historic properties while enabling funding approvals.",
        "Prepared maps and compliance documentation for cultural resource reviews."
      ]
    },
    {
      role: "Archaeologist (Resource Assistant GS-5/7)",
      org: "USDA Forest Service — Apache–Sitgreaves NFs (AZ)",
      points: [
        "Led field surveys; digitized records for NARA; produced technical site reports.",
        "Used ArcGIS/Avenza/GPS; collaborated with crews and volunteers as section lead.",
        "Recorded historic structures for NRHP eligibility; maintained data quality."
      ]
    },
    {
      role: "Bilingual Writer (Intern)",
      org: "Latin American News Digest (Remote)",
      points: [
        "Translated and summarized Spanish-language news for academic readership.",
        "Managed WordPress posts; delivered weekly content with strong QA."
      ]
    }
  ],
  education: [
    {
      degree: "B.A., Anthropology (Cum Laude) — University of South Carolina",
      meta: "Minor: Geography • GPA 3.71 • Dean’s List 2021–2023",
      year: "2023"
    },
    {
      degree: "A.A. — Midlands Technical College",
      meta: "2020",
      year: "2020"
    }
  ],
  certs: [
    "CompTIA Security+ (in progress; target Sep 2025)",
    "PADI Advanced Open Water Diver",
    "Section 106 Essential Training (ACHP)",
    "Cultural Resources Training (USDA AgLearn)",
    "Section 508 Accessibility Awareness",
    "FS–USDA Information Security Awareness",
    "Project Archaeology: Investigating Shelter — Virtual Educator Workshop"
  ],
  portfolio: [
    {
      title: "Veo 3 Short-Form Video Series",
      desc: "Prompted, iterated, and storyboarded AI-generated clips; delivery-ready assets and captions.",
      href: "#"
    },
    {
      title: "Ad Creative & Content Ops",
      desc: "Managed briefs, variants, and QC for multi-asset content cycles; export to PDF/portfolio.",
      href: "#"
    },
    {
      title: "AI Prompt Engineering: Taíno Social Structure Case Study",
      desc: "Bilingual (EN/ES) prompt design with audit trail, citations, and stance labeling.",
      href: "#"
    },
    {
      title: "Migration Timeline: Taíno/Arawakan Movements",
      desc: "Interactive timeline + sources for teaching and research.",
      href: "#"
    },
    {
      title: "Public Archaeology: PIT Ceramic Guide (USFS)",
      desc: "Volunteer-facing guide for ceramic ID and preservation methodology.",
      href: "#"
    }
  ],
  resumeHref: "/resume/FelixCollazoHelgesonFederalResume.pdf"
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm dark:border-zinc-700">
    {children}
  </span>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16">
    <div className="mx-auto max-w-5xl px-6">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {children}
    </div>
  </section>
);

export default function ResumePortfolio() {
  const { dark, setDark } = useTheme();

  const counters = useMemo(() => ([
    { label: "Field & Federal Service Hours", value: 1480 },
    { label: "Customer Service (EN/ES) Served", value: 5000 },
    { label: "Certs / Trainings", value: data.certs.length }
  ]), []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <GlobalStyle />
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="font-semibold tracking-tight">{data.name}</a>
          <nav className="hidden gap-6 md:flex">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <a href={data.resumeHref} target="_blank" rel="noreferrer">
              <Button className="gap-2"><Download className="h-4 w-4" /> Resume</Button>
            </a>
          </div>
        </div>
      </header>

      <div id="top" className="grad border-b dark:border-zinc-800">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-5">
          <div className="md:col-span-3">
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-tight md:text-5xl">{data.name}</motion.h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">{data.title}</p>
            <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">{data.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#portfolio"><Button className="gap-2"><FolderOpen className="h-4 w-4" /> View Portfolio</Button></a>
              <a href={data.resumeHref} target="_blank" rel="noreferrer"><Button variant="outline" className="gap-2"><Download className="h-4 w-4" /> Download Resume</Button></a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {counters.map((c, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <div className="text-3xl font-bold">{c.value}+</div>
                      <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{c.label}</div>
                    </motion.div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <a className="flex items-center gap-2 hover:underline" href={`mailto:${data.contact.email}`}><Mail className="h-4 w-4" /> {data.contact.email}</a>
                <a className="flex items-center gap-2 hover:underline" href={`tel:${data.contact.phone}`}><Phone className="h-4 w-4" /> {data.contact.phone}</a>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {data.contact.location}</div>
                <div className="pl-6 text-xs text-zinc-500">(Columbia, SC • Puerto Rico • Remote)</div>
                <div className="flex gap-3 pt-2">
                  <a href={data.contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Github className="h-4 w-4" /> GitHub</a>
                  <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Section id="about" title="About">
        <div className="max-w-3xl text-zinc-700 dark:text-zinc-300">
          Bilingual prompt engineer and content ops generalist with a foundation in archaeology and federal compliance. Experienced delivering research-grade prompts, Veo 3 video assets, portfolio-ready PDFs, and advertising-aligned content while maintaining accuracy, accessibility, and smooth remote collaboration. Over 1,480 combined hours in the field and federal archaeology service. Customer service experience includes selling to over 5,000 soldiers every weekend as a vendor at Ft. Jackson. Skilled in archaeological writing, fieldwork, and lab analysis, with proven bilingual communication supporting both editorial and operational goals.
        </div>
      </Section>

      <Section id="skills" title="Core Skills">
        <div className="flex flex-wrap gap-2">
          {data.skills.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="grid gap-4">
          {data.experience.map((job) => (
            <Card key={job.role} className="border-zinc-200 dark:border-zinc-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{job.role} — <span className="font-normal text-zinc-500">{job.org}</span></CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education & Certifications">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Education</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              {data.education.map((e, i) => (
                <div key={i}>
                  <div className="font-medium">{e.degree}</div>
                  {e.meta && <div className="text-zinc-500">{e.meta}</div>}
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Certifications & Training</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              <ul className="list-disc pl-5">
                {data.certs.map((c) => (<li key={c}>{c}</li>))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="portfolio" title="Portfolio">
        <div className="grid gap-4 md:grid-cols-3">
          {data.portfolio.map((p) => (
            <Card key={p.title} className="group">
              <CardHeader>
                <CardTitle className="text-base">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="min-h-[60px] text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
                <a href={p.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">
                  Open <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <Card>
          <CardContent className="flex flex-wrap items-center gap-4 p-6 text-sm">
            <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${data.contact.email}`}><Mail className="h-4 w-4" /> {data.contact.email}</a>
            <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${data.contact.phone}`}><Phone className="h-4 w-4" /> {data.contact.phone}</a>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {data.contact.location}</span>
            <span className="text-xs text-zinc-500">(Columbia, SC • Puerto Rico • Remote)</span>
            <a className="inline-flex items-center gap-2 hover:underline" href={data.contact.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
            <a className="inline-flex items-center gap-2 hover:underline" href={data.contact.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </CardContent>
        </Card>
      </Section>

      <footer className="border-t py-8 text-center text-xs text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} {data.name}. Built with React, Tailwind, shadcn/ui, and Framer Motion.
      </footer>
    </div>
  );
}

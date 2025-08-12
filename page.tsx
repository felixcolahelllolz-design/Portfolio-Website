"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, FileText } from "lucide-react";

const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const MotionCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} whileHover={{ y: -4 }}>{children}</motion.div>
);

function Tile({ title, tag, href }: { title: string; tag: string; href: string }) {
  return (
    <MotionCard>
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <Card className="h-full">
          <CardContent>
            <div className="flex items-center gap-2 font-medium"><FileText className="h-4 w-4" />{title}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{tag}</div>
          </CardContent>
        </Card>
      </a>
    </MotionCard>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-40 border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm"><a href="/"><ArrowLeft className="mr-1 h-4 w-4" />Back</a></Button>
            <span className="font-semibold">Portfolio</span>
          </div>
          <Button asChild size="sm" variant="secondary"><a href="/resume_federal.pdf" download><Download className="mr-1 h-4 w-4" />Resume</a></Button>
        </Container>
      </header>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10"><h1 className="text-2xl font-semibold sm:text-3xl">Case studies & samples</h1></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Tile title="Cultural Resource Inventory Report (sample)" tag="Federal reporting" href="/portfolio/crir-sample.pdf" />
            <Tile title="Ceramic Analysis Guidebook (PIT Project)" tag="Public archaeology" href="/portfolio/ceramic-analysis-guidebook.pdf" />
            <Tile title="GIS Map Booklet" tag="ArcGIS Pro export" href="/portfolio/gis-map-booklet.pdf" />
            <Tile title="Bilingual Editorial Samples" tag="Writing & translation" href="/portfolio/bilingual-editorial-samples.pdf" />
            <Tile title="Drone Survey Summary" tag="UAV data collection" href="/portfolio/drone-survey-summary.pdf" />
            <Tile title="Technical Writing Samples" tag="Instructions & SOPs" href="/portfolio/technical-writing-samples.pdf" />
          </div>
        </Container>
      </section>
    </div>
  );
}

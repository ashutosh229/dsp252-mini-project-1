"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Database, Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      <div
        className={`w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 fixed top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1
              className={`font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-chart-2 to-chart-4 transition-all duration-300 ${
                scrolled
                  ? "text-2xl sm:text-3xl md:text-4xl"
                  : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none"
              }`}
            >
              Data Analytics Project
            </h1>
            <p
              className={`mt-2 transition-all duration-300 ${
                scrolled ? "text-sm" : "text-base"
              } text-muted-foreground`}
            >
              Comprehensive Data Analysis and Visualization
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mt-[140px]">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Tabs defaultValue="home" className="w-full sm:w-auto">
              <TabsList className="grid grid-cols-5 w-[600px] bg-secondary/50 backdrop-blur-sm">
                <TabsTrigger
                  value="home"
                  asChild
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Link href="/">Home</Link>
                </TabsTrigger>
                <TabsTrigger
                  value="analysis"
                  asChild
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Link href="/analysis">Analysis</Link>
                </TabsTrigger>
                <TabsTrigger
                  value="modelling"
                  asChild
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Link href="/modelling">Modelling</Link>
                </TabsTrigger>
                <TabsTrigger
                  value="clusters"
                  asChild
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Link href="/clusters">Clusters</Link>
                </TabsTrigger>
                <TabsTrigger
                  value="correlations"
                  asChild
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Link href="/correlations">Correlations</Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              asChild
              className="bg-secondary/50 hover:bg-secondary backdrop-blur-sm border-primary/20"
            >
              <Link
                href="https://colab.research.google.com/drive/1mdawzSTKxJPxwCAOjWy5sp-2SDZTYOvV?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Database className="w-4 h-4" />
                View Google Colab Notebook
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="bg-secondary/50 hover:bg-secondary backdrop-blur-sm border-primary/20"
            >
              <Link
                href="https://github.com/ashutosh229/dsp252-mini-project-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                View Github Repository
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

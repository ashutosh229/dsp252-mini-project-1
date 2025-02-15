'use client';

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2">
              Designed and Developed by Ashutosh Kumar Jha
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © 2024 All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:text-primary">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                <span className="sr-only">Github</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:text-primary">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 hover:text-primary">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full animate-bounce bg-secondary/50 hover:bg-secondary backdrop-blur-sm border-primary/20"
            onClick={scrollToTop}
          >
            <ArrowUp className="w-4 h-4" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
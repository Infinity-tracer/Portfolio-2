'use client';

import Image from 'next/image';  // Import the Next.js Image component
import { Button } from '@/components/ui/button';
import { NavBar } from '@/components/nav-bar';
import { Download, Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-6 py-12">
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-primary">SRIRAM VELUMURI</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Student
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I&apos;m a 4th-semester BE student in AIML at RV College of Engineering, deeply engaged in exploring AI/ML. With a passion for innovation, I work on projects that challenge limits and drive impactful solutions. Fueled by curiosity, I aim to craft intelligent systems that make a difference.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-8">
              <a href="https://github.com/Infinity-tracer" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/sriramkumarvelumuri?igshid=YWFkbnZnMDhodTdx&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden bg-muted">
              <Image 
                src="https://images.unsplash.com/photo-1739772433626-33492d9ca0b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile Photo" 
                fill  // This ensures it takes the full width/height of the parent div
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

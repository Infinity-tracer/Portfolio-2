'use client';

import { NavBar } from '@/components/nav-bar';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Database, Palette } from 'lucide-react';
import Image from 'next/image';

const featureIcons = {
  cleanCode: () => <Code className="h-6 w-6" />,
  problemSolver: () => <Brain className="h-6 w-6" />,
  fullStack: () => <Database className="h-6 w-6" />,
  userFriendly: () => <Palette className="h-6 w-6" />
};

const skills = [
  { category: 'Machine Learning', items: ['Python', 'LangChain', 'MLOPS', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'], progress: 90 },
  { category: 'Blockchain Development', items: ['Solidity', 'Smart Contracts', 'Ethereum', 'Truffle', 'Web3.js'], progress: 85 },
  { category: 'App Development (Unity)', items: ['C#', 'Unity', '3D Modeling', 'AR/VR Development', 'Game Design'], progress: 80 },
  { category: 'Agentic AI Tools', items: ['Galileo Crew', 'OpenAI API', 'LangChain', 'LlamaIndex'], progress: 85 },
  { category: 'Generative AI', items: ['GPT-4', 'Model fine-tuning', 'DALL·E', 'Stable Diffusion', 'GANs', 'LoRA Training'], progress: 85 },
  { category: 'Tools & Technologies', items: ['Docker', 'Git', 'AWS', 'CI/CD', 'MetaMask', 'Auto encoders'], progress: 80 },
  { category: 'Soft Skills', items: ['Leadership', 'Communication', 'Problem Solving', 'Teamwork'], progress: 95 }
];

const experiences = [
  {
    year: '2024',
    title: 'ML, App Development, Blockchain, Agentic AI, GenAI',
    company: 'RVCE',
    description: 'Explored cutting-edge technologies to leverage futuristic solutions.'
  },
  {
    year: '2023',
    title: 'ML Foundation',
    company: 'RVCE',
    description: 'Worked on real-world ML projects solving critical problems.'
  },
  {
    year: '2021',
    title: 'Budding Coder',
    company: 'School & WhiteHat Jr',
    description: 'Took my first steps into coding with Java and Python.'
  }
];

const features = [
  { icon: featureIcons.cleanCode, title: 'Clean Code', description: 'Writing maintainable and scalable code is my passion.' },
  { icon: featureIcons.problemSolver, title: 'Problem Solver', description: 'I love tackling complex challenges and finding elegant solutions.' },
  { icon: featureIcons.fullStack, title: 'Full Stack', description: 'Comfortable working across the entire technology stack.' },
  { icon: featureIcons.userFriendly, title: 'User-Friendly', description: 'Creating beautiful and intuitive user experiences.' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-6 py-12">
        <section className="space-y-6 mb-16">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I&apos;m a passionate AI/ML enthusiast with over three years of hands-on experience in developing foundational ML applications. I thrive on building scalable, user-centric solutions that tackle real-world challenges while aligning with sustainability goals. Continuously exploring new frontiers in AI, I strive to create technology that makes a lasting impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-primary mb-4">{feature.icon && feature.icon()}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{skill.category}</h3>
                  <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                </div>
                <Progress value={Number(skill.progress) || 0} className="h-2" />
                <div className="flex flex-wrap gap-2 mt-2">
                  {skill.items.map((item, i) => (
                    <Badge key={`${index}-${i}`} variant="secondary">{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Experience Timeline</h2>
          <div className="relative border-l border-primary/20 pl-6 ml-6">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 relative">
                <span className="absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                  {exp.year.slice(-2)}
                </span>
                <h3 className="font-semibold text-xl mb-1">{exp.title}</h3>
                <p className="text-primary mb-2">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

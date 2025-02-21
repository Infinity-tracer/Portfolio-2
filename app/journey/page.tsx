'use client';

import { NavBar } from '@/components/nav-bar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';

// Define TypeScript Type for Journey Items
type JourneyItem = {
  year: string;
  title: string;
  description: string;
  institution?: string; // Optional field
  image: string;
};

// Type for Journey Categories
type JourneyData = {
  education: JourneyItem[];
  personal: JourneyItem[];
};

// ✅ Removing `as const` to allow mutability
const journeyData: JourneyData = {
  education: [
    {
      year: 'Expected in 2027',
      title: 'University',
      institution: 'RV College of Engineering',
      description: 'The place which made me explore the real world of computing.',
      image: 'https://i.ytimg.com/vi/-We7aO_07W4/hq720.jpg',
    },
    {
      year: '2022',
      title: 'Pre University',
      institution: 'Sri Chaitanya College',
      description: 'Part of my journey which helped me to be where I am now.',
      image: 'https://images.unsplash.com/photo-1636393853624-2fce2206c9d4?w=500&auto=format&fit=crop&q=60',
    },
    {
      year: '2020',
      title: 'Primary Education',
      institution: 'Future Kids Global School',
      description: 'Foundation in all-round development of my personality.',
      image: 'https://images.unsplash.com/photo-1710845423251-28c954a4ca8d?w=500&auto=format&fit=crop&q=60',
    },
  ],
  personal: [
    {
      year: '2024',
      title: 'Socio-cultural Activities',
      description: 'Leading NSS and ROTRACT clubs, organizing impactful social initiatives and cultural events.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssoi1u6k9mYYEVnij--yVgnL4ifNhUgZsqw',
    },
    {
      year: '2024',
      title: 'Tech Clubs - Core Member',
      description: 'Leading Jatayu-Drone Club and Astra Robotics, exploring innovations in drone technology and robotics.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop&q=60',
    },
  ],
};

export default function Journey() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-8">My Journey</h1>

        <Tabs defaultValue="education" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
          </TabsList>

          {Object.entries(journeyData).map(([category, items]) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <ScrollArea className="h-[calc(100vh-300px)]">
                {items.map((item, index) => (
                  <Card key={index} className="mb-6">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                        <Badge variant="secondary">{item.year}</Badge>
                      </div>
                      {item.institution && <p className="text-primary">{item.institution}</p>}
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{item.description}</p>
                      <div className="relative h-48 w-full overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={`Image for ${item.title}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}

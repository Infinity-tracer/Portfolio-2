'use client';

import { NavBar } from '@/components/nav-bar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const posts = [
  {
    title: 'Building Scalable Web Applications with Next.js',
    excerpt: 'Learn how to build and deploy scalable web applications using Next.js and modern web technologies.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    tags: ['Next.js', 'Web Development', 'Tutorial'],
  },
  {
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how artificial intelligence is shaping the future of web development and what developers need to know.',
    date: 'March 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    tags: ['AI', 'Technology', 'Future'],
  },
  {
    title: 'Mastering TypeScript: Advanced Patterns',
    excerpt: 'Deep dive into advanced TypeScript patterns and best practices for large-scale applications.',
    date: 'March 5, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    tags: ['TypeScript', 'Programming', 'Advanced'],
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
            <p className="text-muted-foreground mt-2">
              Thoughts, tutorials, and insights about web development
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="flex flex-col">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="space-y-1">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-3 w-3" />
                    {post.date}
                    <Clock className="ml-3 mr-1 h-3 w-3" />
                    {post.readTime}
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
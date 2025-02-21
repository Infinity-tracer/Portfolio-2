'use client';

import { NavBar } from '@/components/nav-bar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    value: 'vsriramkumar.ai23@rvce.edu.in',
    link: 'mailto:vsriramkumar.ai23@rvce.edu.in',
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Phone',
    value: '+91 6303456816',
    link: 'tel:+916303456816',
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Location',
    value: 'Bengaluru, Karnataka',
  },
];

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    label: 'GitHub',
    href: 'https://github.com/Infinity-tracer?tab=overview&from=2025-02-01&to=2025-02-17',
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/',
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    label: 'Instagram',
    href: 'https://www.instagram.com/sriramkumarvelumuri?igsh=YWFkbnZnMDhodTdx&utm_source=qr',
  },
];

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
            <p className="text-muted-foreground mb-8">
              I&apos;m always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>

            <div className="grid gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center space-x-4 pt-6">
                    <div className="text-primary">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    {link.icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Message subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

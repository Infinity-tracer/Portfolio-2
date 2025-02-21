'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/journey', label: 'Journey' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-20">
      <div className="container flex h-full items-center px-6 md:px-10">
        <div className="mr-8 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-3">
            <span className="hidden text-xl font-bold sm:inline-block">Portfolio</span>
          </Link>
          <nav className="flex items-center space-x-8 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === item.href ? 'text-foreground font-semibold' : 'text-foreground/60'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
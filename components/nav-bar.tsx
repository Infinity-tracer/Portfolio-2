'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

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
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16 md:h-20">
      <div className="container flex h-full items-center px-4 md:px-10">
        {/* Mobile: hamburger menu */}
        <div className="flex md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <SheetHeader className="border-b px-6 py-4">
                <SheetTitle className="text-left text-lg font-bold">Portfolio</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                      pathname === item.href
                        ? 'bg-accent text-accent-foreground font-semibold'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile: centered title */}
        <Link href="/" className="flex md:hidden flex-1 justify-center">
          <span className="text-lg font-bold">Portfolio</span>
        </Link>

        {/* Desktop: full nav */}
        <div className="mr-8 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-3">
            <span className="text-xl font-bold">Portfolio</span>
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

        {/* Theme toggle - always visible */}
        <div className="flex items-center md:flex-1 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
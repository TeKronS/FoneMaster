"use client"

import Link from "next/link";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { STORE_CONFIG } from "@/lib/config";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-headline text-primary">
            {STORE_CONFIG.logo}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/catalog" className="text-sm font-medium hover:text-primary transition-colors">Catalog</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/catalog?search=true">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative text-muted-foreground">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                0
              </span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">Home</Link>
                <Link href="/catalog" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">Catalog</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">About Us</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">Contact</Link>
                <hr />
                <Link href="/profile" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">My Profile</Link>
                <Link href="/login" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary text-primary">Login / Register</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

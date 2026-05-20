import { STORE_CONFIG } from "@/lib/config";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">{STORE_CONFIG.name}</h3>
            <p className="text-muted-foreground text-sm">
              {STORE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-accent"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-accent"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-accent"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/catalog" className="hover:text-primary transition-colors">Catalog</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>{STORE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span>{STORE_CONFIG.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span>{STORE_CONFIG.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Business Hours</h4>
            <p className="text-sm text-muted-foreground">{STORE_CONFIG.contact.workingHours}</p>
            <p className="text-xs text-muted-foreground mt-4">
              © {new Date().getFullYear()} {STORE_CONFIG.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

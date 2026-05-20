"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { STORE_CONFIG, PRODUCTS } from "@/lib/config";
import { ChevronRight, ShieldCheck, Truck, Headphones, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);

  return (
    <div className="flex flex-col space-y-16 pb-16">
      {/* Hero Carousel */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-[500px]">
            {featuredProducts.map((product) => (
              <CarouselItem key={product.id} className="relative w-full h-full">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={product.bannerImage}
                    alt={product.name}
                    fill
                    className="object-cover brightness-50"
                    priority
                  />
                </div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                  <span className="text-accent font-bold uppercase tracking-wider mb-2">Featured Offer</span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">{product.name}</h1>
                  <p className="max-w-xl text-lg mb-8 opacity-90">{product.description}</p>
                  <Link href={`/catalog/${product.id}`}>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none px-8 py-6 rounded-full text-lg shadow-lg transform transition hover:scale-105">
                      Buy Now for ${product.price}
                    </Button>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-8" />
            <CarouselNext className="right-8" />
          </div>
        </Carousel>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-8 rounded-2xl shadow-sm border">
          <div className="flex flex-col items-center text-center space-y-2">
            <Truck className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">Free Shipping</h3>
            <p className="text-xs text-muted-foreground">On all orders over $500</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 border-l md:border-l">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">Secure Payment</h3>
            <p className="text-xs text-muted-foreground">100% secure checkout</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 border-l">
            <Headphones className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-xs text-muted-foreground">Expert help anytime</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 border-l">
            <Smartphone className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">Latest Tech</h3>
            <p className="text-xs text-muted-foreground">New releases weekly</p>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-headline">New Arrivals</h2>
          <Link href="/catalog" className="text-primary flex items-center hover:underline font-medium">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-white">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="phone smartphone"
                  />
                  {product.isFeatured && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      HOT
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">{product.brand}</p>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <Link href={`/catalog/${product.id}`}>
                      <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                        Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Brand Experience / Mission */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold font-headline leading-tight">Our Mission is to connect you with the future.</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              {STORE_CONFIG.about.mission}
            </p>
            <Link href="/about">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold mt-4">
                Learn Our Story
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/tech/800/600"
              alt="Technology"
              fill
              className="object-cover"
              data-ai-hint="modern office technology"
            />
          </div>
        </div>
      </section>

      {/* Store Location & Contact */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4">Visit Our Store</h2>
              <p className="text-muted-foreground mb-6">Experience the latest technology firsthand at our flagship location. Our experts are ready to assist you.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Smartphone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold">Contact Us</h4>
                  <p className="text-sm text-muted-foreground">{STORE_CONFIG.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-sm text-muted-foreground">{STORE_CONFIG.contact.address}</p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="inline-block w-full">
              <Button size="lg" variant="outline" className="w-full md:w-auto px-12 py-6 rounded-full font-bold">
                Get Directions
              </Button>
            </Link>
          </div>
          
          <div className="h-[450px] bg-muted rounded-2xl overflow-hidden relative border shadow-lg">
             {/* Mock Map */}
             <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                <Image 
                  src="https://picsum.photos/seed/map/800/600"
                  alt="Store Location Map"
                  fill
                  className="object-cover opacity-80"
                  data-ai-hint="map satellite"
                />
                <div className="absolute z-10 bg-white p-4 rounded-lg shadow-xl border flex flex-col items-center space-y-2 transform -translate-y-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <p className="font-bold text-sm text-center">{STORE_CONFIG.logo} Flagship</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

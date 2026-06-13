"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { STORE_CONFIG, PRODUCTS } from "@/lib/config";
import { ChevronRight, ShieldCheck, Truck, Headphones, Smartphone, MapPin, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);
  const saleProducts = PRODUCTS.filter(p => p.isOnSale).slice(0, 4);

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
                  <span className="text-accent font-bold uppercase tracking-wider mb-2">
                    {product.isOnSale ? "Oferta Especial" : "Oferta Destacada"}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">{product.name}</h1>
                  <p className="max-w-xl text-lg mb-8 opacity-90">{product.description}</p>
                  <div className="flex items-center gap-4 flex-col sm:flex-row">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none px-8 py-6 rounded-full text-lg shadow-lg transform transition hover:scale-105" asChild>
                      <Link href={`/catalog/${product.id}`}>
                        Comprar ahora por ${product.price}
                      </Link>
                    </Button>
                    {product.originalPrice && (
                      <span className="text-white/60 line-through text-xl font-bold">Antes ${product.originalPrice}</span>
                    )}
                  </div>
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
            <h3 className="font-semibold">Envío Gratis</h3>
            <p className="text-xs text-muted-foreground">En todos los pedidos superiores a $500</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 border-l md:border-l">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">Pago Seguro</h3>
            <p className="text-xs text-muted-foreground">Checkout 100% seguro</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 border-l">
            <Headphones className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">Soporte 24/7</h3>
            <p className="text-xs text-muted-foreground">Ayuda experta en cualquier momento</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 border-l">
            <Smartphone className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">Última Tecnología</h3>
            <p className="text-xs text-muted-foreground">Nuevos lanzamientos semanales</p>
          </div>
        </div>
      </section>

      {/* Super Ofertas Section */}
      {saleProducts.length > 0 && (
        <section className="container mx-auto px-4">
          <div className="bg-red-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="inline-flex items-center bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-4">
                  <Tag className="h-4 w-4 mr-2" /> LIMITADO
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Súper Ofertas del Mes</h2>
                <p className="text-lg opacity-90 mb-8">No te pierdas los mejores descuentos en la última tecnología móvil. Solo por tiempo limitado.</p>
                <Button size="lg" className="bg-white text-red-500 hover:bg-white/90 rounded-full px-12 py-6 font-bold text-lg" asChild>
                  <Link href="/catalog?onSale=true">
                    Ver todas las ofertas
                  </Link>
                </Button>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {saleProducts.map(product => (
                  <Link key={product.id} href={`/catalog/${product.id}`} className="block group">
                    <Card className="bg-white/10 border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition-all border-none cursor-pointer h-full">
                      <CardContent className="p-6 flex items-center space-x-6">
                        <div className="relative h-20 w-20 bg-white rounded-xl overflow-hidden shrink-0">
                          <Image src={product.image} alt={product.name} fill className="object-contain p-2" />
                        </div>
                        <div className="flex-grow">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">{product.brand}</p>
                          <h4 className="font-bold text-lg leading-tight mb-1">{product.name}</h4>
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-xl">${product.price}</span>
                            <span className="text-xs line-through text-white/50">${product.originalPrice}</span>
                          </div>
                        </div>
                        <ChevronRight className="h-6 w-6 text-white/40 group-hover:text-white transition-colors shrink-0" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      )}

      {/* Featured Products Grid */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-headline">Recién Llegados</h2>
          <Link href="/catalog" className="text-primary flex items-center hover:underline font-medium">
            Ver Todo <ChevronRight className="h-4 w-4 ml-1" />
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
                  {product.isOnSale && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      OFERTA
                    </div>
                  )}
                  {product.isFeatured && !product.isOnSale && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      HOT
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">{product.brand}</p>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors" asChild>
                      <Link href={`/catalog/${product.id}`}>
                        Detalles
                      </Link>
                    </Button>
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
            <h2 className="text-4xl font-bold font-headline leading-tight">Nuestra Misión es conectarte con el futuro.</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              {STORE_CONFIG.about.mission}
            </p>
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold mt-4" asChild>
              <Link href="/about">
                Conoce Nuestra Historia
              </Link>
            </Button>
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
              <h2 className="text-3xl font-bold font-headline mb-4">Visita Nuestra Tienda</h2>
              <p className="text-muted-foreground mb-6">Experimenta lo último en tecnología de primera mano en nuestra ubicación principal. Nuestros expertos están listos para ayudarte.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Smartphone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold">Contáctanos</h4>
                  <p className="text-sm text-muted-foreground">{STORE_CONFIG.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold">Dirección</h4>
                  <p className="text-sm text-muted-foreground">{STORE_CONFIG.contact.address}</p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="outline" className="w-full md:w-auto px-12 py-6 rounded-full font-bold" asChild>
              <Link href="/contact">
                Cómo llegar
              </Link>
            </Button>
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

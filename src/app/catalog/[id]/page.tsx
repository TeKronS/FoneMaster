"use client"

import { useParams, useRouter } from "next/navigation";
import { PRODUCTS, STORE_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ShoppingCart, Shield, Truck, RotateCcw, Share2, Heart, Cpu, Smartphone, Zap, Wifi, Battery } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <Button onClick={() => router.push('/catalog')}>Volver al Catálogo</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Añadido al carrito",
      description: `${product.name} ha sido añadido a tu bolsa de compras.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/catalog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
        <ChevronLeft className="h-4 w-4 mr-1" /> Volver al Catálogo
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8"
              priority
            />
            {product.isFeatured && (
              <Badge className="absolute top-6 left-6 bg-accent text-white">Destacado</Badge>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-white border cursor-pointer hover:border-primary transition-colors">
                <Image src={product.image} alt={`vista ${i}`} fill className="object-contain p-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">{product.brand}</p>
            <h1 className="text-4xl font-bold font-headline mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-primary">${product.price}</span>
              {product.stock > 0 ? (
                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-none">En Stock</Badge>
              ) : (
                <Badge variant="destructive">Agotado</Badge>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="flex-grow bg-primary hover:bg-primary/90 rounded-full h-14 text-lg font-bold" onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5 mr-2" /> Añadir al Carrito
            </Button>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="h-14 w-14 rounded-full">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="h-14 w-14 rounded-full">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-4 bg-muted/30 rounded-2xl">
              <Smartphone className="h-6 w-6 text-primary mb-2" />
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Pantalla</span>
              <span className="font-bold text-sm">{product.specs.pantalla}"</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted/30 rounded-2xl">
              <Cpu className="h-6 w-6 text-primary mb-2" />
              <span className="text-[10px] uppercase font-bold text-muted-foreground">RAM</span>
              <span className="font-bold text-sm">{product.specs.ram}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted/30 rounded-2xl">
              <Battery className="h-6 w-6 text-primary mb-2" />
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Batería</span>
              <span className="font-bold text-sm text-center">{product.specs.bateria}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted/30 rounded-2xl">
              <Zap className="h-6 w-6 text-primary mb-2" />
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Almacén</span>
              <span className="font-bold text-sm">{product.specs.almacenamiento}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted/30 rounded-2xl">
              <Wifi className="h-6 w-6 text-primary mb-2" />
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Red</span>
              <span className="font-bold text-sm">{product.specs.red}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted/30 rounded-2xl">
              <Cpu className="h-6 w-6 text-primary mb-2" />
              <span className="text-[10px] uppercase font-bold text-muted-foreground">Procesador</span>
              <span className="font-bold text-[10px] text-center line-clamp-1">{product.specs.procesador}</span>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Value Props */}
          <div className="mt-auto pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Truck className="h-5 w-5 text-accent" />
              <span className="text-xs font-medium">Envío Express Gratis</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-xs font-medium">2 Años de Garantía</span>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw className="h-5 w-5 text-accent" />
              <span className="text-xs font-medium">Devolución en 30 Días</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

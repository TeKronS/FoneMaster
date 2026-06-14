import { PRODUCTS } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ShoppingCart, Shield, Truck, RotateCcw, Share2, Heart, Cpu, Smartphone, Zap, Wifi, Battery, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) return { title: "Producto no encontrado" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | FoneMaster`,
      description: product.description,
      images: [{ url: product.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetail({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0;
  const discountPercentage = product.originalPrice ? Math.round((discountAmount / product.originalPrice) * 100) : 0;

  return (
    <div className="container mx-auto px-4 py-4">
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
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              {product.isFeatured && (
                <Badge className="bg-primary text-white border-none">Destacado</Badge>
              )}
              {product.isOnSale && (
                <Badge className="bg-red-500 text-white border-none flex items-center">
                  <Tag className="h-3 w-3 mr-1" /> -{discountPercentage}% OFERTA
                </Badge>
              )}
            </div>
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
            <div className="flex items-center space-x-4 mb-2">
              <span className="text-4xl font-bold text-primary">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
              )}
              {product.isOnSale && (
                <span className="text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded">Ahorras ${discountAmount}</span>
              )}
            </div>
            <div className="mb-6">
              {product.stock > 0 ? (
                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-none">En Stock ({product.stock} unidades)</Badge>
              ) : (
                <Badge variant="destructive">Agotado</Badge>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="flex-grow bg-primary hover:bg-primary/90 rounded-full h-14 text-lg font-bold">
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
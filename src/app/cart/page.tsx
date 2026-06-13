"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PRODUCTS } from "@/lib/config";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { ...PRODUCTS[0], quantity: 1 },
    { ...PRODUCTS[1], quantity: 1 },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="bg-white p-12 rounded-3xl shadow-sm border inline-block">
          <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto mb-6" />
          <h1 className="text-3xl font-bold font-headline mb-4">Tu carrito está vacío</h1>
          <p className="text-muted-foreground mb-8">Parece que aún no has añadido nada a tu bolsa.</p>
          <Link href="/catalog">
            <Button size="lg" className="bg-primary px-12 rounded-full h-14">Empezar a comprar</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-headline mb-12 text-primary">Tu Bolsa de Compras</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="hidden md:grid grid-cols-6 p-4 bg-muted/30 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <div className="col-span-3">Producto</div>
              <div className="text-center">Cantidad</div>
              <div className="text-center">Precio</div>
              <div className="text-right">Acción</div>
            </div>
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-6 p-6 items-center gap-6">
                  <Link href={`/catalog/${item.id}`} className="col-span-3 flex items-center space-x-6 group">
                    <div className="relative h-24 w-24 bg-muted rounded-xl shrink-0 overflow-hidden border group-hover:border-primary transition-colors">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{item.name}</h3>
                      <p className="text-sm text-muted-foreground uppercase">{item.brand}</p>
                    </div>
                  </Link>
                  
                  <div className="flex justify-center">
                    <div className="flex items-center space-x-1 border rounded-lg p-1 bg-muted/10">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, 1)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <span className="font-bold text-lg text-primary">${item.price * item.quantity}</span>
                  </div>
                  
                  <div className="text-right">
                    <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => removeItem(item.id)}>
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-5 w-5 text-green-500" />
            <span>Compra Segura Protegida por cifrado SSL de 256 bits.</span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card className="border-none shadow-lg bg-white overflow-hidden rounded-2xl">
            <CardHeader className="bg-primary text-white p-6">
              <CardTitle className="font-headline text-2xl">Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-4">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-semibold text-foreground">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Envío</span>
                <span className="text-green-600 font-semibold">Gratis</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Impuestos (8%)</span>
                <span className="font-semibold text-foreground">${tax.toFixed(2)}</span>
              </div>
              <div className="h-px bg-border w-full" />
              <div className="flex justify-between items-center py-2">
                <span className="text-xl font-bold">Total</span>
                <span className="text-3xl font-bold text-primary">${total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="p-8 bg-muted/20">
              <div className="w-full space-y-4">
                <Link href="/checkout" className="block w-full">
                  <Button className="w-full h-14 rounded-full text-lg font-bold bg-accent hover:bg-accent/90">
                    Pagar Ahora <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/catalog" className="block w-full text-center text-sm font-medium text-muted-foreground hover:text-primary">
                  Continuar Comprando
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

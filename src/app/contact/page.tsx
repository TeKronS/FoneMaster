"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { STORE_CONFIG } from "@/lib/config";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje Enviado",
      description: "Hemos recibido tu consulta y nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Ponte en Contacto</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          ¿Tienes alguna pregunta sobre un producto o un pedido? Nuestro equipo está aquí para ayudarte en cada paso del camino.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-primary text-white border-none shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-8 space-y-8">
              <h3 className="text-2xl font-bold font-headline mb-4">Información de Contacto</h3>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Teléfono</p>
                  <p className="text-lg font-medium">{STORE_CONFIG.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Correo</p>
                  <p className="text-lg font-medium">{STORE_CONFIG.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Oficina</p>
                  <p className="text-lg font-medium">{STORE_CONFIG.contact.address}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex space-x-4">
                <div className="flex-1">
                  <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">Horario</p>
                  <p className="text-sm">{STORE_CONFIG.contact.workingHours}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white p-8 rounded-2xl border shadow-sm flex items-center space-x-4">
             <div className="bg-accent/10 p-4 rounded-full">
               <MessageSquare className="h-6 w-6 text-accent" />
             </div>
             <div>
               <h4 className="font-bold">Chat en Vivo</h4>
               <p className="text-sm text-muted-foreground">Normalmente responde en menos de 5 minutos.</p>
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="border-none shadow-xl rounded-2xl bg-white p-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" placeholder="Juan Pérez" required className="h-12 bg-muted/30 border-none rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="juan@ejemplo.com" required className="h-12 bg-muted/30 border-none rounded-xl" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Consulta sobre envíos" required className="h-12 bg-muted/30 border-none rounded-xl" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">¿Cómo podemos ayudarte?</Label>
                  <Textarea id="message" placeholder="Describe tu consulta en detalle..." required className="min-h-[150px] bg-muted/30 border-none rounded-xl resize-none p-4" />
                </div>

                <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90">
                  <Send className="h-5 w-5 mr-2" /> Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

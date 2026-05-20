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
      title: "Message Sent",
      description: "We've received your inquiry and will get back to you shortly.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Get in Touch</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a question about a product or an order? Our team is here to help you every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-primary text-white border-none shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-8 space-y-8">
              <h3 className="text-2xl font-bold font-headline mb-4">Contact Info</h3>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Phone</p>
                  <p className="text-lg font-medium">{STORE_CONFIG.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Email</p>
                  <p className="text-lg font-medium">{STORE_CONFIG.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Office</p>
                  <p className="text-lg font-medium">{STORE_CONFIG.contact.address}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex space-x-4">
                <div className="flex-1">
                  <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">Service Hours</p>
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
               <h4 className="font-bold">Live Chat</h4>
               <p className="text-sm text-muted-foreground">Typically responds in under 5 minutes.</p>
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
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required className="h-12 bg-muted/30 border-none rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="h-12 bg-muted/30 border-none rounded-xl" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Question about shipping" required className="h-12 bg-muted/30 border-none rounded-xl" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" placeholder="Describe your inquiry in detail..." required className="min-h-[150px] bg-muted/30 border-none rounded-xl resize-none p-4" />
                </div>

                <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90">
                  <Send className="h-5 w-5 mr-2" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

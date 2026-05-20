"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Truck, CreditCard, CheckCircle2, ChevronRight, MapPin, ShieldCheck } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
      toast({
        title: "Order Successful!",
        description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
      });
      router.push('/profile');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col space-y-8">
        <h1 className="text-4xl font-bold font-headline text-primary">Checkout</h1>
        
        {/* Progress Tracker */}
        <div className="flex items-center justify-between max-w-2xl mx-auto w-full mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted -translate-y-1/2 z-0"></div>
          
          <div className={`relative z-10 flex flex-col items-center space-y-2`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 1 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
              {step > 1 ? <CheckCircle2 className="h-6 w-6" /> : "1"}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">Shipping</span>
          </div>

          <div className={`relative z-10 flex flex-col items-center space-y-2`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 2 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
              {step > 2 ? <CheckCircle2 className="h-6 w-6" /> : "2"}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">Payment</span>
          </div>

          <div className={`relative z-10 flex flex-col items-center space-y-2`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 3 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
              3
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">Confirm</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card className="border-none shadow-xl rounded-2xl bg-white p-2">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-3 mb-2">
                    <Truck className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline">Shipping Details</CardTitle>
                  </div>
                  <p className="text-muted-foreground">Where should we send your order?</p>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fName">First Name</Label>
                      <Input id="fName" placeholder="Alex" className="h-12 bg-muted/30 border-none rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lName">Last Name</Label>
                      <Input id="lName" placeholder="Johnson" className="h-12 bg-muted/30 border-none rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="addr">Street Address</Label>
                    <Input id="addr" placeholder="123 Main St" className="h-12 bg-muted/30 border-none rounded-xl" />
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-1 space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Palo Alto" className="h-12 bg-muted/30 border-none rounded-xl" />
                    </div>
                    <div className="col-span-1 space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="CA" className="h-12 bg-muted/30 border-none rounded-xl" />
                    </div>
                    <div className="col-span-1 space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="94301" className="h-12 bg-muted/30 border-none rounded-xl" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card className="border-none shadow-xl rounded-2xl bg-white p-2">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-3 mb-2">
                    <CreditCard className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline">Payment Method</CardTitle>
                  </div>
                  <p className="text-muted-foreground">Choose your preferred way to pay.</p>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="p-4 border-2 border-primary bg-primary/5 rounded-xl flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-bold">Credit / Debit Card</p>
                        <p className="text-xs text-muted-foreground">Visa, Mastercard, Amex</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 rounded-full border-4 border-primary bg-white"></div>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="Alex Johnson" className="h-12 bg-muted/30 border-none rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNum">Card Number</Label>
                      <Input id="cardNum" placeholder="**** **** **** 1234" className="h-12 bg-muted/30 border-none rounded-xl" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM / YY" className="h-12 bg-muted/30 border-none rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="h-12 bg-muted/30 border-none rounded-xl" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card className="border-none shadow-xl rounded-2xl bg-white p-2 text-center">
                <CardContent className="p-12 space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold font-headline">Ready to Place Order?</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Please review your order details in the summary panel before confirming your purchase.
                  </p>
                  <div className="p-6 bg-muted/30 rounded-2xl text-left space-y-4 max-w-md mx-auto">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-sm uppercase text-muted-foreground tracking-widest">Ship to</p>
                        <p className="font-medium">Alex Johnson, 123 Main St, Palo Alto, CA</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CreditCard className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-sm uppercase text-muted-foreground tracking-widest">Payment</p>
                        <p className="font-medium">Card ending in 1234</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <Button variant="ghost" onClick={() => setStep(step - 1)} className="h-12 px-8 font-bold">Back</Button>
              ) : (
                <div></div>
              )}
              <Button onClick={handleNext} className="h-14 px-12 rounded-full font-bold bg-primary hover:bg-primary/90 text-lg">
                {step === 3 ? "Place Order" : "Continue"} <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
             <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden">
               <CardHeader className="bg-muted/50 border-b">
                 <CardTitle className="text-xl font-headline">Order Summary</CardTitle>
               </CardHeader>
               <CardContent className="p-6 space-y-4">
                 <div className="flex justify-between text-sm">
                   <span className="text-muted-foreground">Subtotal (2 items)</span>
                   <span className="font-bold">$1,848.00</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-muted-foreground">Shipping</span>
                   <span className="text-green-600 font-bold">FREE</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-muted-foreground">Est. Tax</span>
                   <span className="font-bold">$147.84</span>
                 </div>
                 <Separator />
                 <div className="flex justify-between items-center pt-2">
                   <span className="font-bold">Total</span>
                   <span className="text-2xl font-bold text-primary">$1,995.84</span>
                 </div>
               </CardContent>
               <CardContent className="p-6 pt-0">
                 <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                   <p className="text-xs text-center text-primary font-medium">
                     Estimated delivery: <span className="font-bold">January 24 - 26</span>
                   </p>
                 </div>
               </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

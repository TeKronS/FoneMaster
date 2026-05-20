"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Package, Settings, LogOut, ChevronRight, MapPin, CreditCard } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const mockOrders = [
    { id: "ORD-1234", date: "Jan 12, 2024", total: "$999.00", status: "Delivered", items: "Nebula X1" },
    { id: "ORD-0987", date: "Dec 05, 2023", total: "$599.00", status: "Shipped", items: "Zenith Air" },
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your information has been successfully saved.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Nav */}
        <div className="md:w-64 space-y-2">
          <div className="p-6 bg-white rounded-2xl border mb-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <User className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Alex Johnson</h3>
            <p className="text-sm text-muted-foreground">Member since 2024</p>
          </div>
          
          <Tabs defaultValue="account" className="w-full">
            <div className="flex flex-col space-y-1">
              <Button variant="ghost" className="justify-start px-4 h-11 w-full text-left" onClick={() => {}}>
                <User className="h-4 w-4 mr-3" /> Account Info
              </Button>
              <Button variant="ghost" className="justify-start px-4 h-11 w-full text-left">
                <Package className="h-4 w-4 mr-3" /> Orders
              </Button>
              <Button variant="ghost" className="justify-start px-4 h-11 w-full text-left">
                <MapPin className="h-4 w-4 mr-3" /> Addresses
              </Button>
              <Button variant="ghost" className="justify-start px-4 h-11 w-full text-left">
                <CreditCard className="h-4 w-4 mr-3" /> Payments
              </Button>
              <Button variant="ghost" className="justify-start px-4 h-11 w-full text-left">
                <Settings className="h-4 w-4 mr-3" /> Settings
              </Button>
              <Separator className="my-2" />
              <Button variant="ghost" className="justify-start px-4 h-11 w-full text-left text-destructive hover:text-destructive hover:bg-destructive/5">
                <LogOut className="h-4 w-4 mr-3" /> Sign Out
              </Button>
            </div>
          </Tabs>
        </div>

        {/* Content Area */}
        <div className="flex-grow space-y-8">
          {/* Account Details */}
          <Card className="border-none shadow-sm bg-white overflow-hidden">
            <CardHeader className="border-b bg-muted/30">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-headline">Account Information</CardTitle>
                  <CardDescription>Manage your personal details and preferences.</CardDescription>
                </div>
                {!isEditing && (
                  <Button variant="outline" onClick={() => setIsEditing(true)}>Edit Profile</Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Alex" disabled={!isEditing} className="bg-muted/30 disabled:opacity-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Johnson" disabled={!isEditing} className="bg-muted/30 disabled:opacity-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="alex.j@example.com" disabled={!isEditing} className="bg-muted/30 disabled:opacity-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 987-6543" disabled={!isEditing} className="bg-muted/30 disabled:opacity-100" />
                </div>
              </div>
              {isEditing && (
                <div className="mt-8 flex justify-end space-x-3">
                  <Button variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
                  <Button onClick={handleSaveProfile} className="bg-primary px-8">Save Changes</Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card className="border-none shadow-sm bg-white overflow-hidden">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="font-headline">Recent Orders</CardTitle>
              <CardDescription>Track your active and previous orders.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {mockOrders.map((order) => (
                  <div key={order.id} className="p-6 hover:bg-muted/10 transition-colors flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-bold text-primary">{order.id}</p>
                      <p className="text-sm font-medium">{order.items}</p>
                      <p className="text-xs text-muted-foreground">{order.date} • {order.total}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={order.status === "Delivered" ? "secondary" : "default"} className="font-bold">
                        {order.status}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 bg-muted/5 text-center border-t">
              <Button variant="link" className="w-full text-primary font-bold">View Full History</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Separator({ className }: { className?: string }) {
  return <div className={`h-px bg-border ${className}`} />;
}

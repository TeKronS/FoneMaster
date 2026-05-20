import { STORE_CONFIG } from "@/lib/config";
import { Badge } from "@/components/ui/badge";
import { Eye, Target, History, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">Redefining Mobile Commerce</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            {STORE_CONFIG.description}
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-12 rounded-2xl shadow-xl border">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold font-headline mb-4 text-primary">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {STORE_CONFIG.about.mission}
            </p>
          </div>
          <div className="bg-white p-12 rounded-2xl shadow-xl border">
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold font-headline mb-4 text-accent">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {STORE_CONFIG.about.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/office/800/800"
              alt="Our Workspace"
              fill
              className="object-cover"
              data-ai-hint="modern tech workspace"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <History className="h-5 w-5" />
                <span className="font-bold uppercase tracking-wider text-sm">Our History</span>
              </div>
              <h2 className="text-3xl font-bold font-headline">How we became {STORE_CONFIG.name}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {STORE_CONFIG.about.history}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="h-1 w-8 bg-accent rounded-full"></div>
                  <h4 className="font-bold text-xl">1M+ Users</h4>
                </div>
                <p className="text-sm text-muted-foreground">Trusted by tech enthusiasts globally to provide the best devices.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="h-1 w-8 bg-accent rounded-full"></div>
                  <h4 className="font-bold text-xl">50+ Brands</h4>
                </div>
                <p className="text-sm text-muted-foreground">Direct partnerships with the most innovative manufacturers.</p>
              </div>
            </div>

            <div className="p-6 bg-muted rounded-2xl flex items-start space-x-4">
              <Users className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Passionate Team</h4>
                <p className="text-sm text-muted-foreground">Our support and logistics teams are available around the clock to ensure your journey is perfect.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

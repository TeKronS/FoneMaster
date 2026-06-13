"use client"

import { useState, useMemo, useEffect } from "react";
import { PRODUCTS } from "@/lib/config";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, SlidersHorizontal, X, Cpu, Smartphone, Zap, Wifi, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FilterContentProps {
  brands: string[];
  rams: string[];
  networks: string[];
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  selectedBrands: string[];
  selectedRam: string[];
  selectedNetwork: string[];
  onlyOnSale: boolean;
  setOnlyOnSale: (value: boolean) => void;
  toggleFilter: (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => void;
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedRam: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedNetwork: React.Dispatch<React.SetStateAction<string[]>>;
  clearFilters: () => void;
  prefix: string;
}

function FilterContent({
  brands,
  rams,
  networks,
  priceRange,
  setPriceRange,
  selectedBrands,
  selectedRam,
  selectedNetwork,
  onlyOnSale,
  setOnlyOnSale,
  toggleFilter,
  setSelectedBrands,
  setSelectedRam,
  setSelectedNetwork,
  clearFilters,
  prefix
}: FilterContentProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 pb-2">
        <Checkbox 
          id={`${prefix}-on-sale`} 
          checked={onlyOnSale}
          onCheckedChange={(checked) => setOnlyOnSale(!!checked)}
        />
        <Label htmlFor={`${prefix}-on-sale`} className="text-sm font-bold flex items-center text-primary">
          <Tag className="h-4 w-4 mr-2" /> Solo en Oferta
        </Label>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Precio</h3>
          <span className="text-xs font-bold text-primary">${priceRange[0]} - ${priceRange[1]}</span>
        </div>
        <Slider
          defaultValue={[0, 2000]}
          max={2000}
          step={50}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mt-6"
        />
      </div>

      <Accordion type="multiple" defaultValue={["item-brands", "item-specs"]} className="w-full">
        <AccordionItem value="item-brands" className="border-none">
          <AccordionTrigger className="hover:no-underline py-4">
            <span className="font-bold text-sm uppercase tracking-wider text-muted-foreground flex items-center">
              <Smartphone className="h-4 w-4 mr-2" /> Marcas
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`${prefix}-brand-${brand}`} 
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => toggleFilter(setSelectedBrands, brand)}
                  />
                  <Label htmlFor={`${prefix}-brand-${brand}`} className="text-sm font-medium leading-none cursor-pointer">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-specs" className="border-none">
          <AccordionTrigger className="hover:no-underline py-4">
            <span className="font-bold text-sm uppercase tracking-wider text-muted-foreground flex items-center">
              <Cpu className="h-4 w-4 mr-2" /> RAM
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {rams.map((ram) => (
                <div key={ram} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`${prefix}-ram-${ram}`} 
                    checked={selectedRam.includes(ram)}
                    onCheckedChange={() => toggleFilter(setSelectedRam, ram)}
                  />
                  <Label htmlFor={`${prefix}-ram-${ram}`} className="text-sm font-medium leading-none cursor-pointer">
                    {ram}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-network" className="border-none">
          <AccordionTrigger className="hover:no-underline py-4">
            <span className="font-bold text-sm uppercase tracking-wider text-muted-foreground flex items-center">
              <Wifi className="h-4 w-4 mr-2" /> Red
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {networks.map((net) => (
                <div key={net} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`${prefix}-net-${net}`} 
                    checked={selectedNetwork.includes(net)}
                    onCheckedChange={() => toggleFilter(setSelectedNetwork, net)}
                  />
                  <Label htmlFor={`${prefix}-net-${net}`} className="text-sm font-medium leading-none cursor-pointer">
                    {net}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button 
        variant="outline" 
        className="w-full text-xs font-bold uppercase tracking-widest mt-4"
        onClick={clearFilters}
      >
        Limpiar Filtros
      </Button>
    </div>
  );
}

export default function Catalog() {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRam, setSelectedRam] = useState<string[]>([]);
  const [selectedNetwork, setSelectedNetwork] = useState<string[]>([]);
  const [onlyOnSale, setOnlyOnSale] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    setMounted(true);
  }, []);

  const brands = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.brand))), []);
  const rams = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.specs.ram))).sort(), []);
  const networks = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.specs.red))), []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesRam = selectedRam.length === 0 || selectedRam.includes(product.specs.ram);
      const matchesNetwork = selectedNetwork.length === 0 || selectedNetwork.includes(product.specs.red);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSale = !onlyOnSale || product.isOnSale;
      
      return matchesSearch && matchesBrand && matchesRam && matchesNetwork && matchesPrice && matchesSale;
    }).sort((a, b) => {
      if (sortOrder === "price-low") return a.price - b.price;
      if (sortOrder === "price-high") return b.price - a.price;
      return 0;
    });
  }, [searchTerm, selectedBrands, selectedRam, selectedNetwork, priceRange, sortOrder, onlyOnSale]);

  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrands([]);
    setSelectedRam([]);
    setSelectedNetwork([]);
    setOnlyOnSale(false);
    setPriceRange([0, 2000]);
  };

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-12 w-1/3 bg-muted rounded-xl" />
          <div className="flex gap-8">
            <div className="hidden lg:block w-72 h-[600px] bg-muted rounded-2xl" />
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-square bg-muted rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const commonFilterProps = {
    brands,
    rams,
    networks,
    priceRange,
    setPriceRange,
    selectedBrands,
    selectedRam,
    selectedNetwork,
    onlyOnSale,
    setOnlyOnSale,
    toggleFilter,
    setSelectedBrands,
    setSelectedRam,
    setSelectedNetwork,
    clearFilters,
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-2xl font-bold font-headline mb-1">Explora todos nuestros dispositivos</h1>
          <p className="text-sm text-muted-foreground">Encuentra el smartphone perfecto para tus necesidades técnicas.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de Filtros (Solo Escritorio) */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 space-y-8 bg-white p-6 rounded-2xl border shadow-sm">
              <div className="flex items-center space-x-2 pb-4 border-b">
                <Filter className="h-5 w-5 text-primary" />
                <h2 className="font-bold font-headline text-xl">Filtros Avanzados</h2>
              </div>
              <FilterContent {...commonFilterProps} prefix="desktop" />
            </div>
          </aside>

          {/* Área Principal */}
          <div className="flex-grow space-y-6">
            {/* Barra de Herramientas Superior Sticky */}
            <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm py-4 -mx-2 px-2">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-grow w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por modelo, marca o característica..."
                    className="pl-10 h-12 bg-white rounded-xl border-none shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-2 w-full md:w-auto">
                  {/* Botón de Filtros para Móvil */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden h-12 bg-white rounded-xl flex-grow md:flex-none">
                        <Filter className="mr-2 h-4 w-4" />
                        Filtros
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] overflow-y-auto">
                      <SheetHeader className="mb-8 border-b pb-4">
                        <SheetTitle className="text-2xl font-bold font-headline text-primary">Filtros</SheetTitle>
                        <SheetDescription>Ajusta las especificaciones técnicas para encontrar tu dispositivo ideal.</SheetDescription>
                      </SheetHeader>
                      <FilterContent {...commonFilterProps} prefix="mobile" />
                    </SheetContent>
                  </Sheet>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="h-12 bg-white rounded-xl min-w-[140px] flex justify-between shadow-sm border-none">
                        <span className="text-sm">
                          {sortOrder === "newest" ? "Novedades" : sortOrder === "price-low" ? "Precio: Bajo" : "Precio: Alto"}
                        </span>
                        <SlidersHorizontal className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 rounded-xl">
                      <DropdownMenuLabel>Ordenar Por</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
                        <DropdownMenuRadioItem value="newest">Más recientes</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="price-low">Precio: Menor a Mayor</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="price-high">Precio: Mayor a Menor</DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                </div>
              </div>

              {/* Chips de Filtros Activos (ahora parte del área sticky) */}
              {(selectedBrands.length > 0 || selectedRam.length > 0 || selectedNetwork.length > 0 || onlyOnSale) && (
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <p className="text-sm text-muted-foreground mr-2">Filtros:</p>
                  {onlyOnSale && (
                    <Button variant="secondary" size="sm" className="h-7 rounded-full text-[10px] font-bold uppercase bg-primary text-white hover:bg-primary/90" onClick={() => setOnlyOnSale(false)}>
                      Solo Ofertas <X className="ml-1 h-3 w-3" />
                    </Button>
                  )}
                  {selectedBrands.map(brand => (
                    <Button key={brand} variant="secondary" size="sm" className="h-7 rounded-full text-[10px] font-bold uppercase" onClick={() => toggleFilter(setSelectedBrands, brand)}>
                      {brand} <X className="ml-1 h-3 w-3" />
                    </Button>
                  ))}
                  {selectedRam.map(ram => (
                    <Button key={ram} variant="secondary" size="sm" className="h-7 rounded-full text-[10px] font-bold uppercase" onClick={() => toggleFilter(setSelectedRam, ram)}>
                      RAM: {ram} <X className="ml-1 h-3 w-3" />
                    </Button>
                  ))}
                  {selectedNetwork.map(net => (
                    <Button key={net} variant="secondary" size="sm" className="h-7 rounded-full text-[10px] font-bold uppercase" onClick={() => toggleFilter(setSelectedNetwork, net)}>
                      Red: {net} <X className="ml-1 h-3 w-3" />
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Grid de Productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pt-4">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden border-none bg-white hover:shadow-xl transition-all duration-300 rounded-2xl relative">
                  {product.isOnSale && (
                    <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                      OFERTA
                    </div>
                  )}
                  <Link href={`/catalog/${product.id}`}>
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint="phone smartphone"
                      />
                      <div className="absolute bottom-2 left-2 flex gap-1">
                        <div className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center">
                          <Cpu className="h-3 w-3 mr-1" /> {product.specs.ram}
                        </div>
                        <div className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center">
                          <Wifi className="h-3 w-3 mr-1" /> {product.specs.red}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <CardContent className="p-5">
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.1em] mb-1">{product.brand}</p>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors truncate">
                      <Link href={`/catalog/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-1 mb-4">
                      {product.specs.procesador} • {product.specs.pantalla}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-white rounded-lg px-4" asChild>
                        <Link href={`/catalog/${product.id}`}>Detalles</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed shadow-sm">
                <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
                <p className="text-muted-foreground">Intenta ajustar tus criterios técnicos o limpiar los filtros.</p>
                <Button variant="link" onClick={clearFilters} className="mt-4 text-primary font-bold">
                  Limpiar todos los filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


"use client"

import { useState, useMemo } from "react";
import { PRODUCTS, Product } from "@/lib/config";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, SlidersHorizontal, ChevronDown, X } from "lucide-react";
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

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [sortOrder, setSortOrder] = useState("newest");

  const brands = useMemo(() => {
    return Array.from(new Set(PRODUCTS.map(p => p.brand)));
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesBrand && matchesPrice;
    }).sort((a, b) => {
      if (sortOrder === "price-low") return a.price - b.price;
      if (sortOrder === "price-high") return b.price - a.price;
      return 0;
    });
  }, [searchTerm, selectedBrands, priceRange, sortOrder]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrands([]);
    setPriceRange([0, 1500]);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold text-lg mb-4">Marcas</h3>
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox 
                id={`brand-${brand}`} 
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <Label htmlFor={`brand-${brand}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Precio</h3>
          <span className="text-xs font-bold text-primary">${priceRange[0]} - ${priceRange[1]}</span>
        </div>
        <Slider
          defaultValue={[0, 1500]}
          max={1500}
          step={50}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mt-6"
        />
      </div>

      <Button 
        variant="outline" 
        className="w-full text-xs font-bold uppercase tracking-widest"
        onClick={clearFilters}
      >
        Limpiar Filtros
      </Button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-4xl font-bold font-headline mb-2 text-primary">Catálogo de Productos</h1>
          <p className="text-muted-foreground">Encuentra el dispositivo perfecto para tu estilo de vida.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de Filtros (Solo Escritorio) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-8 bg-white p-6 rounded-2xl border shadow-sm">
              <div className="flex items-center space-x-2 pb-4 border-b">
                <Filter className="h-5 w-5 text-primary" />
                <h2 className="font-bold font-headline text-xl">Filtros</h2>
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Área Principal */}
          <div className="flex-grow space-y-6">
            {/* Barra de Herramientas Superior */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar productos..."
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
                      <SheetDescription>Ajusta los criterios de búsqueda.</SheetDescription>
                    </SheetHeader>
                    <FilterContent />
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
                      <DropdownMenuRadioItem value="price-high">Precio: Mayor a Menor</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Info de Resultados y Chips de Filtros Activos */}
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm text-muted-foreground mr-4">
                Mostrando <span className="font-bold text-foreground">{filteredProducts.length}</span> resultados
              </p>
              {selectedBrands.map(brand => (
                <Button 
                  key={brand} 
                  variant="secondary" 
                  size="sm" 
                  className="h-7 rounded-full text-[10px] font-bold uppercase"
                  onClick={() => toggleBrand(brand)}
                >
                  {brand} <X className="ml-1 h-3 w-3" />
                </Button>
              ))}
            </div>

            {/* Grid de Productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden border-none bg-white hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <Link href={`/catalog/${product.id}`}>
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint="phone device"
                      />
                      {product.stock < 10 && (
                        <div className="absolute bottom-2 right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                          STOCK BAJO: {product.stock}
                        </div>
                      )}
                      {product.isFeatured && (
                        <div className="absolute top-2 left-2 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                          DESTACADO
                        </div>
                      )}
                    </div>
                  </Link>
                  <CardContent className="p-5">
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.1em] mb-1">{product.brand}</p>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors truncate">
                      <Link href={`/catalog/${product.id}`}>{product.name}</Link>
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-primary">${product.price}</span>
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-white rounded-lg px-4">
                        Añadir
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
                <p className="text-muted-foreground">Intenta ajustar tu búsqueda o filtros para encontrar lo que buscas.</p>
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

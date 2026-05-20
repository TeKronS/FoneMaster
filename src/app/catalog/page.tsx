"use client"

import { useState, useMemo } from "react";
import { PRODUCTS, Product } from "@/lib/config";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  const brands = useMemo(() => {
    const b = new Set(PRODUCTS.map(p => p.brand));
    return ["all", ...Array.from(b)];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = brandFilter === "all" || product.brand === brandFilter;
      return matchesSearch && matchesBrand;
    }).sort((a, b) => {
      if (sortOrder === "price-low") return a.price - b.price;
      if (sortOrder === "price-high") return b.price - a.price;
      return 0; // default (newest/featured logic could go here)
    });
  }, [searchTerm, brandFilter, sortOrder]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-4xl font-bold font-headline mb-2 text-primary">Product Catalog</h1>
          <p className="text-muted-foreground">Find the perfect device for your lifestyle.</p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10 h-12 bg-white rounded-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-12 bg-white rounded-xl min-w-[120px] flex justify-between">
                  <span className="capitalize">{brandFilter === "all" ? "All Brands" : brandFilter}</span>
                  <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Filter by Brand</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={brandFilter} onValueChange={setBrandFilter}>
                  {brands.map((brand) => (
                    <DropdownMenuRadioItem key={brand} value={brand} className="capitalize">
                      {brand}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-12 bg-white rounded-xl min-w-[140px] flex justify-between">
                  <span>{sortOrder === "newest" ? "Newest" : sortOrder === "price-low" ? "Price: Low to High" : "Price: High to Low"}</span>
                  <SlidersHorizontal className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
                  <DropdownMenuRadioItem value="newest">Newest First</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-low">Price: Low to High</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-high">Price: High to Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Results Info */}
        <p className="text-sm text-muted-foreground">
          Showing {filteredProducts.length} results
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-none bg-white hover:shadow-xl transition-all duration-300">
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
                      LOW STOCK: {product.stock}
                    </div>
                  )}
                </div>
              </Link>
              <CardContent className="p-4">
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.1em] mb-1">{product.brand}</p>
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors truncate">
                  <Link href={`/catalog/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-primary">${product.price}</span>
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-white rounded-lg">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed">
            <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
            <Button variant="link" onClick={() => { setSearchTerm(""); setBrandFilter("all"); }} className="mt-4">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export const STORE_CONFIG = {
  name: "FoneMaster",
  description: "Descubre la última tecnología en smartphones. Nebula, Zenith, Vortex y más. Tu tienda de confianza con envío gratis y garantía asegurada.",
  logo: "FoneMaster",
  url: "https://fone-master.vercel.app", // URL base para metadatos
  contact: {
    email: "soporte@commercelink.pro",
    phone: "+1 (555) 000-1234",
    address: "123 Tech Avenue, Silicon Valley, CA 94025",
    workingHours: "Lun - Sáb: 9:00 AM - 8:00 PM",
  },
  about: {
    mission: "Empoderar a las personas a través de tecnología móvil de vanguardia que mejora la conectividad y la productividad en todo el mundo.",
    vision: "Ser la plataforma global líder en herramientas de comunicación accesibles e innovadoras que cierren la brecha digital.",
    history: "Fundada en 2024, CommerceLink Pro comenzó con un objetivo simple: hacer que la tecnología de alta gama sea accesible para todos con una experiencia de compra sin complicaciones.",
  },
  seo: {
    keywords: ["smartphones", "celulares", "tecnología", "comprar teléfonos", "Nebula X1", "5G", "ofertas móviles"],
    ogImage: "https://picsum.photos/seed/fonemaster-og/1200/630"
  },
  colors: {
    primary: "#345EBB",
    accent: "#3BB2E2",
    background: "#F0F1F5",
  },
};

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  isOnSale?: boolean;
  description: string;
  specs: {
    pantalla: string;
    procesador: string;
    ram: string;
    almacenamiento: string;
    bateria: string;
    red: string;
  };
  category: string;
  image: string;
  bannerImage: string;
  isFeatured: boolean;
  stock: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Nebula X1",
    brand: "Nebula",
    price: 899,
    originalPrice: 999,
    isOnSale: true,
    description: "El buque insignia definitivo con una cámara de 200MP y una duración de batería revolucionaria.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone1/600/600",
    bannerImage: "https://picsum.photos/seed/phone1-banner/1200/400",
    isFeatured: true,
    stock: 15,
    specs: {
      pantalla: "6.8",
      procesador: "Quantum G1 (3.2 GHz)",
      ram: "12GB",
      almacenamiento: "256GB",
      bateria: "5000 mAh",
      red: "5G"
    },
  },
  {
    id: "2",
    name: "Zenith Pro",
    brand: "Zenith",
    price: 849,
    description: "Diseño elegante combinado con un rendimiento inigualable. La elección profesional para creadores.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone2/600/600",
    bannerImage: "https://picsum.photos/seed/phone2-banner/1200/400",
    isFeatured: true,
    stock: 8,
    specs: {
      pantalla: "6.5",
      procesador: "Snapdragon Elite (3.0 GHz)",
      ram: "16GB",
      almacenamiento: "512GB",
      bateria: "4800 mAh",
      red: "5G"
    },
  },
  {
    id: "3",
    name: "Vortex Flip",
    brand: "Vortex",
    price: 999,
    originalPrice: 1199,
    isOnSale: true,
    description: "El futuro es plegable. Experimenta la potencia más compacta jamás construida.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone3/600/600",
    bannerImage: "https://picsum.photos/seed/phone3-banner/1200/400",
    isFeatured: true,
    stock: 5,
    specs: {
      pantalla: "7.2",
      procesador: "Aura V2 (2.8 GHz)",
      ram: "12GB",
      almacenamiento: "256GB",
      bateria: "4400 mAh",
      red: "5G"
    },
  },
  {
    id: "4",
    name: "Nebula Lite",
    brand: "Nebula",
    price: 499,
    description: "Funciones premium a un precio accesible. Perfecto para usuarios cotidianos.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone4/600/600",
    bannerImage: "https://picsum.photos/seed/phone4-banner/1200/400",
    isFeatured: false,
    stock: 25,
    specs: {
      pantalla: "6.1",
      procesador: "Quantum G1 Lite (2.4 GHz)",
      ram: "8GB",
      almacenamiento: "128GB",
      bateria: "4000 mAh",
      red: "4G"
    },
  },
  {
    id: "5",
    name: "Aura 5G",
    brand: "Aura",
    price: 599,
    originalPrice: 699,
    isOnSale: true,
    description: "Conectividad ultrarrápida con una estética minimalista y elegante.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone5/600/600",
    bannerImage: "https://picsum.photos/seed/phone5-banner/1200/400",
    isFeatured: false,
    stock: 12,
    specs: {
      pantalla: "6.4",
      procesador: "Aura V1 (2.6 GHz)",
      ram: "8GB",
      almacenamiento: "256GB",
      bateria: "4500 mAh",
      red: "5G"
    },
  },
  {
    id: "6",
    name: "Zenith Air",
    brand: "Zenith",
    price: 599,
    description: "El smartphone más ligero de su clase. Olvidarás que lo llevas contigo.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone6/600/600",
    bannerImage: "https://picsum.photos/seed/phone6-banner/1200/400",
    isFeatured: false,
    stock: 20,
    specs: {
      pantalla: "6.0",
      procesador: "Snapdragon Air (2.2 GHz)",
      ram: "6GB",
      almacenamiento: "128GB",
      bateria: "3800 mAh",
      red: "4G"
    },
  },
  {
    id: "7",
    name: "Titan Rugged",
    brand: "Titan",
    price: 749,
    description: "Prácticamente indestructible. Diseñado para condiciones extremas y aventuras al aire libre.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone7/600/600",
    bannerImage: "https://picsum.photos/seed/phone7-banner/1200/400",
    isFeatured: false,
    stock: 10,
    specs: {
      pantalla: "6.3",
      procesador: "Titan Core (2.5 GHz)",
      ram: "8GB",
      almacenamiento: "128GB",
      bateria: "8000 mAh",
      red: "5G"
    },
  },
  {
    id: "8",
    name: "Aura Pro Max",
    brand: "Aura",
    price: 1299,
    description: "La pantalla más grande y brillante. Un centro de productividad móvil sin igual.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone8/600/600",
    bannerImage: "https://picsum.photos/seed/phone8-banner/1200/400",
    isFeatured: true,
    stock: 6,
    specs: {
      pantalla: "7.0",
      procesador: "Aura V3 Ultra (3.4 GHz)",
      ram: "16GB",
      almacenamiento: "1TB",
      bateria: "5500 mAh",
      red: "5G"
    },
  },
  {
    id: "9",
    name: "Nova S22",
    brand: "Nova",
    price: 399,
    originalPrice: 449,
    isOnSale: true,
    description: "Equilibrio perfecto entre precio y rendimiento. La mejor opción para estudiantes.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone9/600/600",
    bannerImage: "https://picsum.photos/seed/phone9-banner/1200/400",
    isFeatured: false,
    stock: 30,
    specs: {
      pantalla: "6.5",
      procesador: "Nova Star (2.3 GHz)",
      ram: "6GB",
      almacenamiento: "128GB",
      bateria: "4200 mAh",
      red: "4G"
    },
  },
  {
    id: "10",
    name: "Eco Green 1",
    brand: "Eco",
    price: 399,
    description: "Fabricado con materiales 100% reciclados. Potencia sostenible para un futuro mejor.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone10/600/600",
    bannerImage: "https://picsum.photos/seed/phone10-banner/1200/400",
    isFeatured: false,
    stock: 40,
    specs: {
      pantalla: "6.2",
      procesador: "EcoLeaf X (2.1 GHz)",
      ram: "4GB",
      almacenamiento: "64GB",
      bateria: "4000 mAh",
      red: "4G"
    },
  },
  {
    id: "11",
    name: "Nebula Ultra",
    brand: "Nebula",
    price: 1349,
    originalPrice: 1499,
    isOnSale: true,
    description: "Liderando la industria con zoom óptico de 100x y pantalla de 144Hz.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone11/600/600",
    bannerImage: "https://picsum.photos/seed/phone11-banner/1200/400",
    isFeatured: true,
    stock: 4,
    specs: {
      pantalla: "6.9",
      procesador: "Quantum G2 (3.5 GHz)",
      ram: "16GB",
      almacenamiento: "512GB",
      bateria: "5200 mAh",
      red: "5G"
    },
  },
  {
    id: "12",
    name: "Zenith Fold 2",
    brand: "Zenith",
    price: 1699,
    originalPrice: 1799,
    isOnSale: true,
    description: "Se despliega para convertirse en tablet. El pináculo de la ingeniería móvil.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone12/600/600",
    bannerImage: "https://picsum.photos/seed/phone12-banner/1200/400",
    isFeatured: false,
    stock: 3,
    specs: {
      pantalla: "7.6",
      procesador: "Snapdragon Elite Gen 2 (3.3 GHz)",
      ram: "12GB",
      almacenamiento: "512GB",
      bateria: "4600 mAh",
      red: "5G"
    },
  },
];
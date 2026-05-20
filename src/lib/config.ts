export const STORE_CONFIG = {
  name: "CommerceLink Pro",
  description: "Tu tienda integral para lo último en tecnología móvil.",
  logo: "CommerceLink",
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
  description: string;
  specs: Record<string, string>;
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
    price: 999,
    description: "El buque insignia definitivo con una cámara de 200MP y una duración de batería revolucionaria.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone1/600/600",
    bannerImage: "https://picsum.photos/seed/phone1-banner/1200/400",
    isFeatured: true,
    stock: 15,
    specs: {
      pantalla: "6.8 pulgadas OLED",
      procesador: "Quantum G1",
      ram: "12GB",
      almacenamiento: "256GB",
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
      pantalla: "6.5 pulgadas AMOLED",
      procesador: "Snapdragon Elite",
      ram: "16GB",
      almacenamiento: "512GB",
    },
  },
  {
    id: "3",
    name: "Vortex Flip",
    brand: "Vortex",
    price: 1199,
    description: "El futuro es plegable. Experimenta la potencia más compacta jamás construida.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone3/600/600",
    bannerImage: "https://picsum.photos/seed/phone3-banner/1200/400",
    isFeatured: true,
    stock: 5,
    specs: {
      pantalla: "7.2 pulgadas Plegable",
      procesador: "Aura V2",
      ram: "12GB",
      almacenamiento: "256GB",
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
      pantalla: "6.1 pulgadas LCD",
      procesador: "Quantum G1 Lite",
      ram: "8GB",
      almacenamiento: "128GB",
    },
  },
  {
    id: "5",
    name: "Aura 5G",
    brand: "Aura",
    price: 699,
    description: "Conectividad ultrarrápida con una estética minimalista y elegante.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone5/600/600",
    bannerImage: "https://picsum.photos/seed/phone5-banner/1200/400",
    isFeatured: false,
    stock: 12,
    specs: {
      pantalla: "6.4 pulgadas OLED",
      procesador: "Aura V1",
      ram: "8GB",
      almacenamiento: "256GB",
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
      pantalla: "6.0 pulgadas AMOLED",
      procesador: "Snapdragon Air",
      ram: "6GB",
      almacenamiento: "128GB",
    },
  },
];

export const STORE_CONFIG = {
  name: "CommerceLink Pro",
  description: "Your one-stop shop for the latest mobile technology.",
  logo: "CommerceLink",
  contact: {
    email: "support@commercelink.pro",
    phone: "+1 (555) 000-1234",
    address: "123 Tech Avenue, Silicon Valley, CA 94025",
    workingHours: "Mon - Sat: 9:00 AM - 8:00 PM",
  },
  about: {
    mission: "To empower individuals through cutting-edge mobile technology that enhances connectivity and productivity worldwide.",
    vision: "To be the leading global platform for accessible and innovative communication tools that bridge the digital divide.",
    history: "Founded in 2024, CommerceLink Pro started with a simple goal: making high-end technology accessible to everyone with a seamless shopping experience.",
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
    description: "The ultimate flagship with a 200MP camera and revolutionary battery life.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone1/600/600",
    bannerImage: "https://picsum.photos/seed/phone1-banner/1200/400",
    isFeatured: true,
    stock: 15,
    specs: {
      screen: "6.8 inch OLED",
      processor: "Quantum G1",
      ram: "12GB",
      storage: "256GB",
    },
  },
  {
    id: "2",
    name: "Zenith Pro",
    brand: "Zenith",
    price: 849,
    description: "Elegant design meets unmatched performance. The pro choice for creators.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone2/600/600",
    bannerImage: "https://picsum.photos/seed/phone2-banner/1200/400",
    isFeatured: true,
    stock: 8,
    specs: {
      screen: "6.5 inch AMOLED",
      processor: "Snapdragon Elite",
      ram: "16GB",
      storage: "512GB",
    },
  },
  {
    id: "3",
    name: "Vortex Flip",
    brand: "Vortex",
    price: 1199,
    description: "The future is foldable. Experience the most compact powerhouse ever built.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone3/600/600",
    bannerImage: "https://picsum.photos/seed/phone3-banner/1200/400",
    isFeatured: true,
    stock: 5,
    specs: {
      screen: "7.2 inch Foldable",
      processor: "Aura V2",
      ram: "12GB",
      storage: "256GB",
    },
  },
  {
    id: "4",
    name: "Nebula Lite",
    brand: "Nebula",
    price: 499,
    description: "Premium features at an accessible price. Perfect for everyday users.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone4/600/600",
    bannerImage: "https://picsum.photos/seed/phone4-banner/1200/400",
    isFeatured: false,
    stock: 25,
    specs: {
      screen: "6.1 inch LCD",
      processor: "Quantum G1 Lite",
      ram: "8GB",
      storage: "128GB",
    },
  },
  {
    id: "5",
    name: "Aura 5G",
    brand: "Aura",
    price: 699,
    description: "Lightning-fast connectivity with a sleek, minimalist aesthetic.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone5/600/600",
    bannerImage: "https://picsum.photos/seed/phone5-banner/1200/400",
    isFeatured: false,
    stock: 12,
    specs: {
      screen: "6.4 inch OLED",
      processor: "Aura V1",
      ram: "8GB",
      storage: "256GB",
    },
  },
  {
    id: "6",
    name: "Zenith Air",
    brand: "Zenith",
    price: 599,
    description: "The lightest smartphone in its class. Forget you're even carrying it.",
    category: "Smartphones",
    image: "https://picsum.photos/seed/phone6/600/600",
    bannerImage: "https://picsum.photos/seed/phone6-banner/1200/400",
    isFeatured: false,
    stock: 20,
    specs: {
      screen: "6.0 inch AMOLED",
      processor: "Snapdragon Air",
      ram: "6GB",
      storage: "128GB",
    },
  },
];

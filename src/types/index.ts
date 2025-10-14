// Product Types
export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    category: ProductCategory;
    gender: 'men' | 'women' | 'unisex';
    basePrice: number;
    images: string[];
    features: string[];
    occasions: string[];
    popular?: boolean;
  }
  
  export type ProductCategory = 
    | 'kaftan'
    | 'agbada'
    | 'senator'
    | 'wrapper-set'
    | 'boubou'
    | 'dashiki';
  
  // Fabric Types
  export interface Fabric {
    id: string;
    name: string;
    slug: string;
    description: string;
    images: string[];
    texture: FabricTexture;
    pattern: FabricPattern;
    colors: string[];
    pricePerYard: number;
    inStock: boolean;
    material: string;
  }
  
  export type FabricTexture = 
    | 'cotton'
    | 'brocade'
    | 'lace'
    | 'silk'
    | 'damask'
    | 'ankara'
    | 'kente';
  
  export type FabricPattern = 
    | 'geometric'
    | 'floral'
    | 'abstract'
    | 'striped'
    | 'solid'
    | 'traditional';
  
  // Design/Order Types
  export interface Design {
    id: string;
    userId?: string;
    product: Product;
    fabric?: Fabric;
    customFabric?: {
      imageUrl: string;
      description: string;
    };
    customization: Customization;
    eventDetails: EventDetails;
    measurements?: Measurements;
    aiTryOnResult?: string;
    status: DesignStatus;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export type DesignStatus = 
    | 'draft'
    | 'pending-quote'
    | 'quoted'
    | 'approved'
    | 'in-production'
    | 'completed';
  
  export interface Customization {
    embroidery?: {
      enabled: boolean;
      placement?: string;
      text?: string;
    };
    buttons?: string;
    embellishments?: string[];
    specialRequests?: string;
  }
  
  export interface EventDetails {
    eventType: string;
    eventDate?: Date;
    colorPalette: string[];
    quantity: number;
  }
  
  export interface Measurements {
    method: 'provided' | 'fitting-booked' | 'guide-sent';
    data?: {
      chest?: number;
      waist?: number;
      hip?: number;
      shoulderWidth?: number;
      sleeveLength?: number;
      length?: number;
      neck?: number;
      // Add more as needed
    };
  }
  
  // AI Try-On Types
  export interface TryOnRequest {
    personImageUrl: string;
    fabricPattern: string;
    garmentStyle: string;
  }
  
  export interface TryOnResult {
    id: string;
    originalImage: string;
    resultImage: string;
    designId?: string;
    createdAt: Date;
  }
  
  // Booking Types
  export interface Booking {
    id: string;
    type: 'virtual' | 'in-person';
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    dateTime: Date;
    duration: number; // in minutes
    notes?: string;
    status: BookingStatus;
    designId?: string;
  }
  
  export type BookingStatus = 
    | 'pending'
    | 'confirmed'
    | 'completed'
    | 'cancelled';
  
  // Quote Types
  export interface QuoteRequest {
    design: Design;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    message?: string;
  }
  
  export interface Quote {
    id: string;
    designId: string;
    amount: number;
    breakdown: {
      fabric: number;
      labor: number;
      customization: number;
      total: number;
    };
    validUntil: Date;
    status: 'pending' | 'accepted' | 'rejected' | 'expired';
    createdAt: Date;
  }
  
  // Contact Form Types
  export interface ContactMessage {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }
  
  // Filter Types
  export interface ProductFilters {
    gender?: 'men' | 'women' | 'unisex';
    category?: ProductCategory;
    occasion?: string;
    priceRange?: {
      min: number;
      max: number;
    };
  }
  
  export interface FabricFilters {
    colorFamily?: string;
    texture?: FabricTexture;
    pattern?: FabricPattern;
    priceRange?: {
      min: number;
      max: number;
    };
    inStockOnly?: boolean;
  }
  
  // API Response Types
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
  }
  
  // User Types (for future auth)
  export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    savedDesigns: string[];
    orders: string[];
    createdAt: Date;
  }
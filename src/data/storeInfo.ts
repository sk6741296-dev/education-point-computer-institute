export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  category: string;
  address: {
    full: string;
    locality: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectUrl: string;
  };
  phone: {
    display: string;
    raw: string;
  };
  rating: {
    score: number;
    count: number;
  };
  hours: {
    day: string;
    open: string;
    close: string;
    formatted: string;
  }[];
  images: {
    exterior: string;
    interior: string;
  };
  reviews: Review[];
}

export const STORE_INFO: StoreInfo = {
  name: "FASHION STORY",
  tagline: "Contemporary Fashion & Curated Styles in Ashok Vihar",
  category: "Clothing Store",
  address: {
    full: "Phase 3, 1A, Pocket A Road, Ashok Vihar II, Pocket B, Ashok Vihar, Delhi, 110052, India",
    locality: "Phase 3, 1A, Pocket A Road, Ashok Vihar II",
    city: "Delhi",
    pincode: "110052",
    state: "Delhi",
    country: "India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.789!2d77.17!3d28.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d024b45555555%3A0x1!2sAshok%20Vihar%20Phase%203%20Delhi",
    googleMapsDirectUrl: "https://www.google.com/maps/search/?api=1&query=FASHION%20STORY&query_place_id=ChIJpRzK1CIDDTkRSOahZYP55Yw",
  },
  phone: {
    display: "+91 96507 97891",
    raw: "+919650797891",
  },
  rating: {
    score: 5.0,
    count: 10,
  },
  hours: [
    { day: "Monday", open: "10:30 AM", close: "9:00 PM", formatted: "10:30 AM – 9:00 PM" },
    { day: "Tuesday", open: "10:30 AM", close: "9:00 PM", formatted: "10:30 AM – 9:00 PM" },
    { day: "Wednesday", open: "10:30 AM", close: "9:00 PM", formatted: "10:30 AM – 9:00 PM" },
    { day: "Thursday", open: "10:30 AM", close: "9:00 PM", formatted: "10:30 AM – 9:00 PM" },
    { day: "Friday", open: "10:30 AM", close: "9:00 PM", formatted: "10:30 AM – 9:00 PM" },
    { day: "Saturday", open: "10:30 AM", close: "9:00 PM", formatted: "10:30 AM – 9:00 PM" },
    { day: "Sunday", open: "10:30 AM", close: "9:00 PM", formatted: "10:30 AM – 9:00 PM" },
  ],
  images: {
    exterior: "/images/store-exterior.jpg",
    interior: "/images/store-interior.jpg",
  },
  reviews: [
    {
      id: "rev-1",
      author: "Vanshika Vermani",
      rating: 5,
      comment: "You are going to have an experience of the best of fashion world in this shop. The best collection and the latest of trends. Do visit to experience it yourself.⭐",
    },
    {
      id: "rev-2",
      author: "Deepak Pathak",
      rating: 5,
      comment: "Best selling products",
    },
    {
      id: "rev-3",
      author: "Neelam Yadav",
      rating: 5,
      comment: "Excellent callection",
    },
    {
      id: "rev-4",
      author: "Preeti Preeti",
      rating: 5,
      comment: "Nice collection",
    },
    {
      id: "rev-5",
      author: "BHAWNA CHAUHAN",
      rating: 5,
      comment: "Nice Collection 👍🏻",
    },
    {
      id: "rev-6",
      author: "Harsh Vermani",
      rating: 5,
      comment: "Wow nice collection 👍",
    },
  ],
};

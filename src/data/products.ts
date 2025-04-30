export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    description: "Pain relief and fever reducer. Box of 20 tablets.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600",
    category: "Pain Relief"
  },
  {
    id: "2",
    name: "Amoxicillin 250mg",
    description: "Antibiotic for bacterial infections. Bottle of 30 capsules.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600",
    category: "Antibiotics"
  },
  {
    id: "3",
    name: "Vitamin D3 1000IU",
    description: "Supports bone and immune health. Bottle of 90 tablets.",
    price: 8.49,
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600",
    category: "Vitamins"
  },
  {
    id: "4",
    name: "Loratadine 10mg",
    description: "24-hour allergy relief. Box of 30 tablets.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600",
    category: "Allergy"
  },
  {
    id: "5",
    name: "Omeprazole 20mg",
    description: "Reduces stomach acid for heartburn relief. Box of 14 tablets.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600",
    category: "Digestive Health"
  },
  {
    id: "6",
    name: "Ibuprofen 400mg",
    description: "Anti-inflammatory pain relief. Box of 24 tablets.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600",
    category: "Pain Relief"
  },
  {
    id: "7",
    name: "Cetirizine 10mg",
    description: "Allergy relief for hay fever and pet allergies. Box of 30 tablets.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600",
    category: "Allergy"
  },
  {
    id: "8",
    name: "Zinc + Vitamin C Tablets",
    description: "Supports immune system health. Bottle of 60 tablets.",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600",
    category: "Vitamins"
  },
  {
    id: "9",
    name: "Digital Thermometer",
    description: "Fast and accurate temperature readings.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600",
    category: "Health Devices"
  },
  {
    id: "10",
    name: "Blood Pressure Monitor",
    description: "Easy-to-use digital blood pressure monitor for home use.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=600",
    category: "Health Devices"
  },
  {
    id: "11",
    name: "First Aid Kit",
    description: "Comprehensive kit with essential first aid supplies.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600",
    category: "First Aid"
  },
  {
    id: "12",
    name: "Omega-3 Fish Oil",
    description: "Supports heart and brain health. Bottle of 60 softgels.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=600",
    category: "Supplements"
  }
];

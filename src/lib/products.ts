export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  specs: string[];
  features: string[];
  applications: string[];
  technicalSpecs: {
    [key: string]: string;
  };
  image: string;
  gallery: string[];
  price: string;
  availability: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "asian-bond-wall-putty",
    title: "Asian Bond Wall Putty",
    subtitle: "Foundation Materials",
    description:
      "Introducing 100% Waterproof ASIAN BOND WALL PUTTY - the ultimate solution for all your waterproofing needs! Say goodbye to worries about water damage, dampness, and mold growth on your walls.",
    fullDescription:
      "Our advanced formula creates a durable, impermeable barrier that effectively seals out moisture, ensuring long-lasting protection for your walls. This premium wall putty is designed to provide superior adhesion, smooth finish, and excellent durability for both interior and exterior applications. The waterproof technology ensures your walls remain protected against moisture penetration, making it ideal for areas prone to humidity and water exposure.",
    specs: ["Smooth Surface", "Improved Paint Adhesion", "Hides Imperfections"],
    features: [
      "100% Waterproof Protection",
      "Superior Adhesion Technology",
      "Crack Resistance Formula",
      "Easy Application Process",
      "Long-lasting Durability",
      "Mold and Mildew Resistant",
    ],
    applications: [
      "Interior Wall Finishing",
      "Exterior Wall Protection",
      "Bathroom and Kitchen Areas",
      "Basement Waterproofing",
      "Commercial Buildings",
      "Residential Projects",
    ],
    technicalSpecs: {
      Coverage: "12-15 sq ft per kg",
      "Drying Time": "4-6 hours",
      "Recoat Time": "6-8 hours",
      "Shelf Life": "12 months",
      "Pack Size": "20kg, 40kg bags",
      Color: "White",
    },
    image: "/wall-putty.png",
    gallery: [
      "/wall-putty.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    price: "₹450 per 20kg bag",
    availability: "In Stock",
    category: "Wall Finishing",
  },
  {
    id: "asian-bond-floor-hardner",
    title: "Asian Bond Floor Hardener",
    subtitle: "Foundation Materials",
    description:
      "Introducing Asian Bond Ironite Floor Hardener: the ultimate solution for fortifying and protecting your concrete floors.",
    fullDescription:
      "Engineered to endure heavy usage and resist wear and tear, our floor hardener is your go-to product for creating durable and long-lasting flooring surfaces in a wide range of settings.",
    specs: ["Grade A572-50", "Corrosion Resistant", "Custom Lengths"],
    features: [
      "Exceptional Durability",
      "High Abrasion Resistance",
      "Chemical Protection",
      "Easy Application",
      "Versatile Use",
      "Low Maintenance",
      "Safety Assurance",
    ],
    applications: [
      "Building Frameworks",
      "Bridge Construction",
      "Industrial Structures",
      "Residential Construction",
      "Commercial Buildings",
      "Infrastructure Projects",
    ],
    technicalSpecs: {
      Grade: "A572-50",
      "Yield Strength": "50 ksi",
      "Tensile Strength": "65 ksi",
      Elongation: "18% min",
      Standard: "ASTM A572",
      Coating: "Galvanized",
    },
    image: "/wall-hardner.png",
    gallery: [
      "/wall-hardner.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    price: "₹65,000 per ton",
    availability: "In Stock",
    category: "Steel Products",
  },
  {
    id: "asian-bond-iron-oxides",
    title: "Asia Bond Iron Oxides",
    subtitle: "Base Materials",
    description:
      "Discover the power of color with Asian Bond Iron Oxide Pigments",
    fullDescription:
      "The versatile solution for vibrant, long-lasting hues in a variety of applications. Whether you're adding depth to concrete, enhancing the beauty of paints, or crafting eye-catching cosmetics, our iron oxide pigments offer unmatched color stability, durability, and versatility.",
    specs: [
      "Rich, Vibrant Colors",
      "Excellent Lightfastness",
      "High Heat Stability",
    ],
    features: [
      "Rich, Vibrant Colors",
      "Excellent Lightfastness",
      "High Heat Stability",
      "Chemical Resistance",
      "Uniform Particle Size",
      "Environmentally Friendly",
    ],
    applications: [
      "Wide Range of Colors",
      "Easy to Use",
      "Foundation Work",
      "Drainage Systems",
      "Landscaping Projects",
      "Paving Applications",
    ],
    technicalSpecs: {
      "Sizes Available": "6mm, 10mm, 20mm, 40mm",
      "Specific Gravity": "2.6-2.8",
      "Water Absorption": "< 2%",
      "Crushing Value": "< 30%",
      "Impact Value": "< 45%",
      "Flakiness Index": "< 35%",
    },
    image: "/iron-oxide.png",
    gallery: [
      "/iron-oxide.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    price: "₹1,200 per cubic meter",
    availability: "In Stock",
    category: "Aggregates",
  },
  {
    id: "asian-bond-demoulding-agent",
    title: "Asia Bond Demoulding Agent",
    subtitle: "Base Materials",
    description:
      "Asian Bond Demoulding Agent is the ultimate solution for effortless and efficient demoulding. ",
    fullDescription:
      "Engineered with precision and expertise, our demoulding agent ensures smooth and clean demoulding every time, saving you time and effort in your manufacturing processes.",
    specs: [
      "Effortless Release",
      "Non-Stick Formula",
      "Versatile Compatibility",
    ],
    features: [
      "Effortless Release",
      "Non-Stick Formula",
      "Versatile Compatibility",
      "Reduced Production Time",
      "Long-lasting Performance",
      "Environmentally Friendly",
    ],
    applications: [
      "Easy Application",
      "Easy to Use",
      "Foundation Work",
      "Drainage Systems",
      "Landscaping Projects",
      "Paving Applications",
    ],
    technicalSpecs: {
      "Sizes Available": "6mm, 10mm, 20mm, 40mm",
      "Specific Gravity": "2.6-2.8",
      "Water Absorption": "< 2%",
      "Crushing Value": "< 30%",
      "Impact Value": "< 45%",
      "Flakiness Index": "< 35%",
    },
    image: "/demoulding-agent.png",
    gallery: [
      "/demoulding-agent.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    price: "₹1,200 per cubic meter",
    availability: "In Stock",
    category: "Aggregates",
  },
  {
    id: "asian-bond-curing-compound",
    title: "Asia Bond Curing Compound",
    subtitle: "Base Materials",
    description:
      "The advanced solution for optimal concrete curing and protection is Asian Bond Curing Compound",
    fullDescription:
      "Engineered with cutting-edge technology, our curing compound ensures uniform hydration and proper curing of concrete surfaces, resulting in enhanced strength, durability, and longevity.",
    specs: [
      "Uniform Hydration",
      "Reduced Cracking and Shrinkage",
      "Enhanced Strength and Durability",
    ],
    features: [
      "Uniform Hydration",
      "Reduced Cracking and Shrinkage",
      "Enhanced Strength and Durability",
      "Accelerated Curing",
      "Long-lasting Performance",
      "Environmentally Friendly",
    ],
    applications: [
      "Accelerated Curing",
      "Versatile Compatibility",
      "Weather Resistance",
      "Environmentally Friendly",
      "Landscaping Projects",
      "Paving Applications",
    ],
    technicalSpecs: {
      "Sizes Available": "6mm, 10mm, 20mm, 40mm",
      "Specific Gravity": "2.6-2.8",
      "Water Absorption": "< 2%",
      "Crushing Value": "< 30%",
      "Impact Value": "< 45%",
      "Flakiness Index": "< 35%",
    },
    image: "/curing-compound.png",
    gallery: [
      "/curing-compound.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    price: "₹1,200 per cubic meter",
    availability: "In Stock",
    category: "Aggregates",
  },
  {
    id: "concrete-hardner",
    title: "Concrete Hardner",
    subtitle: "Base Materials",
    description:
      "Welcome to ASIAN BOND, your premier destination for high-quality concrete hardeners. We are a leading manufacturer and supplier of advanced concrete chemical solutions designed to enhance the strength, durability, and performance of concrete surfaces.",
    fullDescription:
      "At ASIAN BOND, we take pride in offering a comprehensive range of concrete hardeners that are engineered to meet the specific needs of various construction projects. Our concrete hardeners are formulated with state-of-the-art technology and the finest raw materials, ensuring outstanding results in terms of surface hardness and abrasion resistance.",
    specs: [
      "Superior Surface Hardness",
      "Dust Reduction",
      "Enhanced Chemical Resistance",
    ],
    features: [
      "Superior Surface Hardness",
      "Dust Reduction",
      "Enhanced Chemical Resistance",
      "Easy Application and Fast Curing",
      "Versatile Applications",
      "Quick Demoulding",
    ],
    applications: [
      "Accelerated Curing",
      "Versatile Compatibility",
      "Weather Resistance",
      "Environmentally Friendly",
      "Landscaping Projects",
      "Paving Applications",
    ],
    technicalSpecs: {
      "Sizes Available": "6mm, 10mm, 20mm, 40mm",
      "Specific Gravity": "2.6-2.8",
      "Water Absorption": "< 2%",
      "Crushing Value": "< 30%",
      "Impact Value": "< 45%",
      "Flakiness Index": "< 35%",
    },
    image: "/concrete.jpg",
    gallery: [
      "/concrete.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    price: "₹1,200 per cubic meter",
    availability: "In Stock",
    category: "Aggregates",
  },
  {
    id: "asian-bond-tile-adhesive",
    title: "Asian Bond Tile Adhesive",
    subtitle: "Base Materials",
    description:
      "ASIAN BOND Tile Adhesive is a blended modified polymer cement base adhesive which improves the strength and is best for fixing tiles on wall and floors in interiors & exteriors.",
    fullDescription:
      "Our Tile Adhesive has excellent adhesion and slip resistance. Building a structure takes time and effort, and your choice of Tile Adhesive could easily make or break your project. ASIAN BOND Tile Adhesive is durable, super strong and resistant to all weather conditions.",
    specs: ["Mixing", "Dust Reduction", "Enhanced Chemical Resistance"],
    features: [
      "Superior Surface Hardness",
      "Dust Reduction",
      "Enhanced Chemical Resistance",
      "Easy Application and Fast Curing",
      "Versatile Applications",
      "Quick Demoulding",
    ],
    applications: ["CERAMIC TILES", "MARBLES", "GRANITE", "AAC BLOCKS"],
    technicalSpecs: {
      "Sizes Available": "4.5-5.0 Sq m./ 20 Kg Bag at 3 mm thickness",
      "Specific Gravity": "2.0-2.5 Sq m./ 20 Kg Bag at 6 mm thickness",
      "Water Absorption": "< 2%",
      "Crushing Value": "< 30%",
      "Impact Value": "< 45%",
      "Flakiness Index": "< 35%",
    },
    image: "/tile-adhesive.png",
    gallery: [
      "/tile-adhesive.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    price: "₹1,200 per cubic meter",
    availability: "In Stock",
    category: "Aggregates",
  },
  {
    id: "asian-bond-grout-powder",
    title: "Asian Bond Grout Powder",
    subtitle: "Base Materials",
    description:
      "ASIAN BOND Grout Powder is a polymer modified cement joint filler, used in both interior & exterior joints.",
    fullDescription:
      "Grout Powder increases the quality of construction and adds value to a structure. It is suitable for grouting ceramic tiles, vitrified tiles, marble, granites, mosaics and natural stone in walls and floors.",
    specs: ["Top Quality", "Easy to Apply", "Most Economical"],
    features: [
      "Top Quality",
      "Easy to Apply",
      "Most Economical",
      "No Cracking or Shrinkage",
      "Durable & Long Lasting",
      "Water Resistant",
    ],
    applications: ["CERAMIC TILES", "MARBLES", "GRANITE", "AAC BLOCKS"],
    technicalSpecs: {
      "Sizes Available": "4.5-5.0 Sq m./ 20 Kg Bag at 3 mm thickness",
      "Specific Gravity": "2.0-2.5 Sq m./ 20 Kg Bag at 6 mm thickness",
      "Water Absorption": "< 2%",
      "Crushing Value": "< 30%",
      "Impact Value": "< 45%",
      "Flakiness Index": "< 35%",
    },
    image: "/grout-powder.png",
    gallery: [
      "/grout-powder.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    price: "₹1,200 per cubic meter",
    availability: "In Stock",
    category: "Aggregates",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getAllProducts(): Product[] {
  return products;
}

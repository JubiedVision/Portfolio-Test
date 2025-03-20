export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: "uiux" | "ai" | "vibe";
  categoryLabel: string;
  link: string;
  iconType: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-commerce Dashboard Redesign",
    description: "A complete redesign of a dashboard interface with improved usability and conversion metrics.",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    link: "#",
    iconType: "🎨",
  },
  {
    id: 2,
    title: "Neural Fashion Recommender",
    description: "AI-powered clothing recommendation system with personalized style matching algorithm.",
    category: "ai",
    categoryLabel: "AI Technology",
    link: "#",
    iconType: "🧠",
  },
  {
    id: 3,
    title: "CodeCompanion App",
    description: "An intelligent code generation platform that builds complete web applications from simple text descriptions.",
    category: "vibe",
    categoryLabel: "Vibe Coding",
    link: "#",
    iconType: "🤖",
  },
  {
    id: 4,
    title: "Mobile Banking App Redesign",
    description: "User-centered redesign of a banking application with focus on accessibility and simplified user flows.",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    link: "#",
    iconType: "📱",
  },
  {
    id: 5,
    title: "Travel Booking Platform UI",
    description: "A modern, intuitive interface for a travel platform with a focus on visual hierarchy and user engagement.",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    link: "#",
    iconType: "✈️",
  },
  {
    id: 6,
    title: "Health Tracker Dashboard",
    description: "Clean, data-focused interface design for a health monitoring application with customizable widgets.",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    link: "#",
    iconType: "💪",
  },
  {
    id: 7,
    title: "Conversational AI Assistant",
    description: "Natural language processing system designed to handle complex customer service inquiries with human-like responses.",
    category: "ai",
    categoryLabel: "AI Technology",
    link: "#",
    iconType: "🤖",
  },
  {
    id: 8,
    title: "Computer Vision Product Scanner",
    description: "AI system that identifies products in real-time through smartphone cameras to provide instant information.",
    category: "ai",
    categoryLabel: "AI Technology",
    link: "#",
    iconType: "👁️",
  },
  {
    id: 9,
    title: "Predictive Market Analysis Tool",
    description: "Machine learning algorithm that forecasts market trends with 87% accuracy based on historical data patterns.",
    category: "ai",
    categoryLabel: "AI Technology",
    link: "#",
    iconType: "📈",
  },
  {
    id: 10,
    title: "Interactive Music Visualizer",
    description: "Audio-reactive visual experience that transforms music into stunning real-time animations and patterns.",
    category: "vibe",
    categoryLabel: "Vibe Coding",
    link: "#",
    iconType: "🎵",
  },
  {
    id: 11,
    title: "Generative Art Installation",
    description: "Algorithm-based artwork that creates unique visual compositions responding to environmental inputs.",
    category: "vibe",
    categoryLabel: "Vibe Coding",
    link: "#",
    iconType: "🎭",
  },
  {
    id: 12,
    title: "Mood-Based Smart Home System",
    description: "IoT platform that adjusts lighting, music, and temperature based on detected user mood and preferences.",
    category: "vibe",
    categoryLabel: "Vibe Coding",
    link: "#",
    iconType: "🏠",
  },
];
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
    title: "Harmonic Visualizer Experience",
    description: "Interactive audio visualization that creates unique visual patterns based on music.",
    category: "vibe",
    categoryLabel: "Vibe Coding",
    link: "#",
    iconType: "🎵",
  },
];
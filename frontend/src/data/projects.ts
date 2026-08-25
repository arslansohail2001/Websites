export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
  problemStatement?: string;
  solution?: string;
}

export const projects: Project[] = [
  {
    id: "opaal",
    title: "Opaal",
    description: "A productivity and screen-time management app that helps users reduce distractions and improve focus by tracking app usage and blocking distractions.",
    category: "PRODUCTIVITY APP",
    image: "/images/opaal_app_mockup.jpg",
    problemStatement: "Digital distractions and excessive screen time are heavily impacting daily productivity and mental health for millions of mobile users.",
    solution: "Opaal introduces a sleek, gamified approach to screen-time management. By allowing users to set strict limits on addictive apps and rewarding them with 'focus scores', Opaal trains the brain to minimize digital dependency while providing detailed analytics on usage trends."
  },
  {
    id: "callify",
    title: "Callify",
    description: "An AI-powered calling app that automates voice interactions for customer support, scheduling, and inquiries using smart voice agents.",
    category: "AI / COMMUNICATION",
    image: "/images/callify_app_mockup.jpg",
    problemStatement: "Small businesses struggle to manage high volumes of inbound calls, leading to missed opportunities, poor customer service, and expensive manual support costs.",
    solution: "Callify leverages state-of-the-art conversational AI to deploy autonomous voice agents. These agents can handle complex customer inquiries, schedule appointments directly into calendars, and provide real-time transcriptions, allowing businesses to scale their support effortlessly."
  },
  {
    id: "gymfit",
    title: "Gymfit",
    description: "A fitness tracking app for gym enthusiasts to monitor workouts with structured plans, exercise tracking, and performance insights.",
    category: "HEALTH & FITNESS",
    image: "/images/gymfit_app_mockup.jpg",
    problemStatement: "Fitness enthusiasts often struggle to maintain structured workout routines and lack the tools to effectively visualize their progressive overload and muscle recovery.",
    solution: "Gymfit provides an intuitive, high-energy interface for logging workouts. It features unique muscle heatmaps to show recovery status, structured training plans, and dynamic performance rings to ensure users stay motivated and on track with their fitness goals."
  },
  {
    id: "afl-chat",
    title: "AFL Chat Agent Pipeline",
    description: "An advanced AI agent pipeline using a custom Langchain LLM extractor and intelligent database routing to parse complex queries.",
    category: "AI AGENT ARCHITECTURE",
    image: "/images/afl_chat_mockup.jpg",
    problemStatement: "Enterprise databases are notoriously difficult for non-technical users to query, often requiring complex SQL knowledge or manual data extraction by data teams.",
    solution: "The AFL Chat Agent Pipeline introduces a natural language interface for complex databases. Using a custom Langchain extractor, it parses natural human intent, routes the query to the appropriate database node, and returns synthesized, actionable insights in milliseconds."
  },
  {
    id: "zameen-star",
    title: "Zameen Star Real Estate AI",
    description: "An interactive voice phone call interface featuring live browser speech synthesis and a sophisticated LangGraph multi-agent backend.",
    category: "CONVERSATIONAL AI",
    image: "/images/zameen_star_mockup.jpg",
    problemStatement: "Real estate browsing can be overwhelming, and potential buyers often have specific questions that require immediate, personalized answers rather than static listings.",
    solution: "Zameen Star acts as an elite, always-on real estate concierge. Utilizing a multi-agent LangGraph architecture, it guides users through luxury property listings via live, responsive voice interactions, answering bespoke questions about amenities and scheduling viewings dynamically."
  }
];

export const projectsData = [ 
  {
    id: 1,
    title: "PromptPersona",
    category: "Fullstack",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    date: "Jan 2024",
    duration: "20 Days",
    description: "An AI-powered simulation engine where users interact with customizable AI personas...",
    icon: "P",
    image: "https://i.postimg.cc/d3GmWxpx/Screenshot-2025-07-23-022731.png",
    link: "https://promptpersona.vercel.app",
    challenges: [
      "Maintaining consistent persona behavior with varying AI responses",
      "Managing real-time updates with sockets and Redux",
      "Designing intuitive persona creation UX"
    ],
    outcomes: [
      "Built a scalable persona engine with dynamic prompt injection",
      "Enabled real-time chat with persistent history",
      "Improved user retention with favorites and category filters"
    ],
    github: "https://github.com/vaishnavi-ra-ut/PromptPersona-Frontend"
  },
  {
  id: 2,
  title: "SupplySaathi",
  category: "Fullstack",
  tags: ["React", "Node.js", "MongoDB", "Socket.io", "TailwindCSS"],
  date: "Jul 2024",
  duration: "18 Days",
  description: "A real-time inventory and order management system connecting street vendors with nearby suppliers. Features include live stock updates, group ordering, and automated alerts for low stock or price drops.",
  icon: "S",
  image: "https://i.postimg.cc/7ZByZKBn/Screenshot-2025-07-30-002703.png",
  link: "https://supplysaathi.vercel.app",
  challenges: [
    "Handling real-time stock sync between multiple suppliers and vendors",
    "Designing group-order logic for partial fulfillment and fallback",
    "Ensuring smooth UX for low-tech users (voice support, simple UI)"
  ],
  outcomes: [
    "Enabled real-time inventory updates with Socket.IO and REST fallback",
    "Implemented group-ordering flow with timeout and partial fulfillment",
    "Reduced vendor supply gaps by 40% through smart alerts and preferences"
  ],
  github: "https://github.com/vaishnavi-ra-ut/SupplySaathi"
  },
  {
    id: 3,
    title: "Book&Watch",
    category: "Fullstack",
    tags: ["React", "Node.js", "MongoDB", "TMDB API"],
    date: "Oct 2023",
    duration: "1 month",
    description: "An online platform for booking movie tickets with real-time seat selection...",
    icon: "B",
    image: "https://i.postimg.cc/fThM0BZq/Screenshot-2025-07-24-231345.png",
    link: "https://moviebooking.vercel.app",
    challenges: [
      "Building an intuitive seat selection and availability system",
      "Designing role-based dashboards for users and admins",
      "Ensuring booking accuracy in concurrent environments"
    ],
    outcomes: [
      "Created dynamic seat and show management with MongoDB",
      "Enabled secure login, booking confirmation, and filters",
      "Implemented full-stack movie CRUD with admin control"
    ],
    github: "https://github.com/vaishnavi-ra-ut/BookAndWatch-Backend"
  },
  {
    id: 4,
    title: "NetflixGPT",
    category: "Frontend",
    tags: ["React", "Gemini AI", "TMDB API", "Redux"],
    date: "Mar 2024",
    duration: "15 Days",
    description: "{Password - netflix123} An AI-enhanced movie app that recommends content using generative AI",
    icon: "N",
    image: "https://i.postimg.cc/wjf7Lk38/Screenshot-2025-07-23-012445.png",
    link: "https://net-flix-nu.vercel.app/",
    challenges: [
      "Integrating GPT with movie data filtering logic",
      "Handling natural language queries with limited context",
      "Designing a modern Netflix-style UI layout"
    ],
    outcomes: [
      "Enabled AI-driven movie recommendations using OpenAI + TMDB",
      "Created login-based movie dashboard and genre filters",
      "Blended AI UX into a familiar streaming UI"
    ],
    github: "https://github.com/vaishnavi-ra-ut/Netfilx-Project"
  },
  {
    id: 5,
    title: "DevVerse",
    category: "Fullstack",
    tags: ["React.js", "AWS", "Node.js", "Redux"],
    date: "Feb 2024",
    duration: "1 month",
    description: "A platform for developers to showcase projects, connect, and get feedback...",
    icon: "D",
    image: "/images/devverse.png",
    link: "https://devverse.vercel.app",
    challenges: [
      "Structuring Firestore data for scalability",
      "Implementing upvotes and real-time updates efficiently",
      "Creating a modular, clean UI across pages"
    ],
    outcomes: [
      "Built a responsive, community-driven platform",
      "Integrated Markdown-rich blog editor with preview",
      "Achieved smooth real-time updates using Firestore listeners"
    ],
    github: "https://github.com/vaishnavi-ra-ut/DevTinder-UI"
  },
  {
    id: 6,
    title: "WeatherBeats",
    category: "Fullstack",
    tags: ["React", "Spotify API", "Weather API"],
    date: "Dec 2023",
    duration: "1 month",
    description: "A weather-synced music player that generates playlists based on current weather...",
    icon: "W",
    image: "/images/weatherbeats.png",
    link: "https://weatherbeats.vercel.app",
    challenges: [
      "Mapping abstract weather moods to playlist types",
      "Synchronizing weather and Spotify APIs seamlessly",
      "Handling rate limits and user auth with Spotify API"
    ],
    outcomes: [
      "Launched a responsive UI that merges weather + music",
      "Created curated playlist mapping logic for moods",
      "Achieved dynamic weather detection and real-time updates"
    ],
    github: "https://github.com/vaishnavi-ra-ut/WeatherBeats"
  },
  {
    id: 7,
    title: "FoodDelivery App",
    category: "Frontend",
    tags: ["React", "Node.js", "MongoDB"],
    date: "Nov 2023",
    duration: "20 Days",
    description: "A full-stack food ordering platform featuring real-time cart updates...",
    icon: "F",
    image: "/images/fooddelivery.png",
    link: "https://fooddelivery.vercel.app",
    challenges: [
      "Implementing cart logic and persistent user sessions",
      "Integrating secure Stripe payments and tracking order flow",
      "Building admin dashboard with role-based access"
    ],
    outcomes: [
      "Developed a production-ready e-commerce backend with payments",
      "Built a responsive multi-role frontend using Redux",
      "Handled authentication, order history, and admin workflows"
    ],
    github: "https://github.com/vaishnavi-ra-ut/Food-app-react"
  }
];

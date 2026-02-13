import { Project, Service } from './types';
import { IMAGES } from './images';

// =================================================================================
// 📝 WEBSITE CONTENT CONFIGURATION
// =================================================================================
// Edit this file to change text, projects, and details on your website.
// The website will update automatically when you save this file.

// --- 1. TEAM MEMBERS ---
export const TEAM = [
    {
        name: "H.E. Ahmed S. AlDhaheri",
        role: "Chairman",
        image: IMAGES.TEAM.CHAIRMAN,
    },
    {
        name: "Eng. Khaled AlHarmoudi",
        role: "Partner",
        image: IMAGES.TEAM.PARTNER,
    },
    {
        name: "Eng. Magdy S. Metry",
        role: "General Manager",
        image: IMAGES.TEAM.GM,
    }
];

// --- 1.1 BRANCHES ---
export const BRANCHES = [
    {
        id: "abu-dhabi",
        city: "ABU DHABI BRANCH",
        details: [
            { label: "P.O. BOX", value: "45080" },
            { label: "Tel", value: "+971 26443200" },
            { label: "Fax", value: "+971 26443321" },
            { label: "Email", value: "dec2000@emirates.net.ae" }
        ]
    },
    {
        id: "dubai",
        city: "DUBAI BRANCH",
        details: [
            { label: "P.O. BOX", value: "33986" },
            { label: "Tel", value: "+971 43360848" },
            { label: "Fax", value: "+971 43345518" },
            { label: "Email", value: "dec2000@emirates.net.ae" }
        ]
    },
    {
        id: "fujairah",
        city: "FUJAIRAH BRANCH",
        details: [
            { label: "P.O. BOX", value: "33986" },
            { label: "Tel", value: "+971 556527406" },
            { label: "Fax", value: "+971 933445518" },
            { label: "Email", value: "dec2000@emirates.net.ae" }
        ]
    },
    {
        id: "al-ain",
        city: "AL AIN BRANCH",
        details: [
            { label: "P.O. BOX", value: "17271" },
            { label: "Tel", value: "+971 37657717" },
            { label: "Fax", value: "+971 37657559" },
            { label: "Email", value: "dec2000@emirates.net.ae" }
        ]
    },
    {
        id: "cairo",
        city: "CAIRO BRANCH",
        details: [
            { label: "P.O. BOX", value: "24, Fawzy, el Motaiee st." },
            { label: "Tel", value: "+20224153765" },
            // Fax is missing in source image for Cairo
            { label: "Email", value: "decegypt@gmail.com" }
        ]
    }
];

// --- 2. FEATURED PROJECTS (Main Slider) ---
// TO ADD A NEW PROJECT: Copy the block below and paste it inside the brackets [ ... ]
/*
  {
    id: 5, // Use a unique number
    title: "New Project Title",
    location: "City, Country",
    year: "2024",
    category: "Commercial",
    description: "Short description of the project.",
    image: "/images/new-project.jpg",
    gallery: ["/images/gallery1.jpg", "/images/gallery2.jpg"],
    stats: [
      { label: "Area", value: "10,000 sqm" },
      { label: "Floors", value: "15" }
    ]
  },
*/
export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "The Zenith Tower",
        location: "Dubai, UAE",
        year: "2018",
        category: "Commercial",
        description: "A 60-story mixed-use skyscraper defining the new downtown skyline with sustainable glass facade technology.",
        image: "https://picsum.photos/1920/1080?random=1",
        gallery: [
            "https://picsum.photos/800/600?random=11",
            "https://picsum.photos/800/600?random=12",
            "https://picsum.photos/800/600?random=13"
        ],
        stats: [
            { label: "Height", value: "340m" },
            { label: "Floors", value: "60" },
            { label: "Area", value: "120,000 sqm" }
        ]
    },
    {
        id: 2,
        title: "Al-Rayyan Cultural Center",
        location: "Doha, Qatar",
        year: "2020",
        category: "Cultural",
        description: "Integrating traditional Islamic geometric patterns with modern parametric design principles to create a gathering space for the future.",
        image: "https://picsum.photos/1920/1080?random=2",
        gallery: [
            "https://picsum.photos/800/600?random=21",
            "https://picsum.photos/800/600?random=22"
        ],
        stats: [
            { label: "Capacity", value: "5,000" },
            { label: "Site", value: "Corniche" }
        ]
    },
    {
        id: 3,
        title: "Oasis Villa Complex",
        location: "Riyadh, KSA",
        year: "2022",
        category: "Residential",
        description: "A luxury private community emphasizing privacy, shade, and passive cooling techniques, redefined for the modern family.",
        image: "https://picsum.photos/1920/1080?random=3",
        gallery: [
            "https://picsum.photos/800/600?random=31",
            "https://picsum.photos/800/600?random=32",
            "https://picsum.photos/800/600?random=33"
        ],
        stats: [
            { label: "Units", value: "45" },
            { label: "Sustainability", value: "LEED Gold" }
        ]
    },
    {
        id: 4,
        title: "Future Museum",
        location: "Abu Dhabi, UAE",
        year: "2024",
        category: "Public",
        description: "Our latest flagship project featuring a gravity-defying cantilever structure that pushes the boundaries of structural engineering.",
        image: "https://picsum.photos/1920/1080?random=4",
        gallery: [
            "https://picsum.photos/800/600?random=41",
            "https://picsum.photos/800/600?random=42"
        ],
        stats: [
            { label: "Span", value: "85m" },
            { label: "Steel", value: "12,000 tons" }
        ]
    }
];

// --- 3. SERVICES ---
// TO ADD A NEW SERVICE: Copy the block below and paste inside [ ... ]
/*
  {
    id: "unique-id",
    title: "New Service",
    description: "Service description.",
    icon: "ruler", // Options: ruler, frame, zap, hardhat
    image: "/images/service.jpg",
    details: [
      { title: "Sub-Section", items: ["Item 1", "Item 2"] }
    ]
  },
*/
export const SERVICES: Service[] = [
    {
        id: "arch",
        title: "Architectural Services",
        description: "From conceptual sketches to full realization, we define spaces that inspire.",
        icon: "ruler",
        image: IMAGES.SERVICES.ARCH,
        details: [
            {
                title: "Pre-Design Services",
                items: [
                    "Site Survey",
                    "Confer with Authority",
                    "Design and Plan Grids",
                    "Building Design Codes",
                    "Design Development",
                    "Master Planning",
                    "Computer Animation & Imaging"
                ]
            },
            {
                title: "Design Development",
                items: [
                    "Concept Design",
                    "Preliminary Design",
                    "Detailed Design",
                    "Preparation of Working & Technical Drawings",
                    "Specifications",
                    "Contracts Documents"
                ]
            }
        ]
    },
    {
        id: "struct",
        title: "Structural Services",
        description: "Ensuring stability, safety, and efficiency in every framework we engineer.",
        icon: "frame",
        image: IMAGES.SERVICES.STRUCT,
        details: [
            {
                items: [
                    "Design Codes",
                    "Codes of Practice",
                    "Design Loads",
                    "Load Combinations",
                    "Material Properties",
                    "Concrete Design",
                    "Reinforcement"
                ]
            }
        ]
    },
    {
        id: "mep",
        title: "Electrical & Mechanical",
        description: "Integrated systems for intelligent, living, and breathing buildings.",
        icon: "zap",
        image: IMAGES.SERVICES.MEP,
        details: [
            {
                title: "Electrical Services",
                items: [
                    "Low Voltage System",
                    "Power, Lighting & Distribution",
                    "Earthing Network",
                    "Telephone and CCTV",
                    "MATV System",
                    "Security System"
                ]
            },
            {
                title: "Mechanical Services",
                items: [
                    "HVAC Services",
                    "Plumbing Services",
                    "Drainage Services",
                    "Fire Fighting Services"
                ]
            }
        ]
    },
    {
        id: "manage",
        title: "Construction Management",
        description: "End-to-end oversight ensuring projects are delivered on time and on vision.",
        icon: "hardhat",
        image: IMAGES.SERVICES.MANAGE,
        details: [
            {
                items: [
                    "Construction management services for public and private sector clients.",
                    "Experienced management of challenging projects throughout U.A.E. and Middle East."
                ]
            }
        ]
    }
];

// --- 4. MAJOR PROJECT REFERENCES ---
// TO ADD A NEW CATEGORY: Copy the block below and paste inside [ ... ]
/*
  {
    id: "06",
    title: "NEW CATEGORY NAME",
    items: ["Project Name 1", "Project Name 2"],
    image: "/images/category-image.jpg"
  },
*/
export const MAJOR_PROJECTS_CATEGORIES = [
    {
        id: "01",
        title: "RELIGIOUS BUILDINGS",
        items: ["Mosque Sh Sultan Bin Zayed Al Nahyan"],
        image: IMAGES.MAJOR_PROJECTS.RELIGIOUS
    },
    {
        id: "02",
        title: "GOVERNMENT AND OFFICE BUILDINGS",
        items: [
            "Ministry of Justice and Federal Courts Complex",
            "Emirates Identity Authority & Services Point Buildings",
            "Criminal Investigation Department",
            "Halcon Headquarter Building – Abu-Dhabi, U.A.E.",
            "General Secretariat of the Executive Council",
            "Higher College of Technology – DIBBA AL Fujairah"
        ],
        image: IMAGES.MAJOR_PROJECTS.GOVERNMENT
    },
    {
        id: "03",
        title: "SERVICE AND INDUSTRIAL PROJECTS",
        items: [
            "Baynoona District Cooling Plant",
            "Central Market Cooling Plant",
            "Pearl Island Cooling Plant",
            "Khalifa City A Cooling Plant"
        ],
        image: IMAGES.MAJOR_PROJECTS.INDUSTRIAL
    },
    {
        id: "04",
        title: "HIGH-RISE BUILDINGS",
        items: [
            "Etihad Plaza, Al Raha beach project",
            "Reem Tower, Al Reem Island",
            "Residential Building",
            "Qatar Hotel"
        ],
        image: IMAGES.MAJOR_PROJECTS.HIGH_RISE
    },
    {
        id: "05",
        title: "RESIDENTIAL COMPOUND AND PALACES",
        items: [
            "Residential Compound",
            "Al Bahar Palace",
            "Luxury Villas"
        ],
        image: IMAGES.MAJOR_PROJECTS.RESIDENTIAL
    }
];

// --- 5. GOVERNMENT & OFFICE BUILDINGS GALLERY ---
// TO ADD A NEW BUILDING: Copy the block below and paste inside [ ... ]
/*
  {
    title: "Building Name",
    image: "/images/building.jpg"
  },
*/
export const GOVERNMENT_PROJECTS_GALLERY = [
    {
        title: "General Secretariat of the Executive Council",
        image: IMAGES.GOVERNMENT_GALLERY.SEC_COUNCIL
    },
    {
        title: "Ministry of Justice and Federal Courts Complex",
        image: IMAGES.GOVERNMENT_GALLERY.JUSTICE
    },
    {
        title: "Criminal Investigation Department",
        image: IMAGES.GOVERNMENT_GALLERY.CID
    },
    {
        title: "Emirates Identity Authority Service Point Building",
        image: IMAGES.GOVERNMENT_GALLERY.EMIRATES_ID
    },
    {
        title: "Higher College of Technology- DIBBA AL Fujairah",
        image: IMAGES.GOVERNMENT_GALLERY.COLLEGE
    },
    {
        title: "Halcon Headquarter Building – Abu-Dhabi, U.A.E.",
        image: IMAGES.GOVERNMENT_GALLERY.HALCON
    }
];

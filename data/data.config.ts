import {Image, Reason} from "./types";

export const Reasons: Reason[] = [
    {
        number: "01",
        title: "Professionalism",
        description: "I have 5+ years of experience in interior design and lead projects from visualization to the final delivered object.",
    },
    {
        number: "02",
        title: "Innovations and trends",
        description: "I constantly improve my skills and take advanced training courses, follow new trends and implement them in my work.",
    },
    {
        number: "03",
        title: "Individual approach",
        description: "I take all the wishes of clients and their style, combining it with my experience to come to the best solution together.",
    },
    {
        number: "04",
        title: "Quality and details",
        description: "In my work, the most important thing is quality, so I use the best materials from different price possibilities.",
    },
];


export const ProjectData = [
    {
        id: "1",
        imageSrc: "/images/projects/p1/p1-1.jpg",
        description: "Make a large kitchen with a seating area, large table for 8-10 people, and a guest bathroom. On the attic floor, make a bedroom and a bathroom with a separate master bathroom"
    },
    {
        id: "2",
        imageSrc: "/images/projects/p2/p2-1.jpg",
        description: "Remove all the walls, make the kitchen-living room as comfortable as possible, a small separate bedroom area. Bathroom should have a shower, a large sink, a toilet and a bidet"
    },
    {
        id: "3",
        imageSrc: "/images/projects/p3/p3-3.jpg",
        description: "In this apartments should be dressing room, separate toilet and bathroom, two small living room, and big bedroom"
    },
    {
        id: "4",
        imageSrc: "/images/projects/p4/p4-11.jpg",
        description: "In this apartments should be large dressing room, connected bathroom with big bath, small bedroom without cupboard"
    },
    {
        id: "5",
        imageSrc: "/images/projects/p5/p5-60.jpeg",
        description: "Combining two different apartments into one space,  the first apartment is a studio 34.2 sq.m., the second apartment is 51 sq.m. Main tasks: In this apartments should be a small bedroom, a living room with a work area, and a kitchen-studio with an electric fireplace, the bathroom should have a square bath"
    },
    {
        id: "6",
        imageSrc: "/images/projects/p6/p6-6.jpg",
        description: "Design a cozy living room with a modern minimalist style, featuring neutral colors, sleek furniture, and plenty of natural light"
    },
    {
        id: "7",
        imageSrc: "/images/projects/p7/p7-9.jpg",
        description:"Small bedroom with a bed for a childA studio kitchen with a rest area and a workplaceChildren's room for a boy, and a dressing room"
    },
];

export const BannerImages: Image[][] = [
    [
        { src: "/images/projects/p1/p1-15.jpg", alt: "Image 1" },
        { src: "/images/projects/p6/p6-3.jpg", alt: "Image 3" },
        { src: "/images/projects/p2/p2-2.jpg", alt: "Image 4" },
    ],
    [
        { src: "/images/projects/p4/p4-11.jpg", alt: "Image 2" },
        { src: "/images/projects/p2/p2-3.jpg", alt: "Image 5" },
        { src: "/images/projects/p7/p7-3.jpg", alt: "Image 6" },
    ],
    [
        { src: "/images/projects/p1/p1-1.jpg", alt: "Image 7" },
        { src: "/images/projects/p4/p4-2.jpg", alt: "Image 8" },
        { src: "/images/projects/p2/p2-1.jpg", alt: "Image 9" },
    ],
    [
        { src: "/images/projects/p1/p1-9.jpg", alt: "Image 10" },
        { src: "/images/projects/p3/p3-3.jpg", alt: "Image 11" },
        { src: "/images/projects/p5/p5-5.jpg", alt: "Image 12" },
    ],
    [
        { src: "/images/projects/p1/p1-19.jpg", alt: "Image 7" },
        { src: "/images/projects/p4/p4-3.jpg", alt: "Image 8" },
        { src: "/images/projects/p5/p5-4.jpg", alt: "Image 9" },
    ],
];

export const NavItems = [
    { title: 'Home', href: '/' },
    { title: 'Projects', href: '/projects' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
];


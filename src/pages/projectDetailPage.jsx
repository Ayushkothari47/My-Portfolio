import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShootingStars from "../components/ShootingStars";
import Navbar from "../components/Navbar";
import TechStackSection from "../components/TechStack";

import heroBanner_img from "../assets/bg.jpg";

// 🔹 AUTO IMAGE GENERATOR (12 images)
const getProjectImages = (folderName, totalImages) => {
    return Array.from({ length: totalImages }, (_, i) =>
        `/projects/${folderName}/${i + 1}.png`
    );
};

function ProjectDetailPage() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const projectDetails = [
        {
            slug: "aarna-enterprises",
            title: "Aarna Enterprises",
            category: "Web Development Project",
            images: getProjectImages("aarnaEnterprises", 12),
            overview:
                "A custom-built, responsive website developed for a travel business in Rishikesh to enhance online visibility and streamline lead generation, tailored to meet specific client requirements.",
            problem:
                "The client needed a comprehensive digital solution to streamline booking management and establish a strong online presence without relying on manual communication. Furthermore, they required a feature that allows customers to upload photos of visited places, with an admin-controlled moderation system to review and approve content before it is displayed publicly.",
            tech: {
                development: ["React.js", "Node.js"],
                database: ["MongoDB"],
                services: ["Brevo", "Cloudinary"],
                deployment: ["Github", "Render", "Vercel"],
            },
            features: [
                "Fully Responsive UI across all devices",
                "Custom CMS for dynamic content management",
                "Automated email notification system",
                "SEO-optimized website structure",
                "Admin-controlled gallery management system",
                "Optimized performance for fast loading",
            ],
            challenges: [
                "Ensuring consistent performance across devices and network conditions",
                "Optimizing asset loading and reducing initial load time",
                "Building a scalable and responsive UI for multiple screen sizes",
            ],
            solution: [
                "Implemented Tailwind CSS to build a fully responsive UI across all devices.",
                "Optimized images and media assets for faster loading.",
                "Developed a custom CMS to manage content and gallery uploads efficiently.",
                "Integrated automated email service for user notifications.",
                "Ensured smooth client-side interactions and minimized re-renders for performance.",
            ],
            learnings: [
                "Gained hands-on experience in real-world client project management.",
                "Enhanced frontend design skills using Tailwind CSS and responsive layouts.",
                "Learned to handle multiple APIs efficiently with low latency.",
                "Implemented robust authentication and user authorization.",
                "Built experience with content management workflows and automated email services.",
            ],
        },
    ];

    const project = projectDetails.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <button
                    onClick={() => navigate("/projects")}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-full text-white font-medium shadow-lg"
                >
                    Go Back to Projects
                </button>
            </div>
        );
    }

    return (
        <div
            className="relative bg-cover bg-center min-h-screen font-sans selection:bg-purple-500 selection:text-white"
            style={{
                backgroundImage: `url(${heroBanner_img})`,
                backgroundAttachment: "fixed",
            }}
        >
            <ShootingStars />

            <div className="relative z-10 flex flex-col min-h-screen ">
                <Navbar />

                <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-16 w-full">
                    {/* Header Section */}
                    <header className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg mb-4">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 font-medium tracking-widest uppercase">
                            {project.category}
                        </p>
                    </header>

                    {/* ✅ UPGRADED IMAGE CAROUSEL */}
                    <div className="mb-20">
                        <ImageCarousel images={project.images} />
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-8">
                            <GlassCard title="Overview">
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {project.overview}
                                </p>
                            </GlassCard>
                            
                            <GlassCard title="Problem Statement">
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {project.problem}
                                </p>
                            </GlassCard>
                        </div>

                        <div className="flex flex-col gap-8">
                            <GlassCard title="Tech Stack">
                                <div className="-mt-4">
                                    <TechStackSection tech={project.tech} />
                                </div>
                            </GlassCard>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <GlassCard title="Key Features">
                            <List items={project.features} />
                        </GlassCard>

                        <GlassCard title="Challenges Faced">
                            <List items={project.challenges} />
                        </GlassCard>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8">
                        <GlassCard title="The Solution">
                            <List items={project.solution} />
                        </GlassCard>

                        <GlassCard title="Key Learnings">
                            <List items={project.learnings} />
                        </GlassCard>
                    </div>
                </main>
            </div>
        </div>
    );
}

// 🔹 UPGRADED: 3D Coverflow Image Carousel
const ImageCarousel = ({ images }) => {
    const [current, setCurrent] = useState(0);

    // Auto-play functionality (Optional: remove useEffect if you only want manual clicking)
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(timer);
    }, [current]);

    if (!images || images.length === 0) return null;

    const length = images.length;

    const prevSlide = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    const nextSlide = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    const goToSlide = (index) => setCurrent(index);

    const getPositionClass = (index) => {
        if (index === current) {
            return "z-30 scale-100 opacity-100 translate-x-0 blur-none";
        }
        if (index === (current - 1 + length) % length) {
            return "z-20 scale-75 opacity-40 -translate-x-[60%] md:-translate-x-[40%] blur-[2px] cursor-pointer hover:opacity-70";
        }
        if (index === (current + 1) % length) {
            return "z-20 scale-75 opacity-40 translate-x-[60%] md:translate-x-[40%] blur-[2px] cursor-pointer hover:opacity-70";
        }
        // Hide all other images completely
        return "z-0 scale-50 opacity-0 hidden";
    };

    return (
        <div className="relative w-full flex flex-col items-center">
            {/* Carousel Track */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center overflow-hidden">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                        className={`absolute w-[80%] max-w-[800px] h-full object-contain rounded-2xl shadow-2xl transition-all duration-700 ease-in-out  ${getPositionClass(
                            index
                        )}`}
                    />
                ))}

                {/* Left/Right Controls overlay */}
                <button
                    onClick={prevSlide}
                    className="absolute z-40 left-2 md:left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md transition-all"
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute z-40 right-2 md:right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md transition-all"
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-6 gap-2 flex-wrap max-w-lg">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            i === current ? "w-8 bg-purple-500" : "w-2 bg-gray-500/50 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// 🔹 UPGRADED: Glassmorphism Cards for sections
const GlassCard = ({ title, children }) => (
    <section className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl hover:bg-white/10 transition-colors duration-500 h-full">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6 border-b border-white/10 pb-4">
            {title}
        </h2>
        {children}
    </section>
);

// 🔹 UPGRADED: Custom stylized lists
const List = ({ items }) => (
    <ul className="space-y-4">
        {items.map((item, i) => (
            <li key={i} className="flex items-start text-gray-300 text-lg">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 mr-4 flex-shrink-0 mt-1">
                    ✓
                </span>
                <span className="leading-relaxed">{item}</span>
            </li>
        ))}
    </ul>
);

export default ProjectDetailPage;
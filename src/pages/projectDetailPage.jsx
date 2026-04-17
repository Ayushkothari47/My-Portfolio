import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShootingStars from "../components/ShootingStars";
import Navbar from "../components/Navbar";
import TechStackSection from "../components/TechStack";

import heroBanner_img from "../assets/bg.jpg";
import aarnaThumb from "../assets/aarnaThumb.png";
import smartCityThumb from "../assets/smartCityThumb.png";

// 🔹 ProjectDetailPage Component
function ProjectDetailPage() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const projectDetails = [
        {
            slug: "aarna-enterprises",
            title: "Aarna Enterprises",
            category: "Web Development Project",
            images: [aarnaThumb, smartCityThumb],
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
                "Ensured smooth client-side interactions and minimized re-renders for performance."
                ],

           learnings: [
              "Gained hands-on experience in real-world client project management.",
              "Enhanced frontend design skills using Tailwind CSS and responsive layouts.",
              "Learned to handle multiple APIs efficiently with low latency.",
              "Implemented robust authentication and user authorization.",
              "Built experience with content management workflows and automated email services."
           ]
        },
    ];

    const project = projectDetails.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="text-white text-center mt-20">
                <h1>Project Not Found</h1>
                <button
                    onClick={() => navigate("/projects")}
                    className="mt-4 text-purple-400 underline"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat min-h-screen"
            style={{
                backgroundImage: `url(${heroBanner_img})`,
                backgroundAttachment: "fixed",
            }}
        >
            <ShootingStars />

            <div className="relative z-10">
                <Navbar />

                <div className="text-white px-6 md:px-20 py-12">
                    {/* Header */}
                    <h1 className="text-4xl font-bold">{project.title}</h1>
                    <p className="text-gray-300 mt-2">{project.category}</p>

                    {/* Image Carousel */}
                    <ImageCarousel images={project.images || []} />

                    {/* Sections */}
                    <Section title="Overview" content={project.overview} />
                    <Section title="Problem Statement" content={project.problem} />

                    {/* ✅ New Tech Stack */}
                    <TechStackSection tech={project.tech} />

                    <ListSection title="Features" items={project.features} />
                    <ListSection title="Challenges" items={project.challenges} />
                    <Section title="Solution" content={project.solution} />
                    <Section title="Key Learnings" content={project.learnings} />
                </div>
            </div>
        </div>
    );
}

// 🔹 Image Carousel
const ImageCarousel = ({ images }) => {
    const [current, setCurrent] = useState(0);

    if (!images.length) return null; // ✅ prevent crash

    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    const nextSlide = () =>
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <div className="relative w-full mt-6">
            <img
                src={images[current]}
                alt={`Slide ${current + 1}`}
                className="w-full max-h-[400px] object-contain rounded-lg"
            />

            <button
                onClick={prevSlide}
                className="absolute left-20 top-1/2 -translate-y-1/2 
                w-12 h-12 md:w-16 md:h-16 flex items-center justify-center 
                bg-white/10 backdrop-blur-md border border-purple-400/50 
                text-purple-200 text-2xl rounded-full"
            >
                ◀
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-20 top-1/2 -translate-y-1/2 
                w-12 h-12 md:w-16 md:h-16 flex items-center justify-center 
                bg-white/10 backdrop-blur-md border border-purple-400/50 
                text-purple-200 text-2xl rounded-full"
            >
                ▶
            </button>

            <div className="flex justify-center mt-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 w-2 mx-1 rounded-full ${i === current ? "bg-white" : "bg-gray-500"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

// Sections
const Section = ({ title, content }) => (
    <section className="mt-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {Array.isArray(content) ? (
            <ul className="list-disc ml-6 mt-2 text-gray-300">
                {content.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        ) : (
            <p className="text-gray-300 mt-2">{content}</p>
        )}
    </section>
);

const ListSection = ({ title, items }) => (
    <section className="mt-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </section>
);

export default ProjectDetailPage;
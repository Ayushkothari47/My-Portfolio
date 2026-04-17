import React, { useState } from "react";
import pic from "../assets/pic.jpg";
import { useNavigate } from "react-router-dom";

const tags = ["Web", "Internet of Things (IoT)", "Embedded System", "Tools"];
import dbuuIcon from '../assets/dbuuIcon.jpg'
import ciplIcon from '../assets/cipl.webp'

import aarnaThumb from '../assets/aarnaThumb.png'
import aarnaIcon from '../assets/aarnaIcon.png'
import swathyaNaariThumb from '../assets/swasthya_naariMachine.png'
import smartCityThumb from '../assets/smartCityThumb.png'
import jeevanPrakashThumb from '../assets/jeevanPrakashThumb.png'
import handSanitizerThumb from '../assets/handSanitizer2.png'
import linkAnalyzerThumb from '../assets/linkAnalyzerThumb.png'


const projects = [
    {
        id: 1,
        tag: "Web",
        slug: "aarna-enterprises",
        img: aarnaThumb,
        title: "Aarna Enterprises",
        desc: "A custom-built website for a tour and travel business in Rishikesh",
        associationWith: [aarnaIcon],
    },
    {
        id: 2,
        tag: "Web", 
        slug: "inventory-management",
        img: pic,
        title: "Inventory Management",
        desc: "An Inventory Management Software for managing inventory",
        associationWith: [ciplIcon],
    },
    {
        id: 3,
        tag: "Internet of Things (IoT)",
        slug: "swasthya-naari",
        img: swathyaNaariThumb,
        title: "Swasthya Naari",
        desc: "IoT-based healthcare solution for women's health monitoring using sensors.",
        associationWith: [dbuuIcon],
    },
    {
        id: 4, 
        tag: "Internet of Things (IoT)",
        slug: "smart-city",
        img: smartCityThumb,
        title: "Smart City",
        desc: "IoT system for smart infrastructure and traffic/environment monitoring.",
        associationWith: [dbuuIcon],
    },
    {
        id: 5,
        tag: "Embedded System",
        slug: "jeevan-prakash",
        img: jeevanPrakashThumb,
        title: "Jeevan Prakash",
        desc: "Smart lighting embedded system focused on energy efficiency.",
        associationWith: [dbuuIcon],
    },
    {
        id: 6,
        tag: "Embedded System",
        slug: "automatic-sanitizer",
        img: handSanitizerThumb,
        title: "Automatic Sanitizer Dispenser",
        desc: "Touchless sanitizer system using IR sensors.",
        associationWith: [dbuuIcon],
    },
    {
        id: 7,
        tag: "Embedded System",
        slug: "smart-car-parking",
        img: pic,
        title: "Smart Car Parking",
        desc: "Sensor-based parking system to detect available slots.",
        associationWith: [dbuuIcon],
    },
    {
        id: 8,
        tag: "Tools",
        slug: "link-analyzer",
        img: linkAnalyzerThumb,
        title: "Website Link Analyzer",
        desc: "Tool to detect broken links and improve SEO.",
        associationWith: [pic, pic],
    },
  
];

function Project() {
    const [activeTag, setActiveTag] = useState(tags[0]);
    const navigate = useNavigate();

    const filteredProjects = projects.filter(
        (project) => project.tag === activeTag
    );

    return (
        <div className="text-white px-8 sm:px-12 md:px-24 lg:px-32 py-16 font-sans">

            {/* Heading */}
            <h1 className="text-4xl text-center mb-2">My Projects</h1>
            <p className="text-center text-gray-300 mb-12">
                Explore different categories of my work
            </p>

            {/* Tags */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`px-5 py-2 rounded-md transition 
              ${activeTag === tag
                                ? "bg-[#9933ff] text-white"
                                : "border border-gray-700 hover:bg-white hover:text-black"
                            }
            `}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((card) => (
                    <div
                        key={card.id}
                        className="bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg 
  border border-purple-300/20 rounded-lg overflow-hidden shadow-md hover:scale-105 transition flex flex-col justify-between"
                    >
                        {/* Image */}
                        <img
                            src={card.img}
                            alt={card.title}
                            className="w-full h-56 object-contain object-center"
                        />

                        <div className="p-4 flex flex-col justify-between h-full">
                            {/* Title */}
                            <h3 className="text-lg font-semibold">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mt-2 text-sm line-clamp-2">
                                {card.desc}
                            </p>

                            {/* Bottom Section */}
                            <div className="mt-4 flex items-center justify-between">

                                {/* Explore Button */}
                                <button
                                    onClick={() =>
                                        navigate(`/project/${card.slug}`)
                                    }
                                    className="bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg 
  border border-purple-300/20 text-[#ffffff] hover:text-purple-500 px-5 py-2 hover:scale-105  rounded-md transition text-md"
                                >
                                    Explore
                                </button>

                                {/* Association Icons */}
                                <div className="flex items-center gap-3 mt-3">
                                    <span className="text-sm text-gray-400 whitespace-nowrap">
                                        Associated with:
                                    </span>

                                    <div className="flex items-center">
                                        {card.associationWith.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt="association"
                                                title={`Association ${index + 1}`}
                                                className="w-9 h-9 rounded-full border-2 border-[#1a1a1a] object-cover -ml-3 first:ml-0 hover:scale-110 transition"
                                            />
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/nodeJs.png";
import mongoIcon from "../assets/mongo.png";
import renderIcon from "../assets/renderIcon.png";
import bervoIcon from "../assets/bervoIcon.png"
import cloudinaryIcon from "../assets/cloudinaryIcon.png"
import vercel from "../assets/vercelIcon.webp"
import githubIcon from "../assets/gitIcon.png"

const techIcons = {
    "React.js": reactIcon,
    "Node.js": nodeIcon,
    "MongoDB": mongoIcon,
    "Render": renderIcon,
    "Brevo": bervoIcon,
    "Cloudinary": cloudinaryIcon,
    "Vercel": vercel,
    "Github": githubIcon
};

const TechStackSection = ({ tech }) => {
    const categories = [
        { key: "development", title: "Development" },
        { key: "database", title: "Database" },
        { key: "services", title: "Services" },
        { key: "deployment", title: "Deployment" },
    ];

    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {categories.map(({ key, title }) => (
                    <div
                        key={key}
                        className="p-5 rounded-xl 
                        bg-white/10 backdrop-blur-lg 
                        border border-white/10 
                        shadow-lg hover:scale-[1.02] transition"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            {title}
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            {tech[key]?.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 px-3 py-2 
                                    bg-white/10 rounded-lg border border-white/10"
                                >
                                    <img
                                        src={techIcons[item]}
                                        alt={item}
                                        className="w-5 h-5"
                                    />
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStackSection;
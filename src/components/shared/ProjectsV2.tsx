// components/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Example icons, add more as needed
import { ParallaxLayer } from '@react-spring/parallax';

const projects: Array<Project> = [
    {
        id: '1',
        name: 'Quantum Realm Explorer',
        screenshot: 'https://via.placeholder.com/600x400/1E1E1E/FFFFFF?text=Project+1', // Replace with actual image
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        description: 'An interactive web application exploring subatomic particles and their behaviors, featuring stunning 3D visualizations and real-time data integration.',
        githubLink: 'https://github.com/yourusername/quantum-realm',
        liveLink: 'https://quantumrealm.example.com',
    },
    {
        id: '2',
        name: 'Neural Network Simulator',
        screenshot: 'https://via.placeholder.com/600x400/1E1E1E/FFFFFF?text=Project+2',
        techStack: ['Python', 'Django', 'PostgreSQL', 'D3.js'],
        description: 'A full-stack web platform for designing, training, and visualizing custom neural networks, allowing users to experiment with various architectures and datasets.',
        githubLink: 'https://github.com/yourusername/neural-sim',
    },
    {
        id: '3',
        name: 'Celestial Body Tracker',
        screenshot: 'https://via.placeholder.com/600x400/1E1E1E/FFFFFF?text=Project+3',
        techStack: ['Next.js', 'GraphQL', 'Apollo Client', 'Stripe'],
        description: 'A subscription-based service providing real-time tracking and detailed information about celestial bodies, with personalized alerts and interactive sky maps.',
        liveLink: 'https://celestialtracker.example.com',
    },
];

// Define interfaces for type safety
interface Project {
    id: string;
    name: string;
    screenshot: string; // URL to the project screenshot
    techStack: string[];
    description: string;
    githubLink?: string;
    liveLink?: string;
}



const Projects = () => {
    // Animation variants for project cards
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hover: {
            scale: 1.05,
            rotate: 2,
            transition: { type: 'spring', stiffness: 300, damping: 10 }
        }
    };

    return (
        <ParallaxLayer
            speed={0.5}
            offset={3}
            className="min-h-screen text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    My Notable Projects
                </motion.h2>

                <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden cursor-pointer relative group"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the item is in view
                        >
                            <div className="relative overflow-hidden h-60">
                                <img
                                    src={project.screenshot}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-3xl font-bold mb-3 text-purple-300">{project.name}</h3>
                                <p className="text-gray-400 text-lg mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-1 bg-purple-700 text-white text-sm rounded-full font-semibold opacity-90 hover:opacity-100 transition-opacity duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-end gap-4 mt-4">
                                    {project.githubLink && (
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-white transition-colors duration-300"
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FaGithub size={30} />
                                        </motion.a>
                                    )}
                                    {project.liveLink && (
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-white transition-colors duration-300"
                                            whileHover={{ scale: 1.2, rotate: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FaExternalLinkAlt size={30} />
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ParallaxLayer>
    );
};

export default Projects;
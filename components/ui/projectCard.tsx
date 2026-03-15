// components/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowUpRightFromSquare, FaLink, FaShareNodes } from 'react-icons/fa6';

type Image = {
  url: string,
  alt: string,
  _id: string
}

type TailwindColor =
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'indigo'
  | 'rose'
  | 'gray'
  | 'orange'
  | 'teal'
  | 'cyan'
  | 'emerald'
  | 'fuchsia'
  | 'sky'
  | 'pink'
  | 'lime';

const colorClassMap: Record<string, string> = {
  // Existing
  html: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  css: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  bootstrap: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  javascript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  php: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  mysql: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  jquery: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  laravel: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  reactjs: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
  tailwind: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
  mongodb: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  expressjs: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
  cloudinary: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
  java: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  nextjs: 'bg-black text-white dark:bg-white dark:text-black',
  postgresql: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  gemini: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200',
  docker: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  kubernetes: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
  jenkins: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
  aws: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  kafka: 'bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100',
  typescript: 'bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-blue-100',
  golang: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
};


type ProjectCardProps = {
  title: string;
  description: string,
  images: Image[],
  id: string;
  techStack: { name: string; _id: string, color?: TailwindColor; }[],
  link: string,
  featured?: boolean
};
const ProjectCard = ({
  title,
  description,
  images,
  techStack,
  link,
  featured = false,
  id
}: ProjectCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const shareLink = `https://chatanya.dev/work/${id}`;
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="relative rounded-[40px] overflow-hidden h-full flex flex-col group shadow-md shadow-gray-300 dark-card-shadow"
    >
      {/* Blurry overlay that appears on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-white/30 backdrop-blur-sm z-10 pointer-events-none transition-opacity duration-300"
      />

      <motion.div
        className=" rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
        whileHover={{
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={images[0]?.url}
            alt={images[0]?.alt || title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
          {featured && (
            <div className="absolute bottom-4 left-4">
              <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">
              {title}
            </h3>
            <div className="flex space-x-2">

              <div className="relative inline-block">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCopy}
                  className="py-2 cursor-pointer rounded-full hover:text-blue-600 transition-colors"
                >
                  <FaShareNodes className="text-2xl mr-2" />
                </motion.button>

                {/* Tooltip */}
                <span
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 
                          px-2 py-1 text-sm rounded-md shadow-md whitespace-nowrap 
                          transition-opacity duration-200
                          ${copied ? "opacity-100 bg-green-600 text-white" : "opacity-0"}`}
                >
                  Copied!
                </span>
              </div>
              {link && (
                <Link href={link} target="_blank" aria-label="Link">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="hover:text-blue-600 transition-colors"
                  >
                    <FaLink className='text-3xl mt-1 mr-2 cursor-pointer' />
                  </motion.div>
                </Link>
              )}
              <div className="relative w-full flex justify-center items-center">
                <Link
                  href={`/work/${id}`}
                  title="click"
                  className="faq-button"
                >
                  <FaArrowUpRightFromSquare className="text-2xl max-sm:text-lg cursor-pointer mx-auto hover:text-blue-600" />
                  <span className="tooltip-project">View Project</span>
                </Link>
              </div>
            </div>
          </div>

          <p className="text-gray-800 light-gray-text mb-4 grow text-sm">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 6).map((tag, i) => {
              const key = tag.name.toLowerCase().replace(/\s+/g, '');
              const className = colorClassMap[key] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';

              return (
                <motion.span
                  key={i}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                  className={`text-xs px-3 py-1 rounded-full ${className}`}
                >
                  {tag.name}
                </motion.span>
              );
            })}

          </div>
        </div>
      </motion.div>
    </motion.div >
  );
};

export default ProjectCard;
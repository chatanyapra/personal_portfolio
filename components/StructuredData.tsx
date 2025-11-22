import { siteConfig } from '@/config/metadata';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chatanya Pratap",
    "alternateName": ["Chatanya", "Chatanyapra", "Chaitanya", "Chetanya", "Chaitanya Pratap", "Chetanya Pratap", "Chetan", "Chetanyapra", "Chaitanyapra", "Chatanya Pra", "Chetan Pratap"],
    "jobTitle": ["Full Stack Developer", "MERN Stack Developer", "Freelance Web Developer"],
    "description": "Expert Full Stack Developer specializing in MERN stack, React, Next.js, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
    "url": siteConfig.url || "https://chatanya.vercel.app",
    "image": `${siteConfig.url || "https://chatanya.vercel.app"}${siteConfig.profileImage}`,
    "sameAs": [
      "https://github.com/chatanyapra",
      "https://www.linkedin.com/in/chatanya-pratap-ab410a277/",
      "https://codepen.io/chatanyaPratap",
      "https://x.com/Chatanyapra"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PHP",
      "Laravel",
      "Tailwind CSS",
      "Framer Motion",
      "Socket.IO",
      "WebRTC",
      "Docker",
      "AWS",
      "CI/CD",
      "Jenkins",
      "Kubernetes",
      "Full Stack Development",
      "MERN Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "DevOps",
      "RESTful APIs",
      "Progressive Web Apps",
      "Responsive Web Design"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "description": "Develops modern web applications using MERN stack, React, Next.js, Node.js, and DevOps technologies. Specializes in creating scalable, high-performance web solutions for businesses and individuals.",
      "skills": [
        "Full Stack Development",
        "MERN Stack Development",
        "React Development",
        "Next.js Development",
        "Node.js Development",
        "JavaScript Programming",
        "TypeScript Programming",
        "Database Design",
        "API Development",
        "DevOps Implementation"
      ]
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Diploma in Computer Science"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": siteConfig.url || "https://chatanya.vercel.app"
    },
    "offers": {
      "@type": "Offer",
      "name": "Web Development Services",
      "description": "Professional web development services including full-stack development, MERN stack applications, custom web solutions, and DevOps implementation."
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Chatanya Pratap Portfolio",
    "alternateName": "Chatanyapra Portfolio",
    "url": siteConfig.url || "https://chatanya.vercel.app",
    "description": siteConfig.description,
    "author": {
      "@type": "Person",
      "name": "Chatanya Pratap",
      "alternateName": "Chatanyapra"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url || "https://chatanya.vercel.app"}/blogs?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
    </>
  );
}

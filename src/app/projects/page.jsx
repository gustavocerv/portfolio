import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Portfolio - Cybersecurity Projects',
  description: 'Showcase of my cybersecurity and development projects.',
};

// Project component
const Project = ({ name, description, website, icon }) => (
  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-col items-start text-left">
      <i className={`fas ${icon} text-3xl mb-3 text-blue-600 dark:text-blue-400`}></i>
      <h2 className="text-xl font-bold mb-2 dark:text-white">{name}</h2>
      <p className="mb-3 dark:text-custom-grey">{description}</p>
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-custom-grey flex items-center hover:underline"
      >
        <i className="fas fa-link mr-2"></i>{website}
      </a>
    </div>
  </div>
);

export default function Projects() {
  // Cybersecurity and Development Projects
  const projects = [
    {
      name: 'Snort Intrusion Detection and Prevention System (IDS/IPS)',
      description:
        'A hands-on implementation of Snort to detect and prevent network intrusions. Configured custom rules, analyzed packet captures, and integrated alerts into a centralized monitoring system.',
      website: 'https://github.com/gustavocerv/Snort-Intrusion-Detection-and-Prevention-System-IDS-IPS',
      icon: 'fa-shield-alt',
    },
    {
      name: 'Squid Web Proxy and Caching System',
      description:
        'Deployed and configured Squid Proxy on a Linux environment to manage web traffic and improve network performance through caching and access control.',
      website: 'https://github.com/gustavocerv/Squid-Web-Proxy-and-Caching-System',
      icon: 'fa-network-wired',
    },
    {
      name: 'Vulnerability Scanning with Nessus',
      description:
        'Conducted network vulnerability assessments using Nessus, identifying potential risks and providing remediation recommendations for improved security posture.',
      website: 'https://github.com/gustavocerv/Vulnerability-Nessus',
      icon: 'fa-bug',
    },
    {
      name: 'Docker CI/CD for Secure Deployments',
      description:
        'Built a secure CI/CD pipeline using Docker and GitHub Actions to automate application deployment, vulnerability scanning, and container hardening.',
      website: 'https://github.com/gustavocerv/docker-ci-cd-la',
      icon: 'fa-tools',
    },
    {
      name: 'Timesheet App (Cloud Deployment & Kubernetes)',
      description:
        'Developed and containerized a timesheet web application using Node.js and deployed it on Kubernetes clusters with secure configurations and CI/CD automation.',
      website: 'https://github.com/gustavocerv/timesheet-app-kubernetes',
      icon: 'fa-cloud',
    },
    {
      name: 'Reading and Revising an API (Python Security)',
      description:
        'Created a Python project focused on analyzing, modifying, and securing RESTful APIs with improved authentication and error handling mechanisms.',
      website: 'https://github.com/gustavocerv/Reading_and_Revising_an_API',
      icon: 'fa-code',
    },
    {
      name: 'Linux LAMP and SAMBA Secure Configuration',
      description:
        'Configured and hardened a Linux environment running LAMP and SAMBA services, focusing on permissions, authentication, and network isolation.',
      website: 'https://github.com/gustavocerv/Linux-LAMP-and-SAMBA',
      icon: 'fa-server',
    },
    {
      name: 'Portfolio Website (React + Tailwind)',
      description:
        'A personal portfolio showcasing my cybersecurity projects, built with React and Tailwind CSS to ensure performance, scalability, and aesthetic design.',
      website: 'https://github.com/gustavocerv/portfolio',
      icon: 'fa-laptop-code',
    },
    {
      name: 'Explore More Repositories',
      description:
        'Visit my GitHub profile to explore additional cybersecurity, automation, and programming projects — all part of my continuous learning journey.',
      website: 'https://github.com/gustavocerv?tab=repositories',
      icon: 'fa-cogs',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-custom-dark text-black dark:text-custom-grey">
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-8 lg:w-5/6 lg:mx-auto lg:py-16">
        <h1 className="text-5xl font-bold mb-6 lg:w-2/3 dark:text-white">Cybersecurity Projects & Research</h1>
        <p className="mb-8 dark:text-custom-grey lg:w-2/3">
          Explore my hands-on cybersecurity projects — from intrusion detection systems and proxy servers
          to secure automation pipelines and vulnerability assessments. Each project represents my passion
          for strengthening digital security and building resilient infrastructures.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

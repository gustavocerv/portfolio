import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'Projects page of my portfolio.',
};

// Project component
const Project = ({ name, description, website }) => (
  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
    <div className="flex flex-col items-start text-left">
      <Image src="/logo.png" alt={name} width={100} height={100} className="w-12 h-12 mb-2" />
      <h2 className="text-xl font-bold mb-1 dark:text-white">{name}</h2>
      <p className="mb-2 dark:text-custom-grey">{description}</p>
      <a href={website} className="text-grey-500 dark:text-custom-grey flex items-center">
        <i className="fas fa-link mr-2"></i>{website}
      </a>
    </div>
  </div>
);

export default function Projects() {
  // Data for each project
  const projects = [
    {
      name: 'React-Tailwind Website',
      description: 'Discover a seamless and dynamic web experience with my React platform, powered by the utility-first Tailwind CSS framework. Enjoy smooth navigation, interactive features, and a visually appealing interface, all built with the latest web technologies.',
      website: 'https://github.com/gustavocerv/portfolio',
    },
    {
      name: 'SQL',
      description: 'Unlock the power of efficient data management with my SQL projects. Manage inventory data, analyze sales trends, and gain valuable insights through expertly crafted queries and optimized database structures.',
      website: 'https://github.com/gustavocerv/SQL',
    },
    {
      name: 'JavaScript',
      description: 'Explore a comprehensive suite of JavaScript projects designed to manage various aspects of real estate properties. These projects demonstrate proficiency in object-oriented programming, data management, and user interface design, providing a robust solution for property listing, bidding, and management.',
      website: 'https://github.com/gustavocerv/Java-RealState',
    },
    {
      name: 'And more Projects',
      description: 'I invite you to delve deeper into my portfolio and discover the breadth of my skills and creativity. From cutting-edge web applications to innovative data solutions, each project represents my commitment to pushing boundaries and making a lasting impact.',
      website: 'https://github.com/gustavocerv?tab=repositories',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-custom-dark text-black dark:text-custom-grey">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-4 py-8 lg:w-5/6 lg:mx-auto lg:py-16">
        <h1 className="text-5xl font-bold mb-6 lg:w-2/3 dark:text-white">My Dent in the Universe.</h1>
        <p className="mb-8 dark:text-custom-grey lg:w-2/3">Explore the diverse array of projects I've created in my quest to leave a lasting impact on the world. From dynamic web experiences to efficient data management systems, each endeavor showcases my passion for innovation and problem-solving.</p>
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

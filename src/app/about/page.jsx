import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Portfolio - About',
  description: 'About page of my cybersecurity portfolio.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-custom-dark text-black dark:text-custom-grey">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-4 py-8 lg:py-16 flex flex-col lg:flex-row lg:space-x-4 lg:justify-center about-container">
        
        {/* Left Column */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <Image src="/gus.png" alt="Profile" width={100} height={100} className="w-80 h-80 mb-4 lg:hidden" />
          <h1 className="text-4xl font-bold mb-6 dark:text-white">
            I’m Gustavo – a Spiritual and Professional Guide in Cybersecurity
          </h1>
          <p className="mb-4 dark:text-custom-grey">
            I’m Gustavo, a cybersecurity enthusiast and Business Intelligence professional based in Utah. I explore the intersection of technology, data, and security, helping organizations protect their systems, networks, and sensitive information.
          </p>
          <p className="mb-4 dark:text-custom-grey">
            My approach combines technical expertise with spiritual awareness. I believe that personal integrity and professional skill go hand in hand to create ethical, secure, and effective solutions in the world of cybersecurity.
          </p>
          <p className="mb-4 dark:text-custom-grey">
            Beyond professional pursuits, I share insights on personal growth, spiritual development, and ethical technology practices through my platform: 
            {' '}
            <a 
              href="https://spiritualandprofessional.wordpress.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-500 hover:underline"
            >
              Spiritual and Professional
            </a>.
          </p>
          <p className="mb-4 dark:text-custom-grey">
            By combining strategic thinking, data analysis, and cybersecurity skills, I aim to empower individuals and organizations to make informed, safe, and ethical decisions in an increasingly digital world.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
          <Image src="/gus.png" alt="Profile" width={100} height={100} className="w-80 h-80 mb-4 hidden lg:block" />
          
          <div className="text-center lg:text-left">
            <a href="https://github.com/gustavocerv?tab=repositories" className="block mb-2 text-dark dark:text-gray-400 flex items-center">
              <i className="fab fa-github fa-xl mr-2"></i>Follow me on GitHub
            </a>
            <a href="https://www.linkedin.com/in/gustavocerv" className="block mb-2 text-dark dark:text-gray-400 flex items-center">
              <i className="fab fa-linkedin fa-xl mr-2"></i>Follow me on LinkedIn
            </a>
          </div>

          <hr className="my-4 w-full border-gray-300 dark:border-gray-600" />

          <div className="text-center lg:text-left">
            <a href="mailto:private@privateemail.com" className="text-gray-600 dark:text-gray-400 flex items-center">
              <i className="fas fa-envelope fa-xl mr-2"></i>gscervantes.it@gmail.com
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

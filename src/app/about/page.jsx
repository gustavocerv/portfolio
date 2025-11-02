import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Portfolio - About',
  description: 'About page of my portfolio.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-custom-dark text-black dark:text-custom-grey">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-4 py-8 lg:py-16 flex flex-col lg:flex-row lg:space-x-4 lg:justify-center about-container">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <Image src="/gus.png" alt="Profile" width={100} height={100} className="w-80 h-80 mb-4 lg:hidden" />
          <h1 className="text-4xl font-bold mb-6 dark:text-white">I’m Gustavo. I live in Utah, where I do Bussines Intelligence.</h1>
          <p className="mb-4 dark:text-custom-grey">I’m Gustavo, a Business Intelligence professional based in the vibrant state of Utah. With a keen eye for data and a knack for uncovering insights, I navigate the intricate world of business analytics to drive informed decision-making. Whether it's deciphering market trends, optimizing operational efficiencies, or crafting strategic plans, I thrive on the challenges of harnessing data to fuel organizational success.</p>
          <p className="mb-4 dark:text-custom-grey">In Utah's dynamic landscape, I find ample opportunities to apply my expertise, collaborating with diverse teams and industries to unlock the full potential of their data assets. From startups to established enterprises, my passion for Business Intelligence transcends boundaries, shaping strategies that propel businesses towards their goals.</p>
          <p className="mb-4 dark:text-custom-grey">My journey in Business Intelligence is driven by a relentless curiosity and a commitment to excellence. I believe that every dataset holds a story, and my mission is to uncover those narratives to empower organizations with actionable insights. By leveraging advanced analytics, data visualization, and strategic thinking, I help businesses transform raw data into valuable assets that drive growth and innovation.</p>
        </div>
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
          <Image src="/gus.png" alt="Profile" width={100} height={100} className="w-80 h-80 mb-4 hidden lg:block" />
          <div className="text-center lg:text-left">
            <a href="https://github.com/gustavocerv?tab=repositories" className="block mb-2 text-dark dark:text-gray-400 flex items-center">
              <i className="fab fa-github fa-xl mr-2"></i>Follow me on GitHub
            </a>
            <a href="www.linkedin.com/in/gustavocerv" className="block mb-2 text-dark dark:text-gray-400 flex items-center">
              <i className="fab fa-linkedin fa-xl mr-2"></i>Follow me on LinkedIn
            </a>
          </div>
          <hr className="my-4 w-full border-gray-300 dark:border-gray-600" />
          <div className="text-center lg:text-left">
            <a href="mailto:jane@email.com" className="text-gray-600 dark:text-gray-400 flex items-center">
              <i className="fas fa-envelope fa-xl mr-2"></i>private@privateemail.com, https://portfolio-app-956456382165.us-central1.run.app
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

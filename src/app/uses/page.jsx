import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'Uses page of my portfolio.',
};

const items = [
  {
    category: "Workstation",
    items: [
      {
        name: "Ergonomic Chair",
        description: "Comfort meets functionality with this ergonomic chair. Designed to support long hours of work, it ensures you maintain good posture and stay comfortable throughout the day."
      }, {
        name: "Mechanical Keyboard",
        description: "Experience the tactile joy of a mechanical keyboard. With customizable keys and a satisfying click, it enhances typing speed and accuracy, making coding sessions a breeze."
      }, {
        name: "Ultra-Wide Monitor",
        description: "Expand your workspace with an ultra-wide monitor. Perfect for multitasking, it allows you to have multiple windows open side-by-side, boosting productivity and efficiency."
      },
      // Add more items as needed
    ],
  },
  {
    category: "Development tools",
    items: [
      {
        name: "Visual Studio Code",
        description: "A powerful and versatile code editor that supports a wide range of programming languages. With its extensive library of extensions, it can be customized to fit any development workflow."
      }, {
        name: "GitHub",
        description: "The go-to platform for version control and collaboration. GitHub makes it easy to manage code repositories, track changes, and collaborate with other developers on projects."
      }, {
        name: "Postman",
        description: "An essential tool for API development and testing. Postman simplifies the process of creating, testing, and documenting APIs, ensuring seamless integration and functionality."
      },
      // Add more items as needed
    ],
  },
  {
    category: "Design",
    items: [
      {
        name: "Whimsical",
        description: "A versatile tool for creating flowcharts, wireframes, and mind maps. Whimsical's intuitive interface makes it easy to visualize ideas and collaborate with team members."
      },
      {
        name: "Figma",
        description: "Initially adopted as a design tool, Figma has evolved into our virtual whiteboard that serves the entire company. Its powerful collaboration features make it an indispensable part of our design and brainstorming process."
      }, 
      // Add more items as needed
    ],
  },
  {
    category: "Productivity",
    items: [
      {
        name: "Notion",
        description: "A comprehensive productivity tool that combines note-taking, task management, and project planning. Notion's flexibility allows you to create a personalized workspace that adapts to your needs."
      }, {
        name: "Trello",
        description: "A visual project management tool that uses boards, lists, and cards to organize tasks and projects. Trello's simplicity and ease of use make it perfect for managing both personal and professional projects."
      }, {
        name: "Slack",
        description: "A communication platform that brings teams together. With channels, direct messaging, and integrations with other tools, Slack keeps everyone connected and informed."
      },
      // Add more items as needed
    ],
  },
];

export default function Uses() {
  return (
    <div className="min-h-screen bg-white dark:bg-custom-dark text-black dark:text-custom-grey">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-4 py-8 lg:w-2/3 lg:mx-auto lg:py-16">
        <h1 className="text-5xl font-bold mb-6 lg:w-2/3 dark:text-white">Gadgets, Tools, and Recommendations</h1>
        <p className="mb-8 dark:text-custom-grey lg:w-2/3">Welcome to my curated collection of gadgets, tools, and recommendations that power my workflow and creativity. This website, built with React and Tailwind CSS, showcases the essentials that help me stay productive, inspired, and efficient.</p>
        {items.map((category, index) => (
          <div key={index} className="mb-8">
            <div className="flex flex-col md:flex-row md:items-start">
              <h2 className="text-3xl font-bold mb-4 dark:text-white md:w-1/4">{category.category}</h2>
              <div className="flex-grow md:pl-8">
                {category.items.map((item, idx) => (
                  <div key={idx} className="mb-6">
                    <h3 className="text-xl font-bold dark:text-white">{item.name}</h3>
                    <p className="dark:text-custom-grey">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

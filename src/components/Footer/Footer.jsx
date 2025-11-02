import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 lg:px-8">
      <div className="container mx-auto flex flex-col items-center lg:flex-row justify-between">
      <nav className="flex justify-center space-x-4">
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-teal-400 transition-colors duration-300">Home</Link>
          <Link href="/about" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-teal-400 transition-colors duration-300">About</Link>
          <Link href="/projects" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-teal-400 transition-colors duration-300">Projects</Link>
          <Link href="/uses" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-teal-400 transition-colors duration-300">Uses</Link>
        </nav>
        <p className="text-gray-500 dark:text-gray-400 items-center mb-4">&copy; 2024 Gustavo. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;

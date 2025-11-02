import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'Uses page of my cybersecurity portfolio.',
};

const items = [
  {
    category: "Workstation",
    items: [
      {
        name: "High-Spec Laptop",
        description: "A powerful laptop with a fast processor, ample RAM, and SSD storage, perfect for running virtual machines, penetration testing labs, and cybersecurity tools."
      },
      {
        name: "Dual Monitors",
        description: "A dual monitor setup allows me to monitor systems, analyze logs, and multitask efficiently during security assessments and threat analysis."
      },
      {
        name: "Mechanical Keyboard",
        description: "Reliable mechanical keyboard for coding, scripting, and penetration testing tasks, offering tactile feedback and comfort for long sessions."
      },
    ],
  },
  {
    category: "Security Tools",
    items: [
      {
        name: "Kali Linux",
        description: "The go-to operating system for penetration testing, ethical hacking, and security research. Comes preloaded with hundreds of cybersecurity tools."
      },
      {
        name: "Wireshark",
        description: "A network protocol analyzer that captures and inspects packets in real time, essential for network troubleshooting and security monitoring."
      },
      {
        name: "Metasploit Framework",
        description: "A powerful penetration testing tool used to discover, exploit, and validate vulnerabilities in systems and networks."
      },
      {
        name: "Nmap",
        description: "A network scanning tool to identify open ports, services, and vulnerabilities, forming the backbone of reconnaissance in cybersecurity assessments."
      },
      {
        name: "Burp Suite",
        description: "An integrated platform for performing security testing of web applications, including scanning, spidering, and vulnerability analysis."
      },
      {
        name: "OWASP ZAP",
        description: "An open-source web application security scanner to detect vulnerabilities and enhance application security."
      },
    ],
  },
  {
    category: "Cloud & Networking",
    items: [
      {
        name: "AWS Cloud Lab",
        description: "Used for simulating cloud environments, testing cloud security configurations, and running cloud-based security experiments safely."
      },
      {
        name: "Virtual Private Network (VPN)",
        description: "Essential for secure remote connections, encrypted browsing, and protecting sensitive information when testing external networks."
      },
      {
        name: "Cisco Packet Tracer",
        description: "A network simulation tool to design, configure, and troubleshoot network topologies and test security configurations in a virtual environment."
      },
    ],
  },
  {
    category: "Productivity & Learning",
    items: [
      {
        name: "Notion",
        description: "Organizes cybersecurity notes, lab results, and project documentation in a structured and searchable way."
      },
      {
        name: "GitHub",
        description: "Hosts scripts, pentesting tools, and security projects while tracking version history and collaboration."
      },
      {
        name: "Cybersecurity Blogs & Resources",
        description: "Regularly follow resources like OWASP, Hack The Box, and cybersecurity news sites to stay updated on the latest threats and tools."
      },
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
        <h1 className="text-5xl font-bold mb-6 lg:w-2/3 dark:text-white">Cybersecurity Tools, Gadgets, and Recommendations</h1>
        <p className="mb-8 dark:text-custom-grey lg:w-2/3">
          Welcome to my curated collection of cybersecurity gadgets, tools, and resources. These essentials help me stay productive, secure, and effective while exploring networks, systems, and ethical hacking practices.
        </p>
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

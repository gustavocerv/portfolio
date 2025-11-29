"use client";
import Footer from '@/components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {

  const [busy, setBusy] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [message, setMessage] = useState('');
  const [joining, setJoining] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const simulateNetworkRequestTime = 2000;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      setJoining("Joining...");
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setJoining('');
      setMessage(`Thanks for subscribing, ${email}!`);
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage('');
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-custom-dark text-black dark:text-custom-grey">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-4 py-8 lg:w-5/6 lg:mx-auto lg:py-16">
        {/* Top Section */}
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between lg:space-x-16 mb-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-4 lg:mb-0">
            <Image src="/gus.png" alt="Profile" width={100} height={100} className="w-24 h-24 rounded-full mb-4" />
            <h1 className="text-4xl font-bold dark:text-white">Cybersecurity Enthusiast</h1>
            <p className="text-lg dark:text-custom-grey mt-4 mb-4">
              Exploring the world of cybersecurity, ethical hacking, and digital defense strategies. Learn to protect systems, networks, and data from evolving cyber threats.
            </p>
            <p className="text-lg dark:text-custom-grey mt-4 mb-4">
              My articles and resources focus on penetration testing, threat analysis, and practical security tools to help organizations stay secure.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="https://linkedin.com/" className="text-grey-800 dark:text-grey-400">
                <i className="fab fa-linkedin fa-2xl"></i>
              </a>
              <a href="https://github.com/" className="text-grey-500 dark:text-grey-400">
                <i className="fab fa-github fa-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-16">
          <div className="lg:w-2/3">
            <section className="mb-8">
              <h2 className="text-2xl font-bold dark:text-white">Latest Articles</h2>
              <div className="mt-4 space-y-6">
                <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold dark:text-white">Understanding Penetration Testing</h3>
                  <p className="mt-2 dark:text-custom-grey">
                    Learn how penetration testing helps organizations identify vulnerabilities before attackers can exploit them. Covers tools, techniques, and reporting best practices.
                  </p>
                  <a href="https://owasp.org/www-project-top-ten/" className="text-teal-500 dark:text-teal-400 mt-2 block">Read article</a>
                </article>
                <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold dark:text-white">The Importance of Network Security</h3>
                  <p className="mt-2 dark:text-custom-grey">
                    This article explains network security principles, including firewalls, intrusion detection systems, and secure network architecture to prevent cyber attacks.
                  </p>
                  <a href="https://www.cisco.com/c/en/us/products/security/what-is-network-security.html" className="text-teal-500 dark:text-teal-400 mt-2 block">Read article</a>
                </article>
                <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold dark:text-white">Top Cybersecurity Tools</h3>
                  <p className="mt-2 dark:text-custom-grey">
                    Overview of essential cybersecurity tools for ethical hacking, vulnerability scanning, and incident response. Learn which tools are widely used in the industry.
                  </p>
                  <a href="https://www.sans.org/cyber-security-courses/" className="text-teal-500 dark:text-teal-400 mt-2 block">Read article</a>
                </article>
                <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold dark:text-white">Cyber Threat Intelligence Basics</h3>
                  <p className="mt-2 dark:text-custom-grey">
                    Explore the fundamentals of cyber threat intelligence, including how to analyze threats, gather information, and strengthen organizational defenses.
                  </p>
                  <a href="https://www.mitre.org/" className="text-teal-500 dark:text-teal-400 mt-2 block">Read article</a>
                </article>
              </div>
            </section>
          </div>

          <div className="lg:w-1/3">
            <section className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-start space-x-2">
                <i className="fas fa-envelope fa-xl"></i>
                <h2 className="text-2xl font-bold dark:text-white">Stay up to date</h2>
              </div>
              <p className="mt-2 dark:text-custom-grey">Subscribe for the latest cybersecurity updates, tutorials, and tools.</p>
              <form className="mt-4 flex items-center space-x-2" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email address"
                  className="border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white flex-grow"
                  onChange={handleChange}
                  value={email}
                />
                <button
                  type="submit"
                  className="bg-black dark:bg-teal-500 text-white p-2 rounded w-auto"
                >
                  Join
                </button>
              </form>
              <div>{joining}</div>
              <div>{message}</div>
            </section>

          <div className="flex flex-col mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
  <div className="flex items-center justify-start space-x-2">
    <i className="fas fa-briefcase fa-xl"></i>
    <h2 className="text-2xl font-bold dark:text-white">Work</h2>
  </div>
  <div className="mt-4 space-y-4">

    {/* Lumen */}
    <div className="flex items-center space-x-4 dark:text-custom-grey">
      <Image src="/lumen.png" alt="Lumen" width={50} height={50} className="w-8 h-8" />
      <div className="flex flex-col">
        <h3 className="font-bold">Lumen</h3>
        <div className="flex justify-between space-x-2">
          <span>Market Intelligence Analyst</span>
          <span>(2024)</span>
        </div>
      </div>
    </div>

    {/* JN Aceros */}
    <div className="flex items-center space-x-4 dark:text-custom-grey">
      <Image src="/jn.png" alt="JN Aceros" width={50} height={50} className="w-8 h-8" />
      <div className="flex flex-col">
        <h3 className="font-bold">JN Aceros</h3>
        <div className="flex justify-between space-x-2">
          <span>International Bussiness Assistant</span>
          <span>(2012 - 2013)</span>
        </div>
      </div>
    </div>

    {/* Independent Consultant */}
    <div className="flex items-center space-x-4 dark:text-custom-grey">
      <Image src="/independent.png" alt="Independent Consultant" width={50} height={50} className="w-8 h-8" />
      <div className="flex flex-col">
        <h3 className="font-bold">Independent Information Security & Systems Administration Consultant</h3>
        <div className="flex justify-between space-x-2">
          <span>Freelance / Self-Initiated Projects</span>
          <span>(2023 - Present)</span>
        </div>
      </div>
    </div>

    {/* Cybersecurity Policy Project (NDA) */}
    <div className="flex items-center space-x-4 dark:text-custom-grey">
      <Image src="/nda.png" alt="NDA Project" width={50} height={50} className="w-8 h-8" />
      <div className="flex flex-col">
        <h3 className="font-bold">Cybersecurity Policy Project (NDA)</h3>
        <div className="flex justify-between space-x-2">
          <span>Corporate Security & HIPAA Risk Analysis</span>
          <span>(2024)</span>
        </div>
      </div>
    </div>
  </div>
</div>

            <section className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-start space-x-2">
                <i className="fas fa-cogs fa-xl"></i>
                <h2 className="text-2xl font-bold dark:text-white">Some of the cybersecurity skills I have developed</h2>
              </div>
              <div className="mt-4 space-y-4">

                <div className="flex items-center space-x-4">
                  <Image src="/python.png" alt="Python" width={50} height={50} className="w-12 h-12" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>Python</span>
                      <span className="text-blue-500">95%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 dark:bg-teal-500 h-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Image src="/linux.png" alt="Linux" width={50} height={50} className="w-12 h-12" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>Linux Administration</span>
                      <span className="text-blue-500">85%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 dark:bg-teal-500 h-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Image src="/network.png" alt="Networking" width={50} height={50} className="w-12 h-12" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>Networking</span>
                      <span className="text-blue-500">80%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 dark:bg-teal-500 h-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Image src="/pentest.png" alt="Pen Testing" width={50} height={50} className="w-12 h-12" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>Penetration Testing</span>
                      <span className="text-blue-500">75%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 dark:bg-teal-500 h-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Image src="/cloud.png" alt="Cloud Security" width={50} height={50} className="w-12 h-12" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>Cloud Security</span>
                      <span className="text-blue-500">70%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 dark:bg-teal-500 h-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

"use client";
import Footer from '@/components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [busy, setBusy] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [message, setMessage] = useState('');
  const [joining, setJoining] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

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
            <h1 className="text-4xl font-bold dark:text-white">Gustavo Cervantes</h1>
            <h2 className="text-xl font-semibold dark:text-teal-400 mb-2">Independent Information Security & Systems Administration Consultant</h2>
            <p className="text-lg dark:text-custom-grey mt-2 mb-4">
              Passionate cybersecurity professional with hands-on experience in ethical hacking, digital forensics, system administration, and cloud security.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="https://linkedin.com/in/gustavocerv" className="text-grey-800 dark:text-grey-400">
                <i className="fab fa-linkedin fa-2xl"></i>
              </a>
              <a href="https://github.com/gustavocerv" className="text-grey-500 dark:text-grey-400">
                <i className="fab fa-github fa-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* CV Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-16">
          <div className="lg:w-2/3">
            
            {/* Certificates Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold dark:text-white mb-4">Certificates</h2>
              <ul className="list-disc list-inside space-y-2 dark:text-custom-grey">
                <li><strong>Earned:</strong> Technical Support Engineer, IT Professional, System Administration, TestOut Network Pro, Client Pro, Linux Pro, AZ-900 Azure Fundamentals</li>
                <li><strong>Preparing to Earn:</strong> CompTIA Security+, Cisco CCNA Routing and Switching, AWS Certified CloudOps Engineer</li>
                <li><strong>In Progress:</strong> Technology Account Management Certificate, Business Analytics Certificate</li>
              </ul>
            </section>

            {/* Experience Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold dark:text-white mb-4">Experience</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-teal-400">Experienced Projects (2022 – Present)</h3>
                <ul className="list-disc list-inside space-y-2 dark:text-custom-grey mt-2">
                  <li>Linux LAMP, Kali Pen-Testing, Digital Forensics (FTK Imager, Autopsy), SQL DB administration, Wireshark packet & log analysis, SIEM/SOAR (AlienVault/Wazuh) integration for threat detection and automated response.</li>
                  <li>Kubernetes, clusters, containers, cloud security, orchestration for apps/websites (AWS, GCP, Azure), patch management, system monitoring, backup/recovery.</li>
                  <li>See projects in: <a href="https://github.com/gustavocerv?tab=repositories" className="text-teal-500">GitHub</a>, <a href="https://portfolio-app-956456382165.us-central1.run.app" className="text-teal-500">Portfolio</a></li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-teal-400">Independent Information Security & Systems Administration Consultant (2023 – Present)</h3>
                <ul className="list-disc list-inside space-y-2 dark:text-custom-grey mt-2">
                  <li>Policies, Executive Summaries, Pen-testing (Windows, Linux, Web Servers), Vulnerability Assessment, Network/Log Analysis, System Hardening, Active Directory/Group Policy, Backup & Recovery.</li>
                  <li>Cloud & Container Orchestration (AWS, Azure, GCP, Kubernetes), Automation of cloud servers with Terraform, Docker, GitHub.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold dark:text-teal-400">Cybersecurity Policy Project (NDA) (2024 – Fall)</h3>
                <ul className="list-disc list-inside space-y-2 dark:text-custom-grey mt-2">
                  <li>Updated corporate cybersecurity policies and contributed to HIPAA Risk Analysis for a Utah-based company.</li>
                  <li>Focused on compliance alignment, data protection standards, and internal security documentation.</li>
                </ul>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold dark:text-white mb-4">Skills</h2>
              <p className="dark:text-custom-grey"><strong>Technical Skills:</strong> Linux, Windows Server, Active Directory, SQL, Java, React, HTML, Python, SIEM (Wazuh, AlienVault), Kubernetes, Terraform, Docker, AWS, GCP, Azure, Backup/Recovery, Patch Management</p>
              <p className="dark:text-custom-grey mt-2"><strong>Soft Skills:</strong> Leadership, Teamwork, Problem Solving, Strategic Thinking, Connectedness, Includer, Developer</p>
            </section>

          </div>

          {/* Sidebar (Keep as is: Subscription + Skills chart) */}
          <div className="lg:w-1/3">
            
            {/* Subscription box */}
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
                <button type="submit" className="bg-black dark:bg-teal-500 text-white p-2 rounded w-auto">
                  Join
                </button>
              </form>
              <div>{joining}</div>
              <div>{message}</div>
            </section>

            {/* Skills chart (unchanged) */}
            {/* You can keep or remove the visual skill bars if you want them to match your Skills section */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

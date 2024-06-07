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
      // Wait 2 seconds (simulating a network request)
      setJoining("joining...")
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setJoining('');
      setMessage(`Thanks for subscribing, ${email}!`);
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage('')
      console.log(busy)
      console.log(email)
      console.log(message)
      setIsSubscribed(true);
      console.log(isSubscribed)
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="min-h-screen  bg-white dark:bg-custom-dark text-black dark:text-custom-grey">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-4 py-8 lg:w-5/6 lg:mx-auto lg:py-16">
        {/* Top Section */}
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between lg:space-x-16 mb-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-4 lg:mb-0">
            <Image src="/gus.png" alt="Profile" width={100} height={100} className="w-24 h-24 rounded-full mb-4" />
            <h1 className="text-4xl font-bold dark:text-white">Bussiness Intelligence</h1>
            <p className="text-lg dark:text-custom-grey mt-4 mb-4">Unlock the power of data with cutting-edge Business Intelligence insights. Dive into the world of data analytics, visualization, and strategic decision-making.</p>
            <p className="text-lg dark:text-custom-grey mt-4 mb-4">My articles and resources are designed to help you harness the full potential of your data, transforming it into actionable insights that drive business success.</p>
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
                  <h3 className="text-xl font-semibold dark:text-white">Harnessing Data for Strategic Decisions</h3>
                  <p className="mt-2 dark:text-custom-grey">This article discusses how business intelligence (BI) can transform data into actionable insights, enabling organizations to make informed strategic decisions. It covers the importance of data analytics, identifying trends, and optimizing internal processes to stay competitive.</p>
                  <a href="https://www.forbes.com/sites/forbesagencycouncil/2023/08/29/the-power-of-business-intelligence-and-how-to-put-it-into-practice/?sh=76115c8a2277" className="text-teal-500 dark:text-teal-400 mt-2 block">Read article</a>
                </article>
                <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold dark:text-white">The Future of Business Intelligence</h3>
                  <p className="mt-2 dark:text-custom-grey">This article explores the evolving landscape of business intelligence, highlighting the latest trends and emerging technologies. It discusses how BI tools and techniques are becoming essential for organizations to make data-driven decisions and anticipate future scenarios.</p>
                  <a href="https://www.spiceworks.com/tech/data-management/articles/business-intelligence/" className="text-teal-500 dark:text-teal-400 mt-2 block">Read article</a>
                </article>
                <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold dark:text-white">Data Visualization Best Practices</h3>
                  <p className="mt-2 dark:text-custom-grey">This article provides a comprehensive guide on best practices for data visualization in business intelligence. It covers how to create impactful visualizations using tools like MicroStrategy, ensuring that data is presented in a clear and compelling manner.</p>
                  <a href="https://www.linkedin.com/pulse/topics/business-administration-s50111/business-intelligence-%28bi%29-s798/" className="text-teal-500 dark:text-teal-400 mt-2 block">Read article</a>
                </article>
                <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-xl font-semibold dark:text-white">Leveraging Data Science for Business Insights</h3>
                  <p className="mt-2 dark:text-custom-grey">This article highlights the importance of data visualization for decision-making. It discusses how data visualization helps businesses quickly understand complex data, identify patterns, and make informed choices. The article also emphasizes the need for matching the right visualization to the data and the growing importance of data visualization as datasets become larger and more complex.</p>
                  <a href="https://moldstud.com/articles/p-the-importance-of-data-visualization-for-decision-making" className="text-teal-500 dark:text-teal-400 mt-2 block">Read article</a>
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


              <p className="mt-2 dark:text-custom-grey">Get notified when I publish something new, and unsubscribe at any time.</p>
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
              </div>
            </div>
            <section className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-start space-x-2">
                <i className="fas fa-cogs fa-xl"></i>
                <h2 className="text-2xl font-bold dark:text-white">Skills</h2>

              </div>

              <p className="dark:text-custom-grey mb-4">Some of the skills I developed</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center space-x-4">
                  <Image src="/html5.png" alt="HTML" width={100} height={100} className="w-12 h-12" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>HTML</span>
                      <span className="text-blue-500">90%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 dark:bg-teal-500 h-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src="/css3.png" alt="CSS" width={100} height={100} className="w-12 h-12" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>CSS</span>
                      <span className="text-blue-500">90%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 dark:bg-teal-500 h-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src="/javascript.png" alt="JavaScript" width={100} height={100} className="w-12 h-12" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>JavaScript</span>
                      <span className="text-blue-500">75%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 dark:bg-teal-500 h-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src="/react.png" alt="React" width={100} height={100} className="w-12 h-12" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>React</span>
                      <span className="text-blue-500">80%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 dark:bg-teal-500 h-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src="/python.png" alt="Python" width={100} height={100} className="w-12 h-12" />
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
                  <Image src="/sql.png" alt="SQL" width={100} height={100} className="w-12 h-12" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>SQL</span>
                      <span className="text-blue-500">70%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 dark:bg-teal-500 h-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src="/tableau.png" alt="Tableau" width={100} height={100} className="w-9 h-9" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>Tableau</span>
                      <span className="text-blue-500">85%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 dark:bg-teal-500 h-full" style={{ width: '85%' }}></div>
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

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ul } from 'framer-motion/client';

interface Author {
  name: string;
  isHighlighted: boolean;
}

interface Publication {
  title: string;
  authors: Author[];
  abstract: string;
  year: number;
  doi: string;
  link: string;
  venue: string;
}

export default function CV() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedPublication, setExpandedPublication] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const togglePublication = (index: number) => {
    setExpandedPublication(expandedPublication === index ? null : index);
  };

  const publications: Publication[] = [
    {
      title: "vStream IT: Video Streaming for Resource Constrained IoTs - An Optimal Control Approach",
      authors: [
        { name: "Rohit Gupta", isHighlighted: true },
        { name: "V. Mahendran", isHighlighted: false },
        { name: "Venkataramana Badarla", isHighlighted: false }
      ],
      abstract: "In the smart industrial era, with the rise of AR/VR technologies, dense deployments of IoTs such as 'head mounted displays' and 'smart glasses' are expected to become pervasive. For such dense IoT client deployments, edge-server based video streaming framework can improve the network performance such as low latency, and high and stable throughput. Such network enhancements can be utilized to improve the performance of end-to-end video (application) streaming by appropriately designing Adaptive Bit Rate (ABR) algorithm that also takes into account the resource constrained nature of the hosting IoTs. In this paper, we develop one such IoT friendly deterministic optimal control based ABR streaming algorithm. The exponential complexity of underlying state space is tackled by exploiting the underlying problem structure to yield an optimal and computationally-simple ABR algorithm namely, Video Streaming for IoTs (vStreamIT), which also use minimal storage. The efficacy of the proposed vStreamIT algorithm is evaluated against the state of the art and is shown to exhibit improved streaming performance in terms of bit-rate, while consuming less buffer space (a critical storage constraint for IoTs).",
      year: 2024,
      doi: "10.1109/COMSNETS59351.2024.10427461",
      link: "https://ieeexplore.ieee.org/abstract/document/10427461",
      venue: "16th International Conference on COMmunication Systems & NETworkS (COMSNETS)"
    },
    {
      title: "Enabling Privacy in IT Service Operations",
      authors: [
        { name: "Rohit Gupta", isHighlighted: true },
        { name: "Rishabh Kumar", isHighlighted: false },
        { name: "Sutapa Mondal", isHighlighted: false },
        { name: "Mangesh Gharote", isHighlighted: false },
        { name: "Sachin Lodha", isHighlighted: false }
      ],
      abstract: "IT service operations involve handling sensitive customer data, which gets logged into the system in the form of tickets describing the issues faced by customer. An authorized agent tasked with resolving a ticket may get exposed to sensitive customer information, which can lead to privacy breach, impacting the customer and potentially damaging the reputation of the organization. To address this issue, we propose a framework that minimizes sensitive data exposure to preserve privacy in IT service operations. Our framework quantifies the sensitive data misuse by an agent based on the information aggregated at their end. The sensitive data within ticket is masked and the flow of ticket is regulated to restrict the sensitive data aggregation. Additionally, we introduce a simulator, PESO (Privacy Enabled Service Operation), to study and demonstrate the implications of privacy settings on various service operation parameters.",
      year: 2024,
      doi: "10.1007/978-3-031-80020-7_17",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-80020-7_17",
      venue: "Information Systems Security (ICISS)"
    },
    {
      title: "Privacy Preservation in Service Operations by Minimizing Sensitive Data Exposure",
      authors: [
        { name: "Rishabh Kumar", isHighlighted: false },
        { name: "Rohit Gupta", isHighlighted: true },
        { name: "Sutapa Mondal", isHighlighted: false },
        { name: "Mangesh Gharote", isHighlighted: false },
        { name: "Praveen Gauravaram", isHighlighted: false },
        { name: "Sachin Lodha", isHighlighted: false }
      ],
      abstract: "In IT service operations such as service help desk, the primary task is to resolve customer queries satisfactorily within the stipulated service level agreements (SLA). These customer queries, referred to as tickets often contain sensitive and non-sensitive information. The disclosure of sensitive information even to an authorized agents is a privacy concern and could increase the risk of insider threat. In this work, we propose a framework to restrict the data exposure to authorized agents in such IT service operations. To facilitate privacy-enabled service operations, we assess the risk associated with the disclosure of attributes using its vulnerability and provide a masking strategy to reduce the data exposure. However, fully masking the key attributes within the ticket could hinder the resolution time and potentially lead to SLA violations. To overcome this, we propose an optimization model for partial masking which takes into consideration the attribute vulnerability and privacy requirement of an application, to minimize the overall data exposure. We provide an illustration on how this masking schemes can be implemented.",
      year: 2024,
      doi: "10.1109/PST62714.2024.10788049",
      link: "https://ieeexplore.ieee.org/abstract/document/10788049",
      venue: "21st Annual International Conference on Privacy, Security and Trust (PST)"
    },
    {
      title: "Optimal Searching of Prefetched DASH Segments in Fog Nodes: A Multi-Armed Bandit Approach",
      authors: [
        { name: "Rohit Gupta", isHighlighted: true },
        { name: "V. Mahendran", isHighlighted: false },
        { name: "Venkataramana Badarla", isHighlighted: false }
      ],
      abstract: "Data prefetching at fog nodes that significantly reduces latency is critical for video streaming applications. In the framework of dynamic video streaming over fog, some segments (parts of video) can be prefetched by the network provider. Sharing the dynamic information about prefetched node locations to all of the users is not a scalable approach, due to signalling and performance overheads. However, at the time of downloading, the client devices can search for the availability of DASH video segments in the fog nodes present in their vicinity. There is, however, a dilemma of how many fog nodes can be queried, without affecting performance such as continuous playback of the video. \par In this paper, we propose an efficient mechanism for searching video segments over different fog nodes. This search mechanism is formulated as a sequential stochastic modeling framework known as Multi-Armed Bandit~(MAB). While the state space of this model is a countably infinite set, we propose an algorithmic approach to transform to a finite state space model without loss of optimality. With extensive simulation results, the analytical results are validated. We study the different parameters influencing the improved optimal DASH performance, in terms of segment prefetch probability, and number of search attempts made by the client.",
      year: 2021,
      doi: "10.1145/3479242.3487323",
      link: "https://dl.acm.org/doi/abs/10.1145/3479242.3487323",
      venue: "17th ACM Symposium on QoS and Security for Wireless and Mobile Networks"
    }
  ];

  const formatAuthors = (authors: Author[]) => {
    if (authors.length <= 3) {
      return authors.map((author: Author, index: number) => (
        <span key={index}>
          {author.isHighlighted ? <strong>{author.name}</strong> : author.name}
          {index < authors.length - 1 ? ', ' : ''}
        </span>
      ));
    } else {
      return (
        <>
          {authors.slice(0, 3).map((author: Author, index: number) => (
            <span key={index}>
              {author.isHighlighted ? <strong>{author.name}</strong> : author.name}
              {index < 2 ? ', ' : ''}
            </span>
          ))}
          <span>, et al.</span>
        </>
      );
    }
  };

  return (
    <div className="cv-container">
      <header className="cv-header">
        <motion.h1 {...fadeInUp}>Rohit Gupta</motion.h1>
        <motion.p {...fadeInUp} transition={{ delay: 0.1 }}>AI Researcher</motion.p>
        <motion.div className="contact-info" {...fadeInUp} transition={{ delay: 0.2 }}>
          <a href="https://scholar.google.com/citations?user=7AtBaHgAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          <a href="https://github.com/guptrrohit" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/guptrrohit" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </motion.div>
      </header>

      <motion.section 
        className={`cv-section ${activeSection === 'summary' ? 'active' : ''}`}
        onClick={() => setActiveSection(activeSection === 'summary' ? null : 'summary')}
        {...fadeInUp}
      >
        <h2>Summary</h2>
        <p>
          Results-driven AI researcher with 3+ years of experience in machine learning, deep learning, and privacy-preserving AI. 
          Looking for an applied AI role to solve real-world challenges.
        </p>
      </motion.section>

      <motion.section 
        className={`cv-section ${activeSection === 'experience' ? 'active' : ''}`}
        onClick={() => setActiveSection(activeSection === 'experience' ? null : 'experience')}
        {...fadeInUp}
      >
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Researcher</h3>
          <p className="company">TCS Research • 2021–Present</p>
          <ul>
            <li>Developed a spaCy-based NER model for PII detection in support tickets, achieving 95% precision. Automated anonymization using Microsoft Presidio.</li>
            <li>Built a privacy-focused ticket allocation and simulation framework, reducing data exposure by 50%+ through an optimization model, improving IT service operations.</li>
            <li>Building a Deep Reinforcement Learning (DRL) cloud scaling policy, projected to cut infrastructure costs by 25% through adaptive resource allocation.</li>
            <li>Designed and implemented an intelligent user interface for privacy-sensitive ticket submissions, incorporating a ground-truth knowledge base to enhance data privacy.</li>
            <li>Achievements: Filed 1 patent and presented 2 papers at top international conferences.</li>
          </ul>
        </div>
      </motion.section>

      <motion.section 
        className={`cv-section ${activeSection === 'education' ? 'active' : ''}`}
        onClick={() => setActiveSection(activeSection === 'education' ? null : 'education')}
        {...fadeInUp}
      >
        <h2>Education</h2>
        <div className="education-item">
          <h3>MS by Research (CSE)</h3>
          <p className="institution">Indian Institute of Technology Tirupati • 2018–2021</p>
          <p>Thesis: <a href="http://dx.doi.org/10.13140/RG.2.2.18880.92168" target="_blank" rel="noopener noreferrer">Reinforcement Learning based Video Streaming in Edge Computing</a></p>
        </div>
        <div className="education-item">
          <h3>BTech in CSE</h3>
          <p className="institution">Hansraj College, Delhi University • 2013–2017</p>
        </div>
        <div className="education-item">
          <h3>Schooling</h3>
          <p className="institution">Jawahar Navodaya Vidyalaya Amarkantak • 2007–2013</p>
        </div>
      </motion.section>

      <motion.section 
        className={`cv-section ${activeSection === 'publications' ? 'active' : ''}`}
        onClick={() => setActiveSection(activeSection === 'publications' ? null : 'publications')}
        {...fadeInUp}
      >
        <h2>Publications</h2>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className={`publication-item ${expandedPublication === index ? 'expanded' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                togglePublication(index);
              }}
            >
              <div className="publication-header">
                <h3>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h3>
                <div className="publication-meta">
                  <span className="year">{pub.year}</span>
                  <span className="venue">{pub.venue}</span>
                </div>
                <p className="authors">{formatAuthors(pub.authors)}</p>
              </div>
              
              {expandedPublication === index && (
                <div className="publication-abstract">
                  <h4>Abstract</h4>
                  <p>{pub.abstract}</p>
                  <div className="publication-links">
                    <a href={`https://doi.org/${pub.doi}`} className="doi-link" target="_blank" rel="noopener noreferrer">
                      DOI: {pub.doi}
                    </a>
                    <a href={pub.link} className="paper-link" target="_blank" rel="noopener noreferrer">
                      View Paper →
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className={`cv-section ${activeSection === 'skills' ? 'active' : ''}`}
        onClick={() => setActiveSection(activeSection === 'skills' ? null : 'skills')}
        {...fadeInUp}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <p>Python, C/C++, Bash, PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, OpenAI, AWS, Docker, MLFlow, MAGE, Presidio, PETs, Streamlit, Git, Bash Scripting.</p>
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <p>Collaborative Leadership, Technical Writing & Communication, Critical Thinking.</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className={`cv-section ${activeSection === 'certifications' ? 'active' : ''}`}
        onClick={() => setActiveSection(activeSection === 'certifications' ? null : 'certifications')}
        {...fadeInUp}
      >
        <h2>Certifications</h2>
        <div className="certifications-list">
          <p>DeepLearning.AI Certifications:</p>
          <ul>
            <li>Deep Learning Specialization</li>
            <li>Convolutional Neural Networks</li>
            <li>Neural Networks and Deep Learning</li>
            <li>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</li>
            <li>Structuring Machine Learning Projects</li>
            <li>ChatGPT Prompt Engineering for Developers</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}

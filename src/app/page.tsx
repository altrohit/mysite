'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>
          Hi, I&apos;m <span className="highlight">Rohit Gupta</span>
        </h1>
        <p>
          AI Researcher with a passion for machine learning and privacy-preserving AI. Currently focused on developing scalable solutions using deep learning and reinforcement learning.
        </p>
        <div className="button-group">
          <Link href="/cv" className="button button-primary">
            View CV
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>Experience</h2>
          <p>
            AI researcher with expertise in machine learning, deep learning, and privacy-preserving AI.
          </p>
          <Link href="/cv" className="feature-link">
            View Experience →
          </Link>
        </div>

        <div className="feature-card">
          <h2>Projects</h2>
          <p>
            A collection of my work in AI research, focusing on reinforcement learning and IoT optimization.
          </p>
          <Link href="/cv#projects" className="feature-link">
            View Projects →
          </Link>
        </div>

        <div className="feature-card">
          <h2>Blog</h2>
          <p>
            Thoughts and insights on AI, machine learning, and privacy-preserving computing.
          </p>
          <Link href="/blog" className="feature-link">
            Read Posts →
          </Link>
        </div>
      </section>
    </div>
  );
}

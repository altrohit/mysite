"use client";

export default function Blog() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Blog</h1>
        <p>Research insights on AI, machine learning, and privacy-preserving computing</p>
      </header>

      <div className="blog-grid">
        <article className="blog-card">
          <div className="blog-card-content">
            <time>March 14, 2025</time>
            <h2>Privacy-Preserving AI: Challenges and Solutions</h2>
            <p>
              Exploring the intersection of privacy and AI, with a focus on techniques for maintaining data confidentiality in machine learning systems.
            </p>
            <a href="/blog/privacy-preserving-ai" className="read-more">
              Read More →
            </a>
          </div>
        </article>

        <article className="blog-card">
          <div className="blog-card-content">
            <time>March 10, 2025</time>
            <h2>Reinforcement Learning for IoT Optimization</h2>
            <p>
              A deep dive into how reinforcement learning can be applied to optimize resource allocation and performance in IoT networks.
            </p>
            <a href="/blog/rl-iot-optimization" className="read-more">
              Read More →
            </a>
          </div>
        </article>

        <article className="blog-card">
          <div className="blog-card-content">
            <time>March 5, 2025</time>
            <h2>Deep Learning in Edge Computing</h2>
            <p>
              Analyzing the challenges and opportunities of deploying deep learning models in edge computing environments.
            </p>
            <a href="/blog/deep-learning-edge" className="read-more">
              Read More →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

// src/pages/AboutUs.tsx
import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to MechanicPro, your virtual car mechanic assistant! 🚗🔧</h1>
      
      <p>
        At MechanicPro, we aim to revolutionize the car maintenance experience by combining advanced AI technologies with practical automotive knowledge. Whether you're facing a car issue or planning regular maintenance, our chatbot is here to assist you with quick, reliable, and accurate guidance.
      </p>

      <h2>What We Do</h2>
      <p>
        MechanicPro leverages the latest advancements in Artificial Intelligence to diagnose, troubleshoot, and guide you through resolving car-related issues. Our chatbot utilizes a vast repository of car manuals, service records, and maintenance guides to provide expert advice at your fingertips.
      </p>

      <h3>Key Features:</h3>
      <ul>
        <li><strong>Accurate Diagnosis:</strong> Identify car problems based on symptoms and suggest appropriate solutions.</li>
        <li><strong>Maintenance Assistance:</strong> Guide you through regular car upkeep and best practices for optimal performance.</li>
        <li><strong>Spare Parts Integration:</strong> Check the availability of spare parts and facilitate easy ordering when needed.</li>
        <li><strong>Mobile-Friendly Interface:</strong> Accessible anytime, anywhere, through a sleek and intuitive mobile application.</li>
      </ul>

      <h2>How It Works:</h2>
      <ol>
        <li><strong>Data Collection:</strong> We gather and curate car manuals, service records, and maintenance guides from trusted sources.</li>
        <li><strong>Data Processing:</strong> Using LlamaIndex, the data is organized and parsed for seamless access.</li>
        <li><strong>Advanced AI:</strong> Powered by the Retrieval-Augmented Generation (RAG) framework with the LLaMA 3 language model, MechanicPro ensures accurate and context-aware troubleshooting.</li>
        <li><strong>Continuous Improvement:</strong> Our chatbot is rigorously tested and refined based on real-world performance feedback to deliver top-notch assistance.</li>
      </ol>

      <h2>Our Vision</h2>
      <p>
        We aim to bridge the gap between car owners and expert-level automotive knowledge, making car maintenance simple, efficient, and accessible to everyone.
      </p>

      <h2>Why Choose MechanicPro?</h2>
      <ul>
        <li>Expert solutions tailored to your car’s needs.</li>
        <li>Seamless navigation and easy-to-understand guidance.</li>
        <li>Cutting-edge AI technology for unmatched accuracy and reliability.</li>
      </ul>

      <p>
        Join us on this journey to make car care smarter and stress-free. Experience the future of virtual car mechanics with MechanicPro!
      </p>
    </div>
  );
};

export default AboutUs;

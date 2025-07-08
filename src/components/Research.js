import React from 'react';
import styles from '../styles/Research.module.css';

const Research = () => {
  return (
    <section id="research" className={styles.researchSection}>
      <h2 className={styles.heading}>Research</h2>
      <div className={styles.researchBlock}>
        <h3 className={styles.title}>
          AI-Powered Data Extraction Pipeline for Scientific Analysis
        </h3>

        <div className={styles.highlightBox}>
          📄 <strong>Co-author</strong> on an upcoming peer-reviewed publication.
        </div>

        <p className={styles.meta}>
          <span><strong>Institution:</strong> UNC Charlotte</span> &nbsp;|&nbsp;
          <span><strong>Advisor:</strong> Dr. Jing Yang</span> &nbsp;|&nbsp;
          <span><strong>Duration:</strong> Jan 2025 – May 2025</span>
        </p>

        <p className={styles.description}>
          Designed and implemented a research-grade pipeline using <span className={styles.highlight}>OpenAI GPT-4</span> and <span className={styles.highlight}>Gemini</span> APIs to extract structured environmental parameters from scientific PDFs.
          Focused on retrieving <span className={styles.highlight}>context-aware and citation-supported insights</span> for:
        </p>

        <ul className={styles.parameterList}>
          <li><strong>Ambient Temperature</strong></li>
          <li><strong>Relative Humidity</strong></li>
          <li><strong>Barometric Pressure</strong></li>
          <li><strong>Insolation (Light Intensity)</strong></li>
          <li><strong>Wind Speed & Direction</strong></li>
          <li><strong>Precipitation</strong></li>
          <li><strong>Surface Moisture</strong></li>
          <li><strong>Soil Moisture</strong></li>
          <li><strong>Surface Temperature</strong></li>
          <li><strong>Vapor Pressure</strong></li>
        </ul>

        <p className={styles.description}>
          Built a <span className={styles.highlight}>multi-threaded assistant pipeline</span> with vector store + file search tools. Engineered <span className={styles.highlight}>few-shot prompts</span> and ensured structured outputs:
        </p>

        <div className={styles.outputFormat}>
          <strong>Parameter</strong> | <strong>Values + Units</strong> | <strong>Contextual Sentence</strong> | <strong>Scientific Insight</strong> | <strong>Citations</strong>
        </div>

        <p className={styles.description}>
          Added robust features like <span className={styles.highlight}>unit normalization</span> (e.g., °F↔°C, mm/year↔m/Myr), <span className={styles.highlight}>hallucination fallback logic</span>, and a <span className={styles.highlight}>deduplicated citation registry</span> across 20+ documents.
          Outputs were exported to validated JSON for downstream analysis. 
          
          This work contributed to an academic paper as a <span className={styles.highlight}>co-author</span>.
        </p>
      </div>
    </section>
  );
};

export default Research;

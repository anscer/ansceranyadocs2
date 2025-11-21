import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">ANSCER ROBOTICS - ANSCER ANYA</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/">
            Application Manual - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}
function Hero() {
  return (
    <header className={clsx("container", styles.heroBanner)}>
      <div className="row padding-horiz--md">
        <div className="col col--7">
          <div className={clsx(styles.relative, "row")}>
            <div className="col">
              <h1 className={styles.tagline}>
                ANSCER ANYA,
                <br /> Robot management <br />
                software for AMRs
              </h1>
              <h1 className={styles.tagline}>
                ANSCER ANYA, <br />
                <span>Robot </span>management <br />
                software for <span>AMRs</span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>
                It is a software solution designed to manage Autonomous Mobile
                Robots(AMRs).
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={styles.heroButtons}>
                <Link to="docs/" className={styles.getStarted}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.relative, "col", "col--5")}>
          <div className={styles.logoBlur}>
            {/* <img src="/img/logo.svg" className={clsx(styles.hideSmall)} /> */}
          </div>
          <div className={styles.codeBlock}>
            {/* <CodeBlock className="language-bash">
              npx crawlee create my-crawler
            </CodeBlock> */}
          </div>
        </div>
      </div>
    </header>
  );
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="ANSCER ANYA is a software solution designed to manage and automate material transport in warehouses and industries for ANSCER ROBOTS. This is designed to provide organizations/individuals with full visibility and control over their ANSCER ROBOTS, enabling them to streamline their material transport operations, reduce manual labor, and improve overall efficiency. The solution is highly scalable and customizable, allowing organizations to tailor it to their specific needs. With ANSCER ANYA, organizations can optimize their material transport processes and maximize the productivity of their ANSCER ROBOTS."
    >
      <Hero />
      <HomepageFeatures />
      {/* <main>
      </main> */}
    </Layout>
  );
}

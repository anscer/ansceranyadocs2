import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { FeatureLottieIcon } from "../LottieIcon";

const FeatureList = [
  {
    title: "Easy to Manage",
    id: "easyToManage",
    description: (
      <>
        ANSCER ANYA simplifies the management of your ANSCER ROBOTs and Fleet.
        Its user-friendly interface and intuitive controls make it effortless to
        oversee and coordinate your material transport operations. With
        streamlined management, you can allocate resources more efficiently and
        reduce administrative complexities.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    id: "focusOnWhatMatters",
    description: (
      <>
        By automating material transport tasks with ANSCER ANYA, your team can
        redirect their focus towards more strategic and value-added activities.
        Let the software handle repetitive, time-consuming tasks, allowing your
        workforce to concentrate on tasks that drive innovation and growth.
      </>
    ),
  },
  {
    title: "Developer Friendly",
    id: "developerFriendly",
    description: (
      <>
        ANSCER ANYA provides developer-friendly features and interfaces,
        allowing customization and integration with your existing systems and
        workflows. Developers can leverage APIs and tools to extend the
        capabilities of the software, tailor it to specific needs, and
        seamlessly integrate it into your technological ecosystem.
      </>
    ),
  },
  {
    title: "Scalable Solution",
    id: "scalableSolution",
    description: (
      <>
        ANSCER ANYA is designed to grow with your business. Its scalability
        ensures that it can adapt to increasing demands, whether you need to
        manage a small fleet of ANSCER ROBOTS or scale up to handle larger
        material transport operations. The solution evolves alongside your
        organization.
      </>
    ),
  },
  {
    title: "Enhanced Safety Measures",
    id: "enhancedSafetyMeasures",
    description: (
      <>
        ANSCER ANYA prioritizes safety throughout the material transport
        process. It incorporates advanced safety features such as obstacle
        detection, collision avoidance, and emergency stop mechanisms to ensure
        the well-being of both your workforce and assets. This emphasis on
        safety minimizes the risk of accidents and enhances overall workplace
        security.
      </>
    ),
  },
  {
    title: "Real-time Insights",
    id: "realTimeInsights",
    description: (
      <>
        Gain valuable real-time insights into your material transport processes.
        ANSCER ANYA provides detailed analytics and reporting, allowing you to
        make data-driven decisions, optimize routes, and identify areas for
        improvement, ultimately enhancing efficiency and reducing costs.
      </>
    ),
  },
];

function Feature({ Svg, title, description, id }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="padding-horiz--md padding-bottom--md">
        <div className={styles.featureIcon}>
          {id ? <FeatureLottieIcon icon={id} /> : <Svg alt={title} />}
          {/* {Svg ? <Svg alt={title} /> : null} */}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

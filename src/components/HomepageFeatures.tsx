import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: '/img/app.png',
    description: (
      <>
        We designed the app to be easy to use and intuitive. You can use powerfull CLI
        or beautiful GUI - only you decide.
      </>
    ),
  },
  {
    title: 'Download and start',
    image: '/img/working.png',
    description: (
      <>
        All steps are fully documented. You can just download the app and use it,
        while we do all of the hard work.
      </>
    ),
  },
  {
    title: 'Powered by Python',
    image: '/img/python.png',
    description: (
      <>
        All source code availible on GitHub. You can use it to build your own
        version of the app with custom features!
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

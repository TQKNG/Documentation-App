import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'API Integration',
    Svg: require('@site/static/img/api.svg').default,
    description: (
      <>
        Connect and sync your app with external services for seamless data exchange and extended functionality
      </>
    ),
  },
  {
    title: 'Web hooks',
    Svg: require('@site/static/img/webhook.svg').default,
    description: (
      <> Receive real-time updates and notifications from other applications instantly, triggering immediate actions in your system.
      </>
    ),
  },
  {
    title: 'Real-Time Notifications',
    Svg: require('@site/static/img/message.svg').default,
    description: (
      <>
        Deliver instant alerts and updates to users for a more engaging and responsive experience.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" >
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

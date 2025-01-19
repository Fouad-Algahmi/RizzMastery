import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'سهل الاستخدام',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>

      <div dir="rtl">
        تم بناء قاموسنا مع وضع البساطة في الاعتبار، مما يضمن للمستخدمين
        القدرة على البحث بسهولة واستكشاف التعريفات دون أي عناء.
      </div>

      </>
    ),
  },
  {
    title: 'توضيح كل كلمة',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>

      <div dir="rtl">
        ركز على فهم اللغة. ينظم قاموسنا التعريفات بوضوح، ويقدم معاني
         مختصرة وأمثلة لاستخدامها حتى تتمكن من التعلم بسرعة.
      </div>

      </>
    ),
  },
  {
    title: 'مرن وقابل للتوسع',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      
      <div dir="rtl">
        رحسّن أو خصص تجربتك مع القاموس. منصتنا مدعومة بميزات قابلة للتخصيص،
       مما يسمح لك بإضافة كلمات جديدة أو تعريفات أو حتى مرادفات بسهولة.

      </div>

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

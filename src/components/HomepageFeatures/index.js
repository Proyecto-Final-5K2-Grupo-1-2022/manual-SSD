import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de Usar',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        Esta guía fué diseñada para ir aprendiendo paso a paso, cómo usar facilmente
        todas las funcionalidades del sistema de soporte a Distribuidora Central.
      </>
    ),
  },
  {
    title: 'Enfocate en lo importante',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
       Ingresando a <code>Tutorial</code>, vas a poder enfocarte en cada módulo, utilizando el menú 
        principal ubicado en el margen izquierdo de la pantalla.
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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

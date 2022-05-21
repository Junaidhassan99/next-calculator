import Head from "next/head";
import React, { Fragment } from "react";

const AboutTextItem: React.FC<{
  title: string;
  description: string;
  path?: string;
}> = ({ children, title, description, path }) => {
  return (
    <div className="about-text-item">
      <div>{`${title}:`}</div>
      <div className="about-item-spacer"></div>
      {path !== undefined ? (
        <a href={path}>{description}</a>
      ) : (
        <div>{description}</div>
      )}
    </div>
  );
};

const AboutPage: React.FC<{}> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>About</title>
      </Head>
      <div className="about-container">
        <AboutTextItem title="App Name" description="Scientific Calculator" />
        <AboutTextItem title="Developed Using" description="Next JS" />
        <AboutTextItem
          title="Source Code"
          description="View on Github"
          path="https://github.com/Junaidhassan99/next-calculator"
        />
        <AboutTextItem
          title="Developed By"
          description="Junaid Hassan"
          path="mailto:junaidhassan2211@gmail.com"
        />
      </div>
    </Fragment>
  );
};

export default React.memo(AboutPage);

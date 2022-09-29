import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Redirect} from '@docusaurus/router';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return <Redirect to="/docs/intro" />;
    
    // <Layout
    //   title={`User manual ${siteConfig.title}`}
    //   description="Description will go into a meta tag in <head />">
      
    //   <main>
        
    //   </main>
    // </Layout>
  ;
}

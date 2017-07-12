import React from 'react';
import { navigateTo } from 'gatsby-link';

import DefaultLayout from '../../templates/DefaultLayout/';

import './CaseStudies.scss'

import screens from '../home/screens.png';

export default class CaseStudies extends React.Component {

  constructor() {
    super();
    this.state = {
      caseStudies: [
        {
          name: `SOS Homecare`,
          path: '/case-studies/sdfsdf',
          description: `Read how SOS Homecare saved 11 days a month on finance duties.`,
          stat: `11 days`,
          statDescription: `a month saved on finance duties`
        },{
          name: `County Care`,
          path: '/case-studies/sdfsdf',
          description: `Read how County Care saved 35 hours a week on roster generation.`,
          stat: `35 hours`,
          statDescription: `a week saved on roster generation`
        },{
          name: `Proud To Care`,
          path: '/case-studies/sdfsdf',
          description: ``,
          stat: `75%`,
          statDescription: `reduction in time to produce weekly rotas`
        }, {
          name: `Charlesworth Community Care`,
          path: '/case-studies/sdfsdf',
          description: `Read how CarePlanner helped Charlesworth to grow it's company to deliver They now have 60 clients based in Nottinghamshire, with 30 staff members providing 700 hours of care each week.`,
          stat: `70%`,
          statDescription: `reduction in time producing invoices and timesheets`
        }, {
          name: `Woodfield24`,
          path: '/case-studies/sdfsdf',
          description: `Read how Woodfield24 achieved a 95% increase in meeting KPIs.`,
          stat: `95%`,
          statDescription: `increase in KPIs met`
        }
      ]
    };
  }

  caseStudies() {
    let caseStudies = [];

    this.state.caseStudies.forEach((caseStudy) => {
      caseStudies.push(
        <div className="cp-case-study" onClick={() => navigateTo(caseStudy.path)}>
          <div className="cp-case-study__inner">
            <img className="cp-case-study__inner__img" src={screens}/>
            <h3>{caseStudy.name}</h3>
            <div className="cp-case-study__inner__description">
              <p>{caseStudy.description}</p>
            </div>
            <a>Read Case Study...</a>
          </div>
          <div className="cp-case-study__stat">
            <div className="cp-case-study__stat__figure">{caseStudy.stat}</div>
            <div className="cp-case-study__stat__description">{caseStudy.statDescription}</div>
          </div>
        </div>
      )
    });

    return caseStudies;
  }

  render() {

    return (
      <DefaultLayout id="case-studies">
        <div className="cp-section-1">
          <h1>Case Studies</h1>
          <p className="cp-section__description--top">
            Read why more companies are switching to CarePlanner.
          </p>
        </div>
        <div className="cp-section-2">
          <div className="cp-container">
            {this.caseStudies()}
          </div>
        </div>
      </DefaultLayout>
    );
  }
};

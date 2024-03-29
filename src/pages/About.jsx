import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import { AboutInfoItem, ButtonPrimary } from '../components';
import ContactBanner from '../components/ContactBanner'
import Reveal from '../components/Reveal';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    span {
      background-color: ${({ theme }) => theme.colors.fifth};
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid ${({ theme }) => theme.colors.secondary};
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
    return (
        <>
            <AboutPageStyles>
                <div className="container">
                    <div className="top-section">
                        <div className="left">
                            <Reveal>
                                <p className="about__subheading">
                                    Hi, I am <span>Lucas Singh</span>
                                </p>
                                <h2 className="about__heading">Power BI Data Analyst Associate</h2>
                                <div className="about__info">
                                    <PText>
                                        I live in the south of Buenos Aires Province.
                                        <br /> <br />
                                        I started working as a front end web developer when I started my degree in Systems Engineering.
                                        In the last few years I discovered data analysis, business intelligence and decided to specialize in this area in order to bring new knowledge to decision making.

                                        <br />
                                        <br />
                                        I am looking for my first job as a Data Analyst in challenging projects in various domains such as e-commerce or financial sector.
                                        I define myself as a curious, proactive and always eager to learn.
                                    </PText>
                                </div>
                                <ButtonPrimary btnText="Download CV" btnLink="https://drive.google.com/file/d/1BAcg20HH0mzhaxoNq4YrKJPhC81Js6-k/view?usp=sharing" outline target={false}/>
                            </Reveal>
                        </div>
                        <div className="right">
                            <Reveal>
                                <img src={AboutImg} alt="me" style={{ borderRadius: '15px', border: 'none' }} />
                            </Reveal>
                        </div>
                    </div>
                    <div className="about__info__items">
                        <div className="about__info__item">
                            <Reveal>
                                <h1 className="about__info__heading">Education</h1>
                                <AboutInfoItem
                                    title="Postgraduate Degree"
                                    items={['in Data Science', 'UCEMA University']}
                                />
                                <AboutInfoItem
                                    title="Bachelor Degree"
                                    items={['in Systems Ingineering', 'UNDEF University']}
                                />
                                <AboutInfoItem
                                    title="Associate Degree"
                                    items={['in Advanced Programming Technician', 'UTN University']}
                                />
                            </Reveal>
                        </div>
                        <div className="about__info__item">
                            <Reveal>
                                <h1 className="about__info__heading">My Skills</h1>

                                <AboutInfoItem
                                    title="Extraction:"
                                    items={['SQL', 'Excel']}
                                />
                                <AboutInfoItem
                                    title="Transformation"
                                    items={['Python', 'Databricks']}
                                />
                                <AboutInfoItem
                                    title="Visualisation"
                                    items={['Power BI', 'Tableau']}
                                />
                            </Reveal>
                        </div>
                        <div className="about__info__item">
                            <Reveal>
                                <h1 className="about__info__heading">Work Experiences</h1>

                                <AboutInfoItem
                                    title="2020-Now"
                                    items={['React Native Developer', 'Bizit Global S.A.']}
                                />
                                <AboutInfoItem
                                    title="2019-2020"
                                    items={['Front end Angular Developer', 'Kolektor S.A.']}
                                />
                                <AboutInfoItem
                                    title="2018-2019"
                                    items={['Front end Angular Developer', 'Globant S.A.']}
                                />
                                <AboutInfoItem
                                    title="2016-2017"
                                    items={['Layout Designer', 'Globad S.A.']}
                                />
                                <AboutInfoItem
                                    title="2015-2016"
                                    items={['Layout Designer', 'Arsayian Foundation']}
                                />
                            </Reveal>
                        </div>
                        <div className="about__info__item">
                            <Reveal>
                                <h1 className="about__info__heading">Certifications</h1>

                                <AboutInfoItem
                                    title="Microsoft Certified"
                                    items={['Power BI Data Analyst Associate']}
                                />
                                <AboutInfoItem
                                    title="Microsoft Certified"
                                    items={['Azure Data Fundamentals']}
                                />                                
                            </Reveal>
                        </div>
                    </div>
                </div>
                <ContactBanner />
            </AboutPageStyles>
        </>
    );
}
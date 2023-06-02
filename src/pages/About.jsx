import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import { AboutInfoItem } from '../components';
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
                                <h2 className="about__heading">a Data Science Specialist</h2>
                                <div className="about__info">
                                    <PText>
                                        I live in Venado Tuerto, a small city in the south of the province of
                                        Santa Fe, Argentina.
                                        <br /> <br />
                                        I started working as a front end web developer when I started my degree in Systems Engineering.
                                        In the last few years I discovered data analysis, business intelligence and decided to specialize in this area in order to bring new knowledge to decision making.

                                        <br />
                                        <br />
                                        I am looking for my first job as a Data Scientist / Data Analyst in challenging projects in various domains such as e-commerce or financial sector.
                                        I define myself as a curious, proactive and always eager to learn.
                                    </PText>
                                </div>
                                <Button btnText="Download CV" btnLink="#" />
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
                                    items={['in Systems Ingineering', 'IUA University']}
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
                                    items={['SQL', 'Excel', 'AWS']}
                                />
                                <AboutInfoItem
                                    title="Transformation"
                                    items={['Python', 'R language']}
                                />
                                <AboutInfoItem
                                    title="Visualisation"
                                    items={['Tableau']}
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
                    </div>
                </div>
                <ContactBanner />
            </AboutPageStyles>
        </>
    );
}
import React from 'react';
import styled from 'styled-components';
import { PText, ButtonPrimary, SectionTitle } from '../components'
import AboutImg from '../assets/images/about-sec-img.jpeg';
import Reveal from './Reveal';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .aboutSection__right {
    display: flex;
    justify-content: end;
  }
  .aboutImg {
    border-radius: 15px;
    width: 80%;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
      justify-content: center;
    }
    .aboutImg {
         width: 100%;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const AboutSection = () => {
    return (
        <AboutSectionStyles>
            <div className="container">
                <Reveal>
                    <div className="aboutSection__left">
                        <SectionTitle
                            subheading=""
                            heading="About Me"
                        />
                        <PText>
                            I am a Systems Engineer with a focus on data analysis. 
                            I live in the south of Buenos Aires Province, Argentina. <br />
                            I am interested in working in challenging projects and collaborative teams.<br />
                            In this website you can download my CV, see my projects and contact me for future jobs, thank you very much for your visit!
                        </PText>
                        <div className="aboutSection__buttons">
                            <ButtonPrimary btnText="Download CV" btnLink="https://drive.google.com/file/d/1pxP7kqH7UwwzUaNZlAxuCvcAjzGtm0eP/view?usp=sharing" outline  target={false} />
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="aboutSection__right">
                        <img className="aboutImg" src={AboutImg} alt="Img" />
                    </div>
                </Reveal>
            </div>
        </AboutSectionStyles>
    );
}

export default AboutSection;
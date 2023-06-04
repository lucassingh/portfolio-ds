import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import Loader from './Loader';
import { motion } from "framer-motion"

const Wrapper = styled.div`
    animation: fadeIn 3s;
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .splineMobile {
        margin-top: 30%;
    }

        @media only screen and (max-width: 768px) {
            .splineMobile {
            margin-top: 10%;
        }
    }
`

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    width: 100%;
    margin-top: 3%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -13rem;
    position: relative;
    color: ${({ theme }) => theme.colors.secondary};
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      color: ${({ theme }) => theme.colors.secondary};
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
     display: none
    }
  }
`;

const HeroSection = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        check_loading();
    }, [])

    const check_loading = () => {

        setTimeout(() => {
            setIsLoading(false)
        }, 2000);

        setIsLoading(true)
    }

    return (

        isLoading ? (
            <Loader />
        ) : (
            <HeroStyles>
                <div className="hero">
                    <div className="container-hero">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}
                        >
                            <h1 className="hero__heading">
                                <span className="hero__name">Lucas Singh</span>
                                <span>Data Scientist</span>
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}
                        >
                            <Wrapper>
                                <Spline className='splineMobile' scene="https://prod.spline.design/RTdoBHOD690swEmP/scene.splinecode" />
                            </Wrapper>
                        </motion.div>
                        <div className="hero__social">
                            <div className="hero__social__indicator">
                                <p>Follow</p>
                                <img src={SocialMediaArrow} alt="icon" />
                            </div>
                            <div className="hero__social__text">
                                <ul>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/lucassingh/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            iN
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/lucassingh"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GH
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://medium.com/@lucas.singh10"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            ME
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hero__scrollDown">
                            <p>Scroll</p>
                            <img className='arrow' src={ScrollDownArrow} alt="ScrollDown Arrow" />
                        </div>
                    </div>
                </div>
            </HeroStyles>
        )
    );
}

export default HeroSection;
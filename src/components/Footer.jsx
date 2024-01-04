import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import { PText } from '../components'

const FooterStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.fifth};
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  .copyright {
    background-color: ${({ theme }) => theme.colors.fourth};
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Lucas Singh</h1>
                    <PText> <br />
                        Thank you very much for your visit!
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol
                        heading="Important Links"
                        links={[
                            {
                                title: 'Home',
                                path: '/',
                                type: 'Link',
                            },
                            {
                                type: 'Link',
                                title: 'About',
                                path: '/about',
                            },
                            {
                                type: 'Link',
                                title: 'Projects',
                                path: '/projects',
                            },
                            {
                                type: 'Link',
                                title: 'Contact',
                                path: '/contact',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol
                        heading="Contact Info"
                        links={[
                            {
                                title: '+5493462565888',
                                path: 'tel:+88012312',
                            },
                            {
                                title: 'lucas.singh10@gmail.com',
                                path: 'lucas.singh10@gmail.com',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol
                        heading="Social Links"
                        links={[
                            {
                                title: 'LinkedIn',
                                path: 'https://www.linkedin.com/in/lucassingh/',
                            },
                            {
                                title: 'GitHub',
                                path: 'https://github.com/lucassingh',
                            },
                            {
                                title: 'Medium',
                                path: 'https://github.com/lucassingh',
                            }
                        ]}
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>
                        © 2023 - Lucas Singh | All rights reserved
                    </PText>
                </div>
            </div>
        </FooterStyle>
    );
}
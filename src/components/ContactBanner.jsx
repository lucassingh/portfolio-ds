import React from 'react';
import styled from 'styled-components';
import { PText, ButtonPrimary } from '../components'
import Reveal from './Reveal';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: ${({ theme }) => theme.colors.fifth};
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
    return (

        <ContactBannerStyles>
            <div className="container">
                <div className="contactBanner__wrapper">
                    <Reveal>
                        <PText>What's on your mind?</PText>
                        <h3 className="contactBanner__heading">Let me help you</h3>
                        <ButtonPrimary btnText="Contact Now" btnLink="/contact" />
                    </Reveal>
                </div>
            </div>
        </ContactBannerStyles>

    );
}
import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';
import Reveal from './Reveal';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: ${({ theme }) => theme.colors.fifth};
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.secondary}
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
    return (
        <MapStyles>
            <div className="container">
                <div className="map__card">
                    <Reveal>
                        <h3 className="map__card__heading">I am here !</h3>
                        <PText>Venado Tuerto, Santa Fe, Argentina</PText>
                        <a
                            className="map__card__link"
                            href="https://goo.gl/maps/iJakYCMJZvQkbf1eA"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Open in google maps
                        </a>
                    </Reveal>
                </div>
            </div>
        </MapStyles>
    );
}
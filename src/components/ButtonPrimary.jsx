import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
        props.outline ? 'transperant' : `${({ theme }) => theme.colors.secondary}`};
    padding: 0.7em 2em;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function ButtonPrimary({
    btnText = 'test',
    btnLink = 'test',
    outline = false,
    target = false
}) {
    return (
        <ButtonStyle outline={outline} className="button-wrapper">

            {
                target ? (
                    <a href={btnLink} className="button" rel="noopener noreferrer">
                        {btnText}
                    </a>
                ) : (
                    <a href={btnLink} target='_blank' className="button" rel="noopener noreferrer">
                        {btnText}
                    </a>
                )
            }

        </ButtonStyle>
    );
}
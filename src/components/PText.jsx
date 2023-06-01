import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.6rem;
  line-height: 1.3em;
  color:${({ theme }) => theme.colors.secondary};
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PText = ({ children }) => {
    return (
        <PStyle className="para">
            <p>{children}</p>
        </PStyle>
    );
}

export default PText;
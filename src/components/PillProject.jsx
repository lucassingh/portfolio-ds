import React from 'react';
import styled from 'styled-components';

const Pill = styled.div`
  padding: 7px;
  font-size: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  color:${({ theme }) => theme.colors.secondary};
`;

const PillProject = ({ title }) => {
    return (
        <Pill className='pill'>
            {title}
        </Pill>
    )
}

export default PillProject
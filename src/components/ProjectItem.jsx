import React from 'react';
import styled from 'styled-components';
import Reveal from './Reveal';

const Card = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    color:${({ theme }) => theme.colors.secondary};
    height: 200px;
    margin-bottom: 20px;
    .card-header {
        padding: 10px;
        display: flex;
        justify-content: center;
        -webkit-box-align: center;
        align-items: end;
        flex-direction: column;
        transition: transform 250ms ease 0s;
        border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
        h2 {
            font-size: 2rem;
        }
        span {
            margin-top: 5px;
            font-size: 12px;
        }
    }
    .card-header:hover{
        transform: translateY(-5px);
    }
    .card-body {
        padding: 10px;
        display: flex;
        justify-content: right;
        align-items: center;
        height: 100%;
        .link {
            margin-right: 15px;
        }
    }
  
    @media only screen and (min-width: 768px) {
        width: 250px;
        margin-right: 20px;
    }
`;

export default function ProjectItem({ title, subtitle, link1, link2, link3, link4 }) {
    return (
        <Card>
            <Reveal>
                <a href={link1} target="_blank" rel="noopener noreferrer">
                    <div className='card-header'>
                        <h2>{title}</h2>
                        <span>{subtitle}</span>
                    </div>
                </a>
            </Reveal>
            <div className='card-body'>
                <a className='link' href={link2} target="_blank" rel="noopener noreferrer">MEDIUM</a>
                <a className='link' href={link3} target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a className='link' href={link4} target="_blank" rel="noopener noreferrer">lINKEDiN</a>
            </div>
        </Card>
    );
}
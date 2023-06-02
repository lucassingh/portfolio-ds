import React from 'react';
import styled from 'styled-components';
import { BsDownload, BsGithub, BsMedium } from 'react-icons/bs'


const Card = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    color:${({ theme }) => theme.colors.secondary};
    height: 200px;
    margin-bottom: 20px;
    .card-header {
        padding: 10px;
        display: flex;
        justify-content: right;
        align-items: center;
        height: 70%;
        transition: transform 250ms;
        border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
        h2 {
            font-size: 2.5rem;
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
        height: 30%;
        .link {
            margin-right: 15px;
        }
        .icon-link {
            font-size: 25px;
        }
    }
  
    @media only screen and (min-width: 768px) {
        width: 250px;
        margin-right: 20px;
    }
`;

export default function ProjectItem() {
    return (
        <Card>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                <div className='card-header'>
                    <h2 >Project-1</h2>
                </div>
            </a>
            <div className='card-body'>
                <a className='link' href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><BsMedium className='icon-link' /></a>
                <a className='link' href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><BsGithub className='icon-link' /></a>
                <a className='link' href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><BsDownload className='icon-link' /></a>
            </div>
        </Card>
    );
}
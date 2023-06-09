import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyle = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.secondary}
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function FooterCol({
    heading = 'Col Heading',
    links = [
        {
            type: 'Link',
            title: 'Home',
            path: '/home',
        },
        {
            type: 'Link',
            title: 'About',
            path: '/about',
        },
    ],
}) {
    return (
        <ColStyle>
            <h2 className="heading">{heading}</h2>
            <ul>
                {links.map((item, index) => (
                    <li key={index}>
                        {item.type === 'Link' ? (
                            <Link to={item.path}>{item.title}</Link>
                        ) : (
                            <a href={item.path} target="_blank" rel="noopener noreferrer">
                                {item.title}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </ColStyle>
    );
}
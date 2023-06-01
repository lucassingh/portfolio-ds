import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 3px solid ${({ theme }) => theme.colors.secondary};
    img {
      height: 100%;
    }
    .hero__social__text_card {
        ul li a {
            color: ${({ theme }) => theme.colors.secondary};
            font-size: 20px;
        }
        li {
            padding-bottom: 10px;
        }
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.colors.fifth};
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.secondary}
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    color: ${({ theme }) => theme.colors.secondary};
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
    img = ProjectImg,
    title = 'Project Name',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
    return (
        <ProjectItemStyles>
            <Link to="/projects" className="projectItem__img">
                <h3 className="projectItem__title">{title}</h3>
                <div className="hero__social__text_card">
                    <ul>
                        <li>
                            <a
                                href="http://facebook.com/webcifar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GH
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://twitter.com/webcifar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ME
                            </a>
                        </li>
                    </ul>
                </div>
            </Link>
        </ProjectItemStyles>
    );
}
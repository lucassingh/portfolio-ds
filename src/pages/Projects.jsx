import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';
import '../styles/components/gallery-filter.css'
import pillsData from '../assets/data/pillsData';
import PillProject from '../components/PillProject';

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 3rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: ${({ theme }) => theme.colors.fifth};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {

    const [projectsData] = useState(ProjectsInfo);

    return (
        <>
            <ProjectStyle>
                <div className="container">
                    <SectionTitle
                        heading="Projects"
                        subheading="some of my recent works"
                    />
                    <div className='container-pills'>
                        {
                            pillsData.map((item) => (
                                <PillProject key={item.id} title={item.title}/>
                            ))
                        }
                    </div>
                    <div className='projects-gallery'>
                        {
                            projectsData.map((item) => (
                                <ProjectItem key={item.id}/>
                            ))
                        }
                    </div>                    
                </div>
            </ProjectStyle>
        </>
    );
}
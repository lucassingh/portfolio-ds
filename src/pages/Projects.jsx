import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';
import '../styles/components/gallery-filter.css'
import { motion } from "framer-motion"

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

const Pill = styled.button`
  padding: 7px;
  font-size: 1.5rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  color:${({ theme }) => theme.colors.secondary};
`;

export default function Projects() {

    const [projectsData, setProjectsData] = useState([]);

    const [collection, setCollection] = useState([])

    useEffect(() => {
        setProjectsData(ProjectsInfo)
        setCollection([...new Set(ProjectsInfo.map((item) => item.category))])
    }, [])

    const gallery_filter = (itemData) => {
        const filterData = ProjectsInfo.filter((item) => item.category === itemData);
        setProjectsData(filterData);
    }

    return (
        <>
            <ProjectStyle>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <SectionTitle
                            heading="Projects"
                            subheading="some of my recent works"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <div className='container-pills'>
                            <Pill onClick={() => setProjectsData(ProjectsInfo)}>All</Pill>
                            {
                                collection.map((item) => (
                                    <Pill key={item} onClick={() => { gallery_filter(item) }}>
                                        {item}
                                    </Pill>
                                ))
                            }
                        </div>
                    </motion.div>
                    <div className='projects-gallery'>
                        {
                            projectsData.map((item) => (
                                <ProjectItem
                                    key={item.id}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    git={item.git}
                                    medium={item.medium}
                                    link1={item.link1}
                                    link2={item.link2}
                                    link3={item.link3}
                                    link4={item.link4}
                                />
                            ))
                        }
                    </div>
                </div>
            </ProjectStyle>
        </>
    );
}
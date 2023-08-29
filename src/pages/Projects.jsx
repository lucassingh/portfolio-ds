import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';
import '../styles/components/gallery-filter.css';
import img from '../assets/images/arquitectura-1.png';
import { motion } from "framer-motion"
import Reveal from '../components/Reveal';

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
  .cont-title {
    margin-top: 50px;
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

const ProjectBG = styled.div`
    width: 100%;
    background: none;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 7px;
    margin-top: 60px;
    color:${({ theme }) => theme.colors.secondary};
    margin-bottom: 20px;
    .header {
        h3 {
            font-size: 30px;
            padding: 10px;
        }
    }
    .body {
        padding: 10px;
        border-top: 1px solid ${({ theme }) => theme.colors.secondary};
        span {
            font-size: 15px;
        }
    }
    .footer {
        padding: 30px 10px;
        border-top: 1px solid ${({ theme }) => theme.colors.secondary};
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .link {
            margin-left: 15px;
            font-size: 18px;
        }
    }
`

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

    const [collection, setCollection] = useState([]);

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
                            subheading="Big Data and Azure cloud"
                        />
                    </motion.div>
                    <motion.div>
                        <ProjectBG>
                            <Reveal>
                                <div className='header'>
                                    <h3>Azure F1 Big Data project</h3>
                                </div>
                            </Reveal>
                            <div className='body'>
                                <span>
                                    This project is developed using the Azure Cloud Databricks service. It seeks to analyse the statistics of the entire Formula 1 history provided by Ergast API. <a href="http://ergast.com/mrd/">Visit API here.</a>
                                    <br />
                                    In addition to the power of Databricks we used the services of Securing credentials, securing secrets, Azure Key Vault Data provided by Azure cloud.
                                    Databricks File System (DBFS) was used for the storage of the data, which worked as follows Delta Lake for entire application.
                                </span>
                                <img src={img} alt="arq" style={{ marginTop: 12 }} />
                            </div>
                            <div className='footer'>
                                <a className='link' href="google.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>

                                <a className='link' href="https://github.com/lucassingh/big-data-f1/tree/main" target="_blank" rel="noopener noreferrer">GITHUB</a>
                            </div>
                        </ProjectBG>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <div className='cont-title'>
                            <SectionTitle
                                heading="Projects"
                                subheading="Data Science, visualization and Python"
                            />
                        </div>
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
                                    category={item.category}
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
import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs'
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import { motion } from "framer-motion"
import Reveal from './Reveal';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
    return (
        <ContactSectionStyle>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                >
                    <SectionTitle heading="contact" subheading="get in touch" />
                </motion.div>
                <div className="contactSection__wrapper">
                    <div className="left">
                        <Reveal>
                            <ContactInfoItem icon={<BsLinkedin />} text="LinkedIn" link='https://www.linkedin.com/in/lucassingh/' />
                            <ContactInfoItem icon={<BsGithub />} text="GitHub" link='https://github.com/lucassingh' />
                            <ContactInfoItem icon={<BsMedium />} text="Medium" link='' />
                        </Reveal>
                    </div>
                    <div className="right">
                        <Reveal>
                            <ContactInfoItem icon={<MdLocalPhone />} text="+5493462565888" />
                            <ContactInfoItem icon={<MdEmail />} text="lucas.singh10@gmail.com" />
                            <ContactInfoItem text="Venado Tuerto, Santa Fe,  Argentina" link='https://goo.gl/maps/iJakYCMJZvQkbf1eA' />
                        </Reveal>
                    </div>
                </div>
            </div>
        </ContactSectionStyle>
    );
}
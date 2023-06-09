import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { RiMenu5Fill} from "react-icons/ri";

const NavStyles = styled.nav`
position: fixed;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 10px 0px rgba(15,15,15,0.50);
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      &:hover {
        background-color: ${({ theme }) => theme.colors.fifth};
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.secondary};
      outline: none;
    }
    .active {
        color: ${({ theme }) => theme.colors.third};
    }    
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media only screen and (max-width: 768px) {
    border-bottom: none;
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background: ${({ theme }) => theme.colors.fifth};
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.primary}
      }
    }
  }
`;

export default function NavMenu() {
    const [showNav, setShowNav] = useState(false);
    return (
        <NavStyles>
            <div
                className="mobile-menu-icon"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
            >
                <RiMenu5Fill />
            </div>

            <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
                <div
                    className="closeNavIcon"
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdClose />
                </div>
                <li>
                    <NavLink
                        to="/"
                        exact
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </NavStyles>
    );
}
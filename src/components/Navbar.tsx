import React from 'react';
import styled from 'styled-components';

const Theme = {
    colors: {
      bg: `#fff`,
      dark: `#24292e`,
      light: `#EEEEEE`,
      red: `#ff5851`,
    },
    fonts: {
      body: `IBM Plex Sans, sans-serif`,
      heading: `IBM Plex Sans, sans-serif`,
    }
}

const Navbar = styled.nav`
  margin: 0px;
  background: ${Theme.colors.dark};
  font-family: ${Theme.fonts.heading};
  color: ${Theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  a { color: white; text-decoration: none; }`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;`;

const Li = styled.li`
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  display: flex;
  font-size: 14px;
  height: 30px;
  line-height: 16px;
  margin: 0 10px ;
  white-space: nowrap;`;

const StyledNavbar = (props: {
    nav: Array<{ name: string; to: string }>
    social: Array<{ name: string, to: string }>
  }) => {
    const { nav, social } = props;
    const NavLinks: any = () => nav.map((link: { name: string, to: string }) => <Li key={link.name}><a href={link.to}>{link.name}</a></Li>);
    const SocialLinks: any = () => social.map((link: { name: string, to: string }) => <Li key={link.name}><a href={link.to}>{link.name}</a></Li>);
    return (
      <Navbar>
        <Ul>
          <NavLinks />
        </Ul>
        <Ul>
          <SocialLinks />
        </Ul>
      </Navbar >
    )
};

export default StyledNavbar;
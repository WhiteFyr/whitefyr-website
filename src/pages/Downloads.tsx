import React from 'react';
import StyledNavbar from '../components/Navbar';
import styled from 'styled-components';

const navigation = {
    brand: { name: "WhiteFyr", to: "/" },
    links: [
      { name: "About Me", to: "/about" },
      { name: "Builds", to: "/builds" },
      { name: "Downloads", to: "/downloads" },
      { name: "Contact Me", to: "/contact" },
    ]
}

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
  height: 50px;
  line-height: 16px;
  margin: 0 10px ;
  white-space: nowrap;`;

const Downloads = () => {
    return (           
        <div className="Downloads">
            <StyledNavbar brand={navigation.brand} links={navigation.links}/> 
            <h1>All World Downloads (2015-Present)</h1>
        
            <h2>Survival Heights Season 2:</h2>
            <Ul>
                <Li><a href="https://www.mediafire.com/file/f5rc9ge430ngcja/SurvivalHeightsS2_1500Days_Download.zip/file" target="_blank" rel="noopener noreferrer">1500 Days Tour</a></Li>
                <Li><a href="https://www.mediafire.com/file/qbac6gwn12fqawv/SurvivalHeightsS2_1000Days_Download.zip/file" target="_blank" rel="noopener noreferrer">1000 Days Tour</a></Li>
                <Li><a href="https://www.mediafire.com/file/f5rc9ge430ngcja/SurvivalHeightsS2_500Days_Download.zip/file" target="_blank" rel="noopener noreferrer">500 Days Tour</a></Li>
            </Ul>
        
            <h2>White's World (Amplified):</h2>
            <Ul>
                <Li><a href="https://www.mediafire.com/file/8bwixwhmrmzpi14/White%2527s_World_1_14_4.zip/file" target="_blank" rel="noopener noreferrer">White's World - Tour (1.14.4)</a></Li>
                <Li><a href="https://www.mediafire.com/file/evr7vv78oo513o3/White%2527s_World_1_12_2.zip/file" target="_blank" rel="noopener noreferrer">White's World - Tour (1.12.2)</a></Li>
                <Li><a href="https://www.mediafire.com/file/juzpc3fdxaqd2wc/White%2527s_World_-_Final_Download.zip/file" target="_blank" rel="noopener noreferrer">Series End Download</a></Li>
                <Li><a href="https://www.mediafire.com/file/9k22znx341aa3dr/White%2527s_World_-_025_Download.zip/file" target="_blank" rel="noopener noreferrer">Episode 25 Download</a></Li>
            </Ul>
        
            <h2>White's Wonderous Minecraft World:</h2>
            <Ul>
                <Li><a href="https://www.mediafire.com/file/twi6h4av1vbxbp0/White%2527s_Wonderous_MC_World_-_Final_World_Download.zip/file" target="_blank" rel="noopener noreferrer">Final World Download</a></Li>
                <Li><a href="https://www.mediafire.com/file/tj377u9jy4hlu2o/White%2527s_Wonderous_MC_World_Ep_100_World_Download.zip/file" target="_blank" rel="noopener noreferrer">Episode 100 Download</a></Li>
                <Li><a href="https://www.mediafire.com/file/dh959d95l3i9nsn/White%2527s_Wonderous_MC_World_-_Ep_075_Download.zip/file" target="_blank" rel="noopener noreferrer">Episode 75 Download</a></Li>
                <Li><a href="https://www.mediafire.com/file/wbl9v4a59wwn32p/White%2527s_Wonderous_MC_World.rar/file" target="_blank" rel="noopener noreferrer">Episode 50 Download</a></Li>
            </Ul>
        </div>
    )
};

export default Downloads;
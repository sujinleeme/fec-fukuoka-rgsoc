import React, { Component } from 'react';
import styled from 'styled-components';
import { Head } from 'mdx-deck'

const color = {
  main: '#006076',
  second: '#48bdcc',
  lightgray: '#eee'
}

export const Header = () =>
  <Head>
    <title>Sujin Lee - frontend-conf.fukuoka </title>
    <meta property="og:url"                content="https://sujinleeme.github.io/fec-fukuoka-rgsoc" />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content="Rails Girls Summer of Code : 3 months journey of contributing to babel.js" />
    <meta property="og:description"        content="Lightening Talk | Frontend Conference Fukuoka 2018" />
    <meta property="og:image"              content="https://sujinlee.me/content/images/2018/12/fec-fukuoka-rgsoc.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name='twitter:site' content='@sujinleeme' />
    <meta name='twitter:title' content='Rails Girls Summer of Code : 3 months journey of contributing to babel.js' />
    <meta name='twitter:description' content='Lightening Talk | Frontend Conference Fukuoka 2018' />
    <meta name="twitter:image" content="https://sujinlee.me/content/images/2018/12/fec-fukuoka-rgsoc.png" />
    <link href="https://fonts.googleapis.com/css?family=Allerta+Stencil|Open+Sans" rel="stylesheet" /> 
  </Head>

export const Body = styled.div`
  fontSize: '0.5em',
  margin: '0.4em 0',
  lineHeight: '1.5em'
`

export const TwitterBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const CenterBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Code = styled.div`
  display: flex;
`;

export const ConfBrandBar = () =>
  <TitleBox>Lightening Talk | Frontend Conference Fukuoka 2018</TitleBox>

const TitleBox = styled.div`
  width: 800px;
  background-image: linear-gradient(90deg,#006076,#11c4cb);
  padding: 4px 0;
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0 50px 0;
`
export const BabelCompilerDiagram = () => (
  <div>
    <Row height="80px">
      <InnerBoxSecond>
        <InnerBoxTitleSecond>babylon</InnerBoxTitleSecond>
      </InnerBoxSecond>
      <InnerBoxSecond>
        <InnerBoxTitleSecond>JSX transform</InnerBoxTitleSecond>
      </InnerBoxSecond>
      <InnerBoxSecond>
        <InnerBoxTitleSecond>babel-generator & prettier</InnerBoxTitleSecond>
      </InnerBoxSecond>
    </Row>

    <Row>
      <InnerBox>
        <InnerBoxTitle>Parser</InnerBoxTitle>
        <InnerBoxBody>Code → AST</InnerBoxBody>
      </InnerBox>
      <InnerBox>
        <InnerBoxTitle>Transformer(s)</InnerBoxTitle>
        <InnerBoxBody>AST → AST</InnerBoxBody>
        <InnerBoxBody>(Plugins/Presets)</InnerBoxBody>
      </InnerBox>
      <InnerBox>
        <InnerBoxTitle>Generator</InnerBoxTitle>
        <InnerBoxBody>AST → Code</InnerBoxBody>
      </InnerBox>
    </Row>

    <Row>
      <InnerBoxSecond>
        <InnerBoxTitleSecond>String(input.js)</InnerBoxTitleSecond>
        <InnerBoxBody>
          <code>{"<br />"}</code>
        </InnerBoxBody>
      </InnerBoxSecond>
      <InnerBoxSecond>
        <InnerBoxTitleSecond>ASTs(JSON)</InnerBoxTitleSecond>
        <InnerBoxBody>
          <code>{' { "type": "JSXElement",}'}</code>
        </InnerBoxBody>
      </InnerBoxSecond>
      <InnerBoxSecond>
        <InnerBoxTitleSecond>String(output.js)</InnerBoxTitleSecond>
        <InnerBoxBody>
          <code>{'h("br")'}</code>
        </InnerBoxBody>
      </InnerBoxSecond>
    </Row>
  </div>
);



export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: ${props => props.height || "130px"};
  width: ${props => props.width || "100%"};
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: ${props => props.height || "130px"};
  width: 100%;
  font-size: 0.8em;
`;




const InnerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  display: column;
  align-items: center;
  margin: 5px;
  height: 100%;
  width: 220px;
  border: 2px solid ${color.second};
  border-radius: 6px;
  font-size: 20px;
`;

const InnerBoxTitle = styled.div`
  display: block;
  width: 100%;
  font-weight: 700;
  background: #d3fff6;
  padding: 15px 0;
  text-align: center;
  line-height: 1;
  position: relative;
  z-index: -1;  
  margin-bottom: 5px;
`;

const InnerBoxBody = styled.div`

`;


const InnerBoxSecond = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  display: column;
  align-items: center;
  margin: 5px;
  height: 100%;
  width: 200px;
  color: ${color.second};
  border: 0px solid ${color.second};
  border-radius: 6px;
  font-size: 20px;
`;

const InnerBoxTitleSecond = styled.div`
  display: block;
  width: 100%;
  font-weight: 700;
  padding: 15px 0;
  text-align: center;
  line-height: 1;
  position: relative;
  z-index: -1;  
  margin-bottom: 5px;
`;

export const MoreInfo = styled.div`
  background: ${color.lightgray};
  padding: 5px;
  border-radius: 6px;
  font-size: 0.8em;
`;

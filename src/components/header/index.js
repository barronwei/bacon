import React from 'react';
import styled from 'styled-components'

const Head = styled.div`
  height: 1em;
  width: 100%;
  font-size: 1.5em;
  color: white;
  background: black;
  padding: 5vh 2vw;
  font-family: 'Helvetica Neue';
`


export default class Header extends React.Component {


  render(){
    
    return (
      <a href='/'>
      <Head>
        Bacon 🥓
      </Head>
      </a>
      
    )
    
  }


}
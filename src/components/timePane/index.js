import React from 'react';
import TimeDropdown from './styled/TimeDropdown'
import styled from 'styled-components';
import styledMap from 'styled-map'

const Text = styled.p`
  text-align: center;
  font-size: ${styledMap`
    header: 2rem;
    caption: 1rem;
  `}
  color: ${styledMap`
    header: #000000;
    caption: #AFAFAF;
  `}
`

const DropDownContainer = styled.div`
  margin: 0px 100px;  
`



const TimePane = () => {
  return (
    <div>
      <Text header>Which Times Work?</Text>

      <DropDownContainer>
        <Text>Earliest Time</Text>
        <TimeDropdown />

        <br />
        
        <Text>Latest Time</Text>
        <TimeDropdown startTime={false} />
      </DropDownContainer>



    </div>
  )

}

export default TimePane;
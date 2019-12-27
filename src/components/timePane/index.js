import React, {useState} from 'react'
import TimeDropdown from './styled/TimeDropdown'
import styled from 'styled-components'
import styledMap from 'styled-map'
import { Button, Icon } from 'semantic-ui-react'

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
  margin: 10vmin 100px 100px 100px;  
`

const ButtonContainer = styled.div`
  margin-top: 20vmin;
  justify-content: center;
  align-items: center;
  display: flex;
`


const TimePane = ({startTime, setStartTime, setEndTime}) => {

  return (
    <div>
      <Text header>Which Times Work?</Text>

      <DropDownContainer>
        <Text>Earliest Time</Text>
        <TimeDropdown setTime={setStartTime} />

        <br/>

        <Text>Latest Time</Text>
        <TimeDropdown startTime={false} initialTime={startTime} setTime={setEndTime}/>
      </DropDownContainer>

      <ButtonContainer>
        <Button animated>
          <Button.Content visible>Create Event</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
      </ButtonContainer>
    </div>
  )

}

export default TimePane;
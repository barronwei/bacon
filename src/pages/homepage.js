import React from 'react';
import Input from '../components/input';
import DatePicker from '../components/datePicker'
import TimePane from '../components/timePane'
import styled from 'styled-components'



const HalfPaneContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`


const homePage = () => {

  return (
    <div>
      <Input />
      <div>

        <HalfPaneContainer>
          <DatePicker />
          <TimePane />
        </HalfPaneContainer>

      </div>




    </div>
  )
}

export default homePage;


import React, {useState} from 'react';
import Input from '../components/Input';
import DatePicker from '../components/DatePicker'
import TimePane from '../components/TimePane'
import styled from 'styled-components'



const HalfPaneContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`

const HomePage = () => {

  const [dateRange, setDateRange] = useState([]);

  return (
    <div>
      <Input />
      <div>

        <HalfPaneContainer>
          <DatePicker setDateRange={setDateRange}/>
          <TimePane />
        </HalfPaneContainer>

      </div>
    </div>
  )
}

export default HomePage;


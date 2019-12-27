import React, { useState } from 'react';
import Input from '../components/Input';
import DatePicker from '../components/DatePicker'
import TimePane from '../components/TimePane'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const HalfPaneContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`

let title = '';
let dateRange = {};
let startTime = undefined;
let endTime = undefined;

const HomePage = () => {

  const history = useHistory();

  const onSubmit = () => {

    if (title.length < 3) {
      alert('Please pick a longer event title');

    } else if (startTime === undefined || endTime === undefined) {
      alert('Please pick a time range');

    } else if (!dateRange.hasOwnProperty('startTime') || !dateRange.hasOwnProperty('endTime')) {

      alert('Please pick a date range!');
    } else {

      console.log({ title, dateRange, startTime, endTime })


      history.push({
        pathname: 'redirect',
        state: { title, dateRange, startTime, endTime }
      });
    }
  }




  return (
    <div>
      <Input
        value={title}
        onChange={e => { title = e.target.value }}
      />
      <div>

        <HalfPaneContainer>
          <DatePicker setDateRange={map => {
            dateRange = {startTime: map.start, endTime: map.end}
          }} />
          <TimePane
            startTime={startTime}
            setStartTime={x => { console.log(x); startTime = x }}
            setEndTime={x => { endTime = x }}
            onSubmit={onSubmit}

          />
        </HalfPaneContainer>

      </div>
    </div>
  )
}

export default HomePage;


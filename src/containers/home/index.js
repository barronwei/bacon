import React, { useState } from 'react';
import Input from '../../components/Input';
import DatePicker from '../../components/DatePicker'
import TimePane from '../../components/TimePane'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { alertListValidator } from '../../utils/validators';
import axios from 'axios';
import addHours from 'date-fns/add_hours'
import { dateToSeconds } from '../../utils/date';
import request from '../../utils/requests'


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

  //validators and their respective messages 


  const messages = [
    'Please pick a longer event title',
    'Please pick a time range',
    'Please pick a valid time range',
    'Please pick a date range!'
  ]

  const onSubmit = () => {

    const validators = [
      title.length < 3,
      startTime === undefined || endTime === undefined,
      startTime >= endTime,
      !dateRange.hasOwnProperty('startTime') || !dateRange.hasOwnProperty('endTime')
    ]

    if (alertListValidator(validators, messages)) {
      return;

    } else {

      const timeRange = [addHours(dateRange.startTime, startTime), addHours(dateRange.endTime, endTime)].map(dateToSeconds)

      const data = {
        "user": "",
        "pw": "",
        "name": title,
        "when": timeRange
      }

      const callback = res => history.push({
        pathname: res.data,
        state: { title, dateRange, startTime, endTime }
      });


      //make the request to generate a new event
      request(
        {
          method: 'post',
          path: 'newmeetings',
          data,
          callback
        }
      )
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
            dateRange = { startTime: map.start, endTime: map.end }
          }} />
          <TimePane
            startTime={startTime}
            setStartTime={x => { startTime = x }}
            setEndTime={x => { endTime = x }}
            onSubmit={onSubmit}

          />
        </HalfPaneContainer>

      </div>
    </div>
  )
}

export default HomePage;


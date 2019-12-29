import React, { useState } from 'react';
import Input from '../../components/Input';
import DatePicker from '../../components/DatePicker'
import TimePane from '../../components/TimePane'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { alertValidator, alertListValidator } from '../../utils/validators';
import axios from 'axios';
import addHours from 'date-fns/add_hours'


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

      const timeRange = [addHours(dateRange.startTime, startTime), addHours(dateRange.endTime, endTime)];


      axios({
        method: 'post',
        url: 'https://bacon-api.herokuapp.com/newmeetings',
        headers: {
          'Content-Type': 'application/json'
        },

        data: {
          "user": "",
          "pw": "",
          "name": title,
          "when": [new Date(), new Date()]
        }
      }).then(function (response) {
        alert(response);
      })
        .catch(function (error) {
          alert('There was an error in creating your event');
          console.log(error);
        });


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


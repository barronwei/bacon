import React from 'react';
import Input from '../../components/input';
import DatePicker from '../../components/datePicker'
import TimePane from '../../components/timePane'
import { alertListValidator } from '../../utils/validators';
import { HalfPaneContainer } from './styled';
import addHours from 'date-fns/add_hours'
import { dateToSeconds } from '../../utils/date';
import request from '../../utils/requests'

// Contains the home page
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);


    // contains all the information about the meeting
    this.meeting = {
      title: '',
      dateRange: {},
      startTime: undefined,
      endTime: undefined
    }

    this.validators = [
      this.meeting.title.length < 3,
      this.meeting.startTime === undefined || this.meeting.endTime === undefined,
      this.meeting.startTime >= this.meeting.endTime,
      !this.meeting.dateRange.hasOwnProperty('startTime') || !this.meeting.dateRange.hasOwnProperty('endTime')
    ];

    this.messages = [
      'Please pick a longer event title',
      'Please pick a time range',
      'Please pick a valid time range',
      'Please pick a date range!'
    ]
  }

  onSubmit = () => {
    
    const {title, dateRange, startTime, endTime} = this.meeting;


    if (alertListValidator(this.validators, this.messages)) {
      return;

    } else {

      //gets the time range in seconds
      const timeRange = [addHours(dateRange.startTime, startTime), addHours(dateRange.endTime, endTime)].map(dateToSeconds)

      const data = {
        "Name": title,
        "When": timeRange
      }

      const callback = res => {
        this.props.history.push({
          pathname: res.data,
          state: this.meeting
        });
      }


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





  changeTitle = e => {
    this.meeting.title = e.target.value;
  }

  setDateRange = map => {
    this.meeting.dateRange = { startTime: map.start, endTime: map.end }
  }

  setTimes = key => time => { this.meeting[key] = time }

  render() {

    return (

      <div>
        <Input
          value={this.meeting.title}
          onChange={this.changeTitle}
        />
        <div>

          <HalfPaneContainer>
            <DatePicker setDateRange={this.setDateRange} />
            <TimePane
              startTime={this.meeting.startTime}
              setStartTime={this.setTimes(this.meeting.startTime)}
              setEndTime={this.setTimes(this.meeting.endTime)}
              onSubmit={this.onSubmit}

            />
          </HalfPaneContainer>

        </div>
      </div>
    )
  }


}




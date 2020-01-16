import React, { useEffect } from 'react';

import Text from '../../components/text/text';
import LeftSignIn from './leftSignIn'
import SelectorContainer from './individual'
import { useDispatch, useSelector } from 'react-redux';
import { pathToURL } from '../../utils/requests'
import { loadMeetingState } from '../../redux/actions'
import { secondsToDate } from '../../utils/date';
import request from '../../utils/requests';
import { dateToSeconds } from '../../utils/date';
import Header from '../../components/header';
import {HalfPaneContainer} from '../styled'

const saveSelection = selection => {

  // convert to desired format
  let sortedSelection = [...selection].map(dateToSeconds);

  request({
    method: 'post',
    url: 'setmeetings',
    data: {

      When: sortedSelection
    }
  })
}


const getSchedulerProps = (meetingState) => {
  console.log(meetingState);

  const timeRange = meetingState.When.map(secondsToDate);
  const [minTime, maxTime] = timeRange.map(x => x.getHours());
  const startDate = timeRange[0];

  //add one to acocunt for difference, ceil to account for extraneous days
  const numDays = Math.ceil((timeRange[1] - timeRange[0]) / (1000 * 60 * 60 * 24)) + 1


  return ({
    minTime,
    maxTime,
    numDays,
    startDate
  })
}



const SchedulePage = ({ match }) => {
  const meetingID = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchMeetingData = async () => {

      try {
        let res = await fetch(pathToURL(meetingID));
        const meetingInfo = await res.json();
        dispatch(loadMeetingState(meetingInfo));
      } catch (e) {
        alert('Failed to find meeting');
        console.error(e);
      }

    }

    fetchMeetingData();
  }, []);


  let meetingState = useSelector(state => state.selection.meetingState)
  let currentUser = useSelector(state => state.selection.currentUser)

  // loading page is blank
  if (!meetingState) {
    return (<div />)
  }

  const scheduleProps = getSchedulerProps(meetingState);

  return (
    <div>

      <Header />

      <Text header>
        {meetingState.Name}
      </Text>

      <HalfPaneContainer>

        <LeftSignIn

          {...scheduleProps}
        />

        <SelectorContainer
          name='Group'
          selectMode={false}
          {...scheduleProps}
        />
      </HalfPaneContainer>

    </div>
  )

}

export default SchedulePage;

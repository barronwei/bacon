import React, { useEffect } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text/Text';
import LeftSignIn from './leftSignIn'
import SelectorContainer from './selectorContainer'
import {useDispatch, useSelector} from 'react-redux';
import { pathToURL } from '../../utils/requests'
import {loadMeetingState} from '../../redux/actions'
import {secondsToDate} from '../../utils/date';

const HalfPaneContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`

const getSchedulerProps = (meetingState) => {
  console.log(meetingState)

  const timeRange = meetingState.When.map(secondsToDate);
  const [minTime, maxTime] = timeRange.map(x=>x.getHours());
  const startDate = timeRange[0];
  
  //add one to acocunt for difference, ceil to account for extraneous days
  const numDays = Math.ceil((timeRange[1] - timeRange[0])/(1000 * 60 * 60 * 24)) +1

  console.log({
    minTime,
    maxTime,
    numDays,
    startDate
  })
    
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
      let res = await fetch(pathToURL(meetingID));
      let meetingInfo = await res.json();

      dispatch(loadMeetingState(meetingInfo));
    }

    fetchMeetingData();
  }, []);


  let meetingState = useSelector(state=>state.selection.meetingState)
  
  if (!meetingState){
    return (<div />)
  }

  const scheduleProps = getSchedulerProps(meetingState);
  
  return (
    <div>
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

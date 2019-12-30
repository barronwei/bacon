import React, { useEffect } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text/Text';
import LeftSignIn from './leftSignIn'
import SelectorContainer from './selectorContainer'
import {useDispatch, useSelector} from 'react-redux';
import { pathToURL } from '../../utils/requests'
import {loadMeetingState} from '../../redux/actions'

const HalfPaneContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`

const SchedulePage = ({ match }) => {
  const meetingID = match.params.id;
  const dispatch = useDispatch();


  let meetingStateLoaded = false;
  let title = 'New Meeting'
  

  useEffect(() => {

    const fetchMeetingData = async () => {
      let res = await fetch(pathToURL(meetingID));
      let meetingInfo = await res.json();

      dispatch(loadMeetingState(meetingInfo));
    }

    fetchMeetingData();
  }, []);


  let meetingState = useSelector(state=>state.selection.meetingState)
  
  return (
    <div>
      <Text header>
        {meetingState.Name}
      </Text>

      <HalfPaneContainer>

        <LeftSignIn state />

        <SelectorContainer
          name='Group'
          selectMode={false}
        />
      </HalfPaneContainer>

    </div>
  )

}

export default SchedulePage;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text/Text';
import LeftSignIn from './leftSignIn'
import SelectorContainer from './selectorContainer'
import axios from 'axios';
import { pathToURL } from '../../utils/requests'

const HalfPaneContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`

const SchedulePage = ({ match, title = 'Untitled Event' }) => {
  const meetingID = match.params.id;

  useEffect(() => {
    console.log(pathToURL(meetingID));

    const fetchMeetingData = async () => {

      let res = await fetch(pathToURL(meetingID));
      let meetingInfo = await res.json();
      
      console.log(meetingInfo);
    }

    fetchMeetingData();
  }, []);

  return (
    <div>
      <Text header>
        {title}
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

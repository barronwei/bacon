import React from 'react';
import styled from 'styled-components';

import Text from '../../components/Text/Text';

import LeftSignIn from './leftSignIn'


const HalfPaneContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`



const SchedulePage = ({ match, title = 'Untitled Event' }) => {

  const meetingID = match.params.id;
  let selection = new Set();

  return (
    <div>
      <Text header>
        {title}
      </Text>

      <HalfPaneContainer>

        <LeftSignIn state/>
        
        <div>
          <Text header>
            Group's Availabilities
          </Text>

          {/* <ScheduleSelector
            linear
            minTime={12}
            maxTime={20}
            numDays={7}
            selection={selection}
            dateFormat={'MMM D'}   
            dateCellHeight= {15}
            dateCellWidth= {50}
            offsetLeft={30}
            offsetTop={60}
            timeLabelMargin= {15}
          /> */}
        </div>

      </HalfPaneContainer>

    </div>
  )

}

export default SchedulePage;

// {
//   uuid: "i love foo",
//   meetingID: '234234svvsd',
//   password: "shalweflla",
//   avail: [[123124, 34323], [234323, 5533]],

// }

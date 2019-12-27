import React from 'react';
import styled from 'styled-components';
import FloatingInput from '../components/input/styled/FloatingInput'
import AnimatedIconButton from '../components/buttons/AnimatedIconButton'
import Text from '../components/text/Text';
import ScheduleSelector from '../components/ScheduleSelector';


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

        <div>
          <Text header>
            Sign In
          </Text>

          <Text caption>
            Enter your information so the group can identify you.
          </Text>

          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <FloatingInput placeholder='Enter Name' />
          </div>

          <div style={{ marginTop: '60px' }}>
            <AnimatedIconButton hasIcon={false} animated={false} label={'Sign in'} />
          </div>
        </div>

        <div>
          <Text header>
            Group's Availabilities
          </Text>
          
          <ScheduleSelector
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
          />
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

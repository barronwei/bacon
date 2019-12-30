import React from 'react'
import styled from 'styled-components'
import Text from '../../components/Text/Text';

import ScheduleSelector from '../../components/ScheduleSelector';


const ScheduleContainer = styled.div`
align-items: center; 
width: 100%; 
justify-content: center; 
align-self: center;
display: flex;
overflow-x: scroll;
&::-webkit-scrollbar {
  display: none;
}
`

const LeftPanel = styled.div`
align-items: center;
justify-content: center;
box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.3);
border-radius: 20px;
width: 50vw;
padding: 10px;
margin-top: 10px;
`





const SelectorContainer = (
  {
    name,
    selectMode = true,
    startDate = new Date(),
    numDays = 0,
    minTime = 0,
    maxTime = 23,
  }) => (
    <LeftPanel>
      <Text header>
        {`${name}'s Availabilities`}
      </Text>

      <ScheduleContainer>
        <ScheduleSelector
          selectMode={selectMode}
          linear
          minTime={minTime}
          maxTime={maxTime}
          numDays={numDays}
          startDate={startDate}
          selection={[]}
          dateFormat={'MMM D'}
          dateCellHeight={15}
          dateCellWidth={50}
          offsetLeft={30}
          offsetTop={60}
          timeLabelMargin={15}
        />
      </ScheduleContainer>
    </LeftPanel>
  )

export default SelectorContainer;

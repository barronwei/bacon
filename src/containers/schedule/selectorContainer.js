import React from 'react'
import styled from 'styled-components'
import Text from '../../components/Text/Text';

import ScheduleSelector from '../../components/ScheduleSelector';


const ScheduleContainer = styled.div`
margin-left: 10px;
align-items: center; 
width: 50vw; 
justify-content: center; 
display: flex;
`

const LeftPanel = styled.div`
align-items: center;
justify-content: center;
box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.3);
width: 50vw;
padding: 10px;
margin-top: 10px;
`

const SelectorContainer = ({ name, selectMode=true}) => (
<LeftPanel>
  <Text header>
    {`${name}'s Availabilities`}
  </Text>

  <ScheduleContainer>
    <ScheduleSelector
      selectMode={selectMode}
      linear
      minTime={12}
      maxTime={20}
      numDays={7}
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

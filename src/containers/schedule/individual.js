import React from 'react'
import Text from '../../components/text/text';
import request from '../../utils/requests'
import ScheduleSelector from '../../components/scheduleSelector';
import {dateToSeconds} from '../../utils/date'
import {ScheduleContainer, LeftPanel} from '../styled';

const saveSelection = selection => {
  
  // convert to desired format
  let sortedSelection = [...selection].map(dateToSeconds);

  request({
    method: 'post',
    url: 'setmeetings',
    data: {
      Name: '',
      ID: '',
      When: sortedSelection
    }
  })
  
}


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
          saveSelection={saveSelection}
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

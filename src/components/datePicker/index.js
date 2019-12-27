import React from 'react';
import InfiniteCalendar, { Calendar, withRange } from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import styled from 'styled-components';
import styledMap from 'styled-map'


const HeadContainer = styled.div`
  margin-left: 30px;
`

const CalendarContainer = styled.div`
  color: #00000;
  border-radius: 30px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.3);
`

const TextContainer = styled.p`
  text-align: center;
  font-size: ${styledMap`
    header: 2rem;
    caption: 1rem;
  `}
  color: ${styledMap`
    header: #000000;
    caption: #AFAFAF;
  `}
`


const datePicker = ({
  setDateRange  
}) => {

  const rangeCalendar = withRange(Calendar);
  let today = new Date();
  
  return (
    <HeadContainer>

      <div style={{width: '500px'}}>
        <TextContainer header>What Days Might Work?</TextContainer>
        <TextContainer caption>Click and drag to choose possibilities.</TextContainer>

        <CalendarContainer>
          <InfiniteCalendar
            Component={rangeCalendar}
            width={500}
            height={300}
            selected={false}
            onSelect={setDateRange}
            minDate={today}
            locale={{
              headerFormat: 'MMM Do',
            }}
          />
        </CalendarContainer>
      </div>
    </HeadContainer>
  )

}

export default datePicker;
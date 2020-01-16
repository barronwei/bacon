import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';


// Import only the methods we need from date-fns in order to keep build size small
import addHours from 'date-fns/add_hours'
import addDays from 'date-fns/add_days'
import startOfDay from 'date-fns/start_of_day'
import formatDate from 'date-fns/format'

import { Text, Subtitle } from './utils/typography'
import colors from './utils/colors'
// import selectionSchemes from './selection-schemes'
import { stringify, unstringify, between } from './utils/date-utils'
import { applyHighlight } from '../../redux/actions';


const formatHour = (hour) => {
  const h = hour === 0 || hour === 12 || hour === 24 ? 12 : hour % 12
  const abb = hour < 12 || hour === 24 ? 'am' : 'pm'
  return `${h}${abb}`
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  align-self: center;
`

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.dateCellWidth + 'px'};
`

export const GridCell = styled.div`
  margin: ${props => props.margin}px;
  touch-action: none;
  width: ${props => props.dateCellWidth + 'px'};
`

const handleQuarterCellBorder = quarter => {

  switch (quarter) {
    case 0:
      return "border-style: solid solid none solid";
    case 1:
      return "border-style: none solid solid solid";
    case 2:
      return "border-style: none solid none solid";
    case 3:
      return "border-style: none solid solid solid";
  }
}


const DateCell = styled.div`
  height: ${props => props.dateCellHeight + 'px'};
  width: ${props => props.dateCellWidth + 'px'};
  border-width: 0.2px;
  ${({ quarter }) => handleQuarterCellBorder(quarter)};
  margin: 0px 0px;
  background-color: ${props => (props.selected ? props.selectedColor : props.unselectedColor)};
`

const DateLabel = styled(Subtitle)`
  color: ${props => (props.dayOfWeek ? 'black' : '#00011F')};
  font-size: ${props => (props.dayOfWeek ? '1.3rem' : '1rem')};
  margin: 5px 0px;
  
  @media (max-width: 699px) {
    font-size: 12px;
  }
`

const TimeLabelCell = styled.div`
  position: relative;
  display: block;
  width: 30px;
  height: ${({ dateCellHeight }) => dateCellHeight * 4 + 'px'};
  text-align: center;
  display: flex;
  justify-content: center;
  margin-right: 3px;
  align-items: center;
`

const TimeText = styled(Text)`
  margin: 0;
  
  @media (max-width: 699px) {
    font-size: 10px;
  }
  text-align: right;
`


export const preventScroll = (e) => {
  e.preventDefault()
}

class ScheduleSelector extends React.Component {


  /**
   * If selector is merely in display mode, then we have it so that
   * it displays whatever is in selection props.
   * 
   * 
   */


  static defaultProps = {
    selection: [],
    numDays: 7,
    minTime: 9,
    maxTime: 23,
    startDate: new Date(),
    dateFormat: 'M/D',
    margin: 0,
    selectedColor: colors.blue,
    unselectedColor: colors.paleBlue,
    hoveredColor: colors.lightBlue,
    dateCellHeight: 15,
    dateCellWidth: 80,
    offsetLeft: 30,
    offsetTop: 60,
    timeLabelMargin: 15,
    selectMode: true,
    degreeColors: Array(8).map((_, x) => `rgba(89, 154, 242, ${x / 8})`),
    onCellHover: {},
    onChange: () => { }
  }


  

  constructor(props) {
    super(props);

    const { numDays, minTime, maxTime } = props;

    // Generate list of dates to render cells for
    const startTime = startOfDay(props.startDate)
    this.dates = [];

    for (let d = 0; d < numDays; d++) {
      const currentDay = []
      for (let h = minTime; h <= maxTime; h++) {
        for (let i = 0; i < 4; i++) {
          let currentTime = addHours(addDays(startTime, d), h + 0.25 * i);
          currentDay.push(currentTime);
        }
      }
      this.dates.push(currentDay)
    }

    this.state = {
      mouseX: 0,
      mouseY: 0,
      startCoord: [-1, -1],
    }

    // true if adding false if deleting
    this.addMode = false;
    this.mouseDown = false;
    
    this.highlighted = new Set();
  }

  shouldComponentUpdate() {
    return !this.props.selectMode || this.mouseDown === true;
  }

  startSelection = (dayIndex, timeIndex) => {
    if (dayIndex < 0 || timeIndex < 0) { 
      return;
    }

    this.mouseDown = true;
    this.addMode = !this.props.selected.has(stringify(dayIndex, timeIndex));

    this.setState({ startCoord: [dayIndex, timeIndex] });
  }

  endSelection = () => {

    const [xMin, yMin, xMax, yMax] = [Math.min(this.state.startCoord[0], this.state.mouseX), Math.min(this.state.startCoord[1], this.state.mouseY), Math.max(this.state.startCoord[0], this.state.mouseX), Math.max(this.state.startCoord[1], this.state.mouseY)]

    let highlighted = new Set();

    for (let x = xMin; x <= xMax; x++) {
      for (let y = yMin; y <= yMax; y++) {
        highlighted.add(stringify(x, y))
      }
    }

    this.props.dispatch(applyHighlight(highlighted, this.addMode))


    console.log('props selection', this.props.selected);
    this.props.saveSelection(this.props.selected);

    //resets the selection process
    this.setState({ startCoord: [-1, -1] })
    this.mouseDown = false;
  }



  // returns 
  coordToIndex = (x, y) => {
    return [Math.floor(x / this.props.dateCellWidth), Math.floor(y / this.props.dateCellHeight)]
  }


  renderTimeLabels = () => {
    const labels = [<DateLabel key={-1} />] // Ensures time labels start at correct location
    for (let t = this.props.minTime; t <= this.props.maxTime; t += 1) {
      labels.push(
        <TimeLabelCell key={t} dateCellHeight={this.props.dateCellHeight}>
          <TimeText>{formatHour(t)}</TimeText>
        </TimeLabelCell>
      )
    }
    return <Column style={{ marginTop: this.props.timeLabelMargin }}>{labels}</Column>
  }

  renderDateColumn = (dayIndex, dayOfTimes) => {

    return (

      <Column
        key={dayOfTimes[0]}
        margin={this.props.margin}
        dateCellWidth={this.props.dateCellWidth}
        dateCellHeight={this.props.dateCellHeight}
      >
        <GridCell margin={this.props.margin} dateCellWidth={this.props.dateCellWidth} dateCellHeight={this.props.dateCellHeight}>
          <DateLabel>{formatDate(dayOfTimes[0], this.props.dateFormat)}</DateLabel>
          <DateLabel dayOfWeek>{formatDate(dayOfTimes[1], 'ddd')}</DateLabel>
        </GridCell>
        {dayOfTimes.map((time, i) => this.renderDateCellWrapper(time, dayIndex, i))}
      </Column>

    )
  }


  //given a grid, should it highlight?
  shouldHighlight = s => {
    const selected = this.props.selected.has(s)

    if (this.props.selectMode === false) {
      return selected;
    }

    const [x, y] = unstringify(s);

    const highlighted = (this.mouseDown && between(this.state.startCoord[0], this.state.mouseX, x) && between(this.state.startCoord[1], this.state.mouseY, y));

    return (this.mouseDown && this.addMode && highlighted) || (!this.mouseDown && selected) || (selected && !highlighted)
  }



  renderDateCellWrapper = (time, dayIndex, timeIndex) => {

    const stringified = stringify(dayIndex, timeIndex);

    return (
      <GridCell
        margin={0}
        key={time.toISOString()}
        onMouseDown={() => this.startSelection(dayIndex, timeIndex)}
      >
        <DateCell
          selected={this.shouldHighlight(stringified)}
          dateCellHeight={this.props.dateCellHeight}
          quarter={time.getMinutes() / 15}
          selectedColor={this.props.selectedColor}
          unselectedColor={this.props.unselectedColor}
          hoveredColor={this.props.hoveredColor}
        />
      </GridCell>
    )
  }

  _onMouseMove = e => {

    const {selectMode, selection} = this.props;


    if (selectMode && selection === false) {
      return;
    }

    const mouseX = e.nativeEvent.pageX - this.gridRef.offsetLeft - this.props.offsetLeft;
    const mouseY = e.nativeEvent.pageY - this.gridRef.offsetTop - this.props.offsetTop;

    const [cellColIndex, cellRowIndex] = [Math.floor(mouseX / this.props.dateCellWidth), Math.floor(mouseY / this.props.dateCellHeight)];
    this.setState({ mouseX: cellColIndex, mouseY: cellRowIndex });
  }

  _onMouseDown = () => (this.mouseDown = true)
  _onMouseUp = () => (this.mouseDown = false)

  render = () => {
    return (
      <Wrapper
        onMouseDown={this._onMouseDown}
        onMouseUp={this._onMouseUp}
        ref={c => (this.gridRef = c)}
        >
        <Grid 
          onMouseMove={this._onMouseMove.bind(this)}
          onMouseUp={this.props.selectMode ? () => this.endSelection() : () => { }}
        >
          {this.renderTimeLabels()}
          {this.dates.map((e, i) => this.renderDateColumn(i, e))}
        </Grid >
      </Wrapper >
    )
  }
}

// start of code change
const mapStateToProps = (state) => {
  return { selected: state.selection.selection };
};

export default connect(mapStateToProps)(ScheduleSelector);

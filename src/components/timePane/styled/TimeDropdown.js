import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const numToTime = k => (k % 12 < 10 && k % 12 !== 0? '0' : '') + (k % 12 === 0? '12': k%12) + ':00 ' + (k < 12 ? 'AM' : 'PM');
const options = [...Array(24).keys()].map((k,i) => ({ key: i, value: k, text: numToTime(k) }))

const timePicker = ({ startTime = true, initialTime = undefined, setTime}) => (
  <Dropdown
    placeholder={`Select ${startTime ? 'Starting' : 'Ending'} Time`}
    fluid
    search
    selection
    onChange={(_, {value}) => setTime(value)}
    options={initialTime === undefined? options: options.filter(x => x > initialTime)}
  />
)

export default timePicker;
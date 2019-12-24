import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const numToTime = k => (Math.floor(k / 2) < 10 ? '0' : '') + Math.floor(k / 2) + ':' + (k % 2 === 1 ? '30' : '00');
const options = [...Array(48).keys()].map(k => ({ key: k, value: k, text: numToTime(k) }))

const timePicker = ({ militaryTime = true, startTime = true }) => (
  <Dropdown
    placeholder={`Select ${startTime ? 'Starting' : 'Ending'} Time`}
    fluid
    search
    selection
    options={options}
  />
)

export default timePicker;
import React, { useState } from 'react';
import FloatingInput from '../../components/Input/styled/FloatingInput'
import AnimatedIconButton from '../../components/Buttons/AnimatedIconButton'
import Text from '../../components/Text/Text';
import ScheduleSelector from '../../components/ScheduleSelector';
import styled from 'styled-components'


const ScheduleContainer = styled.div`
  margin-left: 10px;
`

const SignInContainer = ({ setName }) => {
  let name = '';

  return (
    <div>
      <Text header>
        Sign In
          </Text>

      <Text caption>
        Enter your information so the group can identify you.
          </Text>

      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <FloatingInput placeholder='Enter Name' onChange={({ target }) => { name = target.value }} />
      </div>

      <div style={{ marginTop: '60px' }}>
        <AnimatedIconButton hasIcon={false} animated={false} label={'Sign in'} onClick={(e) => { console.log(name); setName(name) }} />
      </div>
    </div>
  )

}



const SelectorContainer = () => (

  <ScheduleContainer>
    <ScheduleSelector
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
)


const LeftSignIn = () => {

  const [name, setName] = useState('');

  if (name === '') {
    return (<SignInContainer setName={setName} />)
  } else {
    return (<SelectorContainer />)
  }

}

export default LeftSignIn;
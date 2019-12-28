import React, { useState } from 'react';
import FloatingInput from '../../components/Input/styled/FloatingInput'
import AnimatedIconButton from '../../components/Buttons/AnimatedIconButton'
import Text from '../../components/Text/Text';
import SelectorContainer from './selectorContainer'


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



const LeftSignIn = () => {

  const [name, setName] = useState('');

  if (name !== '') {
    return (<SignInContainer setName={setName} />)
  } else {
    return (<SelectorContainer name={name} />)
  }
}

export default LeftSignIn;
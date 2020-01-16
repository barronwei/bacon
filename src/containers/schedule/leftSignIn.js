import React, { useState } from 'react';
import FloatingInput from '../../components/input/styled/floatingInput'
import AnimatedIconButton from '../../components/buttons/animatedIconButton'
import Text from '../../components/text/text';
import SelectorContainer from './individual'
import {useDispatch} from 'react-redux';
import {createUser} from '../../redux/actions';


const SignInContainer = ({ createUser }) => {
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

        <FloatingInput
          placeholder='Enter Name'
          textAlignLeft={true}
          onChange={({ target }) => { name = target.value }} />

      </div>

      <div style={{ marginTop: '60px' }}>
        <AnimatedIconButton
          hasIcon={false}
          animated={false}
          label={'Sign in'}
          onClick={(e) => { createUser(name) }}
        />
      </div>
    </div>
  )

}

const LeftSignIn = (scheduleProps) => {

  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const generateUser = name => {
    setName(name);
    dispatch(createUser(name));
  }

  if (name === '') {
    return (<SignInContainer createUser={generateUser} />)
  } else {
    return (<SelectorContainer name={name} {...scheduleProps} />)
  }
}

export default LeftSignIn;
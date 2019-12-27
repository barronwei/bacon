import React from 'react';
import FloatingInput from './styled/FloatingInput'
import TitleInputContainer from './styled/TitleInputContainer';

const TitleInput = ({
  inputDefaultValue = 'New Event Name',
  onChange
}) => (
    <TitleInputContainer>
      <FloatingInput placeholder={inputDefaultValue} onChange={onChange}/>
    </TitleInputContainer>
  )

export default TitleInput;
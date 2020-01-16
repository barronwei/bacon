import React from 'react';
import FloatingInput from './styled/floatingInput'
import TitleInputContainer from './styled/titleInputContainer';

const TitleInput = ({
  inputDefaultValue = 'New Event Name',
  onChange
}) => (
    <TitleInputContainer>
      <FloatingInput placeholder={inputDefaultValue} onChange={onChange}/>
    </TitleInputContainer>
  )

export default TitleInput;
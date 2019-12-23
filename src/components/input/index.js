import React from 'react';
import TitleInput from './styled/TitleInput'
import TitleInputContainer from './styled/TitleInputContainer';

const titleInput = ({
  inputDefaultValue = 'New Event Name',
  type = 'text'
}) => (
    <TitleInputContainer>
      <TitleInput placeholder={inputDefaultValue} type={type} />
    </TitleInputContainer>
  )

export default titleInput;
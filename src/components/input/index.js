import React from 'react';
import FloatingInput from './styled/FloatingInput'
import TitleInputContainer from './styled/TitleInputContainer';

const titleInput = ({
  inputDefaultValue = 'New Event Name',
  title=false,
}) => (
    <TitleInputContainer>
      <FloatingInput placeholder={inputDefaultValue} />
    </TitleInputContainer>
  )

export default titleInput;
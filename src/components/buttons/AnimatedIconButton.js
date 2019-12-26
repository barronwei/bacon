import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react'

const ButtonContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`

const AnimatedButton = ({ label, animated = true, hasIcon = true, iconName = 'arrow right' }) => {

  return (

    <ButtonContainer>
      <Button animated={animated}>
        <Button.Content visible>{label}</Button.Content>
        <Button.Content hidden>
          {hasIcon &&
            <Icon name={iconName} />}
        </Button.Content>
      </Button>
    </ButtonContainer>
  )

}

export default AnimatedButton;


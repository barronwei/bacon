import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text/Text';
import LeftSignIn from './leftSignIn'
import SelectorContainer from './selectorContainer'


const HalfPaneContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`

const SchedulePage = ({ match, title = 'Untitled Event' }) => {
  const meetingID = match.params.id;

  const useEffect = () => ({
    
  });

  return (
    <div>
      <Text header>
        {title}
      </Text>

      <HalfPaneContainer>

        <LeftSignIn state/>

        <SelectorContainer 
          name='Group'
          selectMode={false}
        />
      </HalfPaneContainer>

    </div>
  )

}

export default SchedulePage;

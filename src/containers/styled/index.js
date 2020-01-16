import styled from 'styled-components'


const HalfPaneContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`

const ScheduleContainer = styled.div`
align-items: center; 
width: 100%; 
justify-content: center; 
align-self: center;
display: flex;
overflow-x: scroll;
&::-webkit-scrollbar {
  display: none;
}
`

const LeftPanel = styled.div`
align-items: center;
justify-content: center;
border-radius: 20px;
width: 50vw;
padding: 10px;
margin-top: 10px;
`



export { HalfPaneContainer, ScheduleContainer, LeftPanel };
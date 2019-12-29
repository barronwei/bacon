import {createActions} from 'redux-actions';

const {applyHighlight, loadMeetingState} = createActions({
  APPLY_HIGHLIGHT: (highlights, add) => ({highlights, add}),
  LOAD_MEETING_STATE: meetingState => meetingState
})

export {applyHighlight, loadMeetingState}
import {createActions} from 'redux-actions';

const {applyHighlight, loadMeetingState, createUser} = createActions({
  APPLY_HIGHLIGHT: (highlights, add) => ({highlights, add}),
  LOAD_MEETING_STATE: meetingState => ({meetingState}),
  CREATE_USER: name => ({name})
})

export {applyHighlight, loadMeetingState, createUser}
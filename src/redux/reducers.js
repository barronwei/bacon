import { handleActions, combineActions } from 'redux-actions'
import { combineReducers } from 'redux';
import * as actions from './actions'
import { userStruct } from '../utils/requests';


const selection = handleActions(
  {
    [actions.applyHighlight]: (
      state,
      { payload: { highlights, add } }
    ) => {
      return Object.assign({}, state, { selection: add ? new Set([...state.selection, ...highlights]) : new Set([...state.selection].filter(x => !highlights.has(x))) });
    },

    [actions.loadMeetingState]: (
      state,
      { payload: { meetingState } }
    ) => {

      return Object.assign({}, state, { meetingState: meetingState })
    },

    // Copies over current user state
    [actions.createUser]: (
      state,
      { payload: { name } }
    ) => {
      const team = state.meetingState.Team;

      if (name in team) {
        return Object.assign({}, state, { currentUser: userStruct({ name: name })})
      } else {
        const currentUser = {...team[name]};
        const meetingState = Object.assign({}, state.meetingState , {name: undefined});
        return Object.assign({}, state, { meetingState: meetingState, currentUser: currentUser })
      }
    }
  },

  // this sets the default state
  { selection: new Set(), meetingState: false, currentUser: {} }
);



export default combineReducers({ selection });
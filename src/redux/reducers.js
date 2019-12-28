import {handleActions, combineActions} from 'redux-actions'
import {combineReducers} from 'redux';
import * as actions from './actions'


const selection = handleActions(
  {
    [actions.applyHighlight]: (
      state,
      {payload: {highlights, add}}
    ) => {
      console.log(state);
      return Object.assign({}, state, { selection: add? new Set([...state.selection, ...highlights]) : new Set([...state.selection].filter(x => !highlights.has(x)))});
    }
      // 

  },

  // this sets the default state
  {selection: new Set()}
);



export default combineReducers({selection});
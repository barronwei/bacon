import {createActions} from 'redux-actions';

const {applyHighlight} = createActions({
  APPLY_HIGHLIGHT: (highlights, add) => ({highlights, add}),
})

export {applyHighlight}
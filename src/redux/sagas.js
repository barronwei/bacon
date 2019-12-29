import { put, takeEvery, all } from 'redux-saga/effects'


function *createMeeting(){
  
}

function *getMeeting(){
  yield takeEvery('GET_MEETING', () => {})
}


export default function* rootSaga(){

  yield all ([


  ])
}
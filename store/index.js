import { createStore } from 'redux'

const initialState = {
  data: []
}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "SAVE_DATA":
      return { ...state, data: state.data.concat(action.payload) }

    default:
      return state
  }
}

const store = createStore(reducer)

export default store
import {ADD_COMMENT, LIFT_USER} from '../action/actions'
const initialState = {
  userId: '',
  firstName: '',
  lastName: '',
  username: '',
  loginMethod: '',
  pronouns: '',
  comments: [],
  journals: [],
  posts: [],
  admin: false,
  zipcode: 0,
  socket: 0
}

function userApp(state = initialState, action){
  switch(action.type){
    case ADD_COMMENT:
      return(
        console.log('ADD_COMMENT reducer fired'),
        Object.assign({}, state, {
          comments: [
            ...state.comments,
            {
              text: action.data
            }
          ]
        })
      )
    case LIFT_USER:
      return(
          console.log('LIFT_USER reducer fired', action.data),
          Object.assign({}, state, {
            userId: action.data._id,
            firstName: action.data.firstName,
            lastName: action.data.lastName,
            admin: action.data.admin,
            pronouns: action.data.pronouns,
            username: action.data.username
          }
        )
      )
    default:
      return state
  }
}
export default userApp

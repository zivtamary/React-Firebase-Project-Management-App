const initialState = {
  authError: null
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN_SUCCESS':
      console.log('Login success')
      return {
        ...state,
        authError: null
      }
    case 'LOGIN_ERROR':
      console.log('Login failed', payload)
      return {
        ...state,
        authError: payload.message
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: payload.message
      }
    case 'SIGNOUT_SUCCESS':
      console.log('Signout success')
      return state
  default:
    return state
  }
}


export default authReducer
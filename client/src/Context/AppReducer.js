const AppReducer = (state, action) => {
  switch(action.type){
    case 'Update User': 
      return updateUser(state, action.payload.user);
    default:
      throw new Error();
  }
}

function updateUser(state, user){
  if(typeof user !== 'undefined'){
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    localStorage.removeItem('user');
  }
  return {...state, user};
}

export default AppReducer;
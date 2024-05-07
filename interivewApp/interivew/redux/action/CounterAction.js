//Action Name
export const ADD_NUMBER = 'ADD_NUMBER';

//Action Creator
const addAction = data => {
  return {
    type: ADD_NUMBER,
    payload: data,
  };
};

export default addAction
import { ADD, REMOVE, ADD_ALL, REMOVE_ALL } from '../constants/actionTypes'

export const addSkill = (skill) => async (dispatch) =>{
    try {
        dispatch({type:ADD, payload: skill})
    } catch (error) {
        console.log(error.message)
    }
}
export const removeSkill = (skill) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE, payload: skill });
  } catch (error) {
    console.log(error.message);
  }
};
export const addAllSkills = (skills) => async (dispatch) => {
  try {
    dispatch({ type: ADD_ALL, payload: skills });
  } catch (error) {
    console.log(error.message);
  }
};
export const removeAllSkills = () => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_ALL});
  } catch (error) {
    console.log(error.message);
  }
};
import { combineReducers } from 'redux';

export const patientName = (state = 'patientX', action) => {
    switch (action.type) {
      case 'patientName':
        state = action.data;
  
        return state;
      default:
        return state;
    }
};

export const drK = (state = 'dr.K', action) => {
    switch (action.type) {
      case 'dr.K':
        state = action.data;
  
        return state;
      default:
        return state;
    }
};

export const drArunabGoswami = (state = 'dr.ArunabGoswami', action) => {
    switch (action.type) {
      case 'dr.ArunabGoswami':
        state = action.data;
  
        return state;
      default:
        return state;
    }
};

export const selectedDoctor = (state = null, action) => {
    switch (action.type) {
      case 'selectedDoctor':
        state = action.data;
  
        return state;
      default:
        return state;
    }
};

export const drGouthamDoddi = (state = 'dr.GouthamDoddi', action) => {
    switch (action.type) {
      case 'dr.GouthamDoddi':
        state = action.data;
  
        return state;
      default:
        return state;
    }
};

export const bookingData = (state = [], action) => {
    switch (action.type) {
      case 'bookingData':
        state = action.data;
  
        return state;
      default:
        return state;
    }
};

const allReducers = combineReducers({
    patientName,
    drK,
    drArunabGoswami,
    selectedDoctor,
    drGouthamDoddi,
    bookingData
});

export default allReducers;
import { combineReducers } from 'redux';
import RestaurantReducer from './restaurantReducer';
import ModalReducer from './modalReducer';
import AddressReducer from './addressReducer';
import NewOrderReducer from './newOrderReducer';

export default combineReducers({
  RestaurantReducer,
  ModalReducer,
  AddressReducer,
  NewOrderReducer
})

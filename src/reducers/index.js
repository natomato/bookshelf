import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveItemReducer from './reducer_active_item';

const rootReducer = combineReducers({
  items: BooksReducer,
  activeItem: ActiveItemReducer,
});

export default rootReducer;

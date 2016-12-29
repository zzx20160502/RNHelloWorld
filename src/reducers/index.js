/**
 * Created by zhf on 16/12/23.
 */

import { combineReducers } from 'redux';
import navigation from './navigation';
import todos from './todos';
const rootReducer = combineReducers({
    navigation, todos
});

export default rootReducer;
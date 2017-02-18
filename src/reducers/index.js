/**
 * Created by zhf on 16/12/23.
 */

import { combineReducers } from 'redux';
import navigation from './navigation';
import todos from './todos';
import mall from './mall';
const rootReducer = combineReducers({
    navigation, todos,mall,
});

export default rootReducer;
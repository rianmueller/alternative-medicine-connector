import { combineReducers} from 'redux';
import navReducer from './navReducer'
import productReducer from './productReducer';

const reducer = combineReducers({
    nav: navReducer,
    product: productReducer
})

export default reducer
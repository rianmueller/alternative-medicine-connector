import {LOAD_PRODUCT} from '../actions/index'

const initialState = {
  id: 0,
  name: "",
  url: "",
  type: "",
  tastes_like: "",
  thc_content: "",
  cbd_content: "",
  user_id: 0,
  img: '',
  created_at: "",
  updated_at: "",
  user: {
    id: 0,
    name: "",
    email: "",
    password: "",
    user_status_id: 0,
    created_at: "",
    updated_at: ""
  },
  conditions: [
    {
      id: 0,
      name: "",
      description: "",
      created_at: "",
      updated_at: "",
      _pivot_product_id: 0,
      _pivot_condition_id: 0
    }
  ]
};

const productReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_PRODUCT:
            return Object.assign({},state,action.payload)
            default:
                return state
    }
};

export default productReducer

/**
 * Created by zhf on 17/1/10.
 */

/**
 * Created by zhf on 16/12/20.
 */
'use strict';

const initialRoute = {
    product_id:{}
}
export  default  function (state=initialRoute,action) {
    return{
        ...state,
        product_id:action.product_id
    };
}
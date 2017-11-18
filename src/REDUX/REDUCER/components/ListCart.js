import {saveCartToLocal} from '../../../API/saveCart'
const defaultState = {
    data:[],
    refreshing: true,
    totalPrice: {
        text: '',
        value: 0
    }
};
// Them San pham
// Xoa SP
// + - So luong
function convert(oldValue, newValue) {
    const newPrice = oldValue + newValue;
    return {
        text: newPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'),
        value: newPrice
    }
}
const listCart = (state = defaultState,action) => {
        switch (action.type) {
            case 'addToCart':
                if(state.data.length === 0){
                    state.data.unshift(action.index);
                } else {
                    let flag = false;
                    state.data.forEach(product => {
                        if(product.name === action.index.name) {
                            product.qty++;
                            flag = true;
                            return ;
                        }
                    });
                    if(flag === false) state.data.unshift(action.index)
                }
                state = {
                        ...state,
                        refreshing: false,
                        totalPrice: convert(state.totalPrice.value, action.index.price.value)
                };
                saveCartToLocal(state);

                return state;
                // console.log('kiemtra',state);
            case 'increaseItem':
                    state.data.forEach(product => {
                        if(product.name === action.index.name) {
                            product.qty++;
                            return ;
                        }
                    });
                state = {
                    ...state,
                    refreshing: false,
                    totalPrice: convert(state.totalPrice.value, action.index.price.value)
                };
                saveCartToLocal(state);
                return state;
            case 'decreaseItem':
                state.data.forEach(product => {
                    if(product.name === action.index.name) {
                        product.qty--;
                        return ;
                    }
                });
                state = {
                    ...state,
                    refreshing: false,
                    totalPrice: convert(state.totalPrice.value, -action.index.price.value)
                };
                saveCartToLocal(state);
                return state;
            case 'newCartList':
                return JSON.parse(action.index);
            case 'removeCart':
                state.data.forEach((product, i) =>{
                    if(product.name === action.index.name ) {
                        state.data.splice(i,1)
                        return ;
                    }
                });
                state = {
                    ...state,
                    totalPrice: convert(state.totalPrice.value, - (action.index.price.value * action.index.qty))
                }
                saveCartToLocal(state);
                console.log('data',state)
                return state;
            default: return state;
        }
};
export default listCart;
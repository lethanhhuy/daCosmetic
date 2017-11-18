export  function addToCart(item) {
    const newItem = {
        ...item,
        qty: 1,
    };
    return { type:'addToCart',index: newItem}
}
export  function increaseItem(item) {
    const newItem = {
        ...item,
        qty: 1,
    };
    return { type:'increaseItem',index: newItem}
}
export  function decreaseItem(item) {
    const newItem = {
        ...item,
        qty: 1,
    };
    return { type:'decreaseItem',index: newItem}
}
export  function newCartList(item) {
    return {type:'newCartList', index: item }
}
export function removeCart(item) {
    return {type:'removeCart', index: item}
}
// initialState

export const initialState = {
    basket: [],
    wishlist: [],
}

//reducer

export const reducer = (state, action) => {
    const existingId = state.basket.find((item) => item.id === action.item.id)
    switch(action.type){
        case 'ADD_TO_BASKET':
            if(existingId){
                const updatedBasket = state.basket.map((item) => {
                    if(item.id === action.item.id){
                        return {
                            ...item,
                            quantity: 1
                        }
                    }else{
                        return item
                    }})
                return {
                    ...state,
                    basket: [...updatedBasket]
                }
            }else {
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                }
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                basket: state.basket.filter((item) => item.title !== action.item.title)
            }
        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                wishlist: [...state.wishlist, action.item]
            }
        case 'REMOVE_FROM_WISHLIST':
                return {
                    ...state,
                    wishlist: state.wishlist.filter((item) => item.id !== action.item.id)
                }
        case 'CHANGE_QUANTITY':
            return {
                ...state,
                basket: state.basket.map((item, i) => {
                    if(item.title === action.item.title) item.quantity = action.item.quantity
                    return item
                })
            }
    }
}
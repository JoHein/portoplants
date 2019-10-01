import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../actions/action-type/cart-actions'

const initState = {
    products: [
        {
            id: 1,
            name: 'Acalypha',
            price: 29.9,
            model: 'Shrub',
            size: '140mm',
            description: 'A large leaf bushy shrub  to 1.5m with green & white marked leaves. Very hardy',
            image: 'alcalypha.jpg',
        },
        {
            id: 2,
            name: 'Allamanda',
            price: 14.9,
            model: 'Shrub',
            size: '220mm',
            description: 'Compact habit, small glossy green leaves, brilliant yellow trumpet flowers',
            image: 'allamanda_sunee.jpg',

        },
        {
            id: 3,
            name: 'Dietes',
            price: 14.9,
            model: 'Groundcoverts',
            size: 'none',
            description: 'Clumping plant , iris like yellow flowers with brown spots',
            image: 'dietes.jpg',

        },
        {
            id: 4,
            name: 'Cuphea',
            price: 8.9,
            model: 'Groundcoverts',
            size: 'none',
            description: 'Compact small shrub ideal as a border plant, bears masses of small mauve flowers',
            image: 'cuphea.jpg',

        },
        {
            id: 5,
            name: 'Alexander palm',
            price: 99.9,
            model: 'Palm',
            size: '600mm',
            description: 'Tall solitary trunk palm, grey ringed trunk, long arching fronds ',
            image: 'alexanderpalm.jpg',

        },
        {
            id: 6,
            name: 'Silver lady',
            price: 25.9,
            model: 'Fern',
            size: '160mm',
            description: 'Rosette forming fern, best grown in semi shade, bright green new growth',
            image: 'sylverlady.jpg',

        },
    ],

    addedProducts: [],
    total: 0

}

const cartReducer = (state = initState, action) => {

    if (action.type === ADD_TO_CART) {
        let addedItem = state.products.find(product => product.id === action.id)

        let existed_item = state.addedProducts.find(product => action.id === product.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedProducts: [...state.addedProducts, addedItem],
                total: newTotal
            }

        }
    }
    //Remove item
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedProducts.find(product => action.id === product.id)
        let new_items = state.addedProducts.filter(product => action.id !== product.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        return {
            ...state,
            addedProducts: new_items,
            total: newTotal
        }
    }

    //For one item
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.products.find(product => product.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if (action.type === SUB_QUANTITY) {
        let addedItem = state.products.find(product => product.id === action.id)

        //If quantity reach 0 then remove item
        if (addedItem.quantity === 1) {
            let new_items = state.addedProducts.filter(product => product.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedProducts: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    else {
        return state
    }


}


export default cartReducer;
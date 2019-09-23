import { ADD_TO_CART } from '../actions/action-type/cart-actions'

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
        let addedItem = state.products.find(products => products.id === action.id)

        let existed_item = state.addedProducts.find(products => action.id === products.id)
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
    else {
        return state
    }


}


export default cartReducer;
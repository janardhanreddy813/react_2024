
const initialState={
    products:[
        {
            id:1,
            title:"vijay",
            category:"programmer"
        }
    ]
}
export const productReducer=(state=initialState,action)=>{

    switch(action.type){
        case 'SET_PRODUCTS':{
            return{ ...state, pro}
        }
        case 'SELECTED PRODUCT': {

return {}
        }

    }

}
const intialState = [];

const counterReducer = (state = intialState, action) => {

    switch(action.type)
    {
        case 'GET_API_LIST' :
            return {...state, allItems : action.payload};
        case 'GET_API_DETAILS' :
            state.allItems.filter(e =>{
                return (e._id === action.payload.moviId ? e.details = action.payload : state);
            })
        default :
            return state;
    }
}
export default counterReducer;
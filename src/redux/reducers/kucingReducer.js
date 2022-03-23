const initialState={
    kucing:[],
    isLoading: false
}

const kucingReducer = (state= initialState, action)=>{
    switch (action.type) {
        case "getKucing":
            return{
                ...state,
                isLoading: true
            }
        case "getSuccess":
            return{
                isLoading: false,
                kucing: action.payload

            }
        default:
            return state;
    }
}

export default kucingReducer;
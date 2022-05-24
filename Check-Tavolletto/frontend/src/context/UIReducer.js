const UIReducer = (state,action)=>{

    switch(action.type){
        case 'CHANGE_STATE':
            state.profiletoggle=action.payload
            return{
                ...state,
                profiletoggle:state.profiletoggle,
            }
        default:
            return state
    }
}

export default UIReducer;
const initialState = {
    // cate: [],
    cate: {},
    editClick : false
}

const CateReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'CATE' : {
                // return {
                //     ...state,
                //     cate : [...state.cate, {
                //         name: action.data.name,
                //         order: action.data.order
                //     }]
                // }
                return {
                    ...state,
                    cate : {
                        name: action.data.name,
                        order: action.data.order
                    }
                }


            }
            case 'EDIT_CLICK' : {
                return {
                    ...state,
                    editClick : action.data.editClick
                }
            }
            default:
                return state;
        }
}

export default CateReducer
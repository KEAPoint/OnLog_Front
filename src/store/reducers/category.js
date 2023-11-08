const initialState = {
    // cate: [],
    // cateId: null,
    cate: {
        cateId: null,
        name: "",
        order: ""
    },
    editClick : false,
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
                    cate : {
                        cateId: action.data.cateId,
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
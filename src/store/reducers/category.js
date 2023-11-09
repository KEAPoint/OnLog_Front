const initialState = {
    cate: [],
    // cate: {
    //     cateId: null,
    //     name: "",
    //     order: ""
    // },
    editClick : false,
}

const CateReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'CATE' : {
                return {
                    ...state,
                    cate : [...state.cate, 
                        action.data
                        // {
                        //     cateId: action.data.cateId,
                        //     name: action.data.name,
                        //     order: action.data.order
                        // }
                    ]
                }

            }
            case 'EDIT_CLICK' : {
                return {
                    ...state,
                    editClick : action.data.editClick
                }
            }
            // case 'REMOVE_CATE' : {
            //     return {
                    
            //     }
            // }
            default:
                return state;
        }
}

export default CateReducer
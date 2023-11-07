const initialState = {
    cards: [],
    // card: {
    //     postId: "",
    //     title: "",
    //     content: "",
    //     summary: "",
    //     thumbnailLink: "",
    //     likesCount: "",
    //     category: {
    //         id: null,
    //         name: "",
    //         order: null,
    //     },
    //     topic: {
    //         id: null,
    //         name: ""
    //     },
    //     commentsCounts: null,
    //     writer: {
    //         blogId: "",
    //         blogName: "",
    //         blogNickname: "",
    //         blogProfileImg: "",
    //         blogIntro: "",
    //         blogThemeImg:""
    //     }
    // }
}

const CardReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'CARD' : {
                return {
                    ...state,
                    cards: action.data // 배열을 그대로 저장
                //     card: {
                //         postId: action.data.postId,
                //         title: action.data.title,
                //         content: action.data.content,
                //         summary: action.data.summary,
                //         thumbnailLink: action.data.thumbnailLink,
                //         likesCount: action.data.likesCount,
                //         category: {
                //             id: action.data.category_id,
                //             name: action.data.category_name,
                //             order: action.data.category_order,
                //         },
                //         topic: {
                //             id: action.data.topic_id,
                //             name: action.data.topic_name
                //         },
                //         commentsCounts: action.data.commentsCounts,
                //         writer: {
                //             blogId: action.data.writer_blogId,
                //             blogName: action.data.wirter_blogName,
                //             blogNickname: action.data.writer_blogNickname,
                //             blogProfileImg: action.data.writer_blogProfileImg,
                //             blogIntro: action.data.writer_blogIntro,
                //             blogThemeImg:action.data.writer_blogThemeImg
                //         }
                //     }
                // }
                }
            }
            default: {
                return state;
            }
        }
}
export default CardReducer
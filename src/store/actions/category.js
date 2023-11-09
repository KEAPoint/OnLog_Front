export const cateAction = (data) => { // 카테고리 리스트 add
    return {
        type: 'CATE',
        data: data
    }
}

// export const cateRemoveAction = (data) => {
//     return {
//         type: 'REMOVE_CATE',
//         data: data
//     }
// }
export const editClickAction = (data) => {
    return {
        type: 'EDIT_CLICK',
        data: data
    }
}
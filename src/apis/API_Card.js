import axios from "axios";

export const GET_CardList = async (localData) => {
    const url = '';
    const res = await axios({
        method: "get",
        url: url,
        headers: {
            'X-ACCESS-TOKEN': localData
        }
    });

    return res.data.result; 
}
import React, { useState } from 'react';
import styled from 'styled-components';
import { S_bold_19_2, XS_semibold_16 } from '../../components/style/Styled';
import { Post_Categori } from '../../apis/API_MyPage';
import { useDispatch } from 'react-redux';
import { cateAction } from '../../store/actions/category';

const AddCategoryItem = () => {
    const [inputValue, setInputValue] = useState('');
    const [confirmCheck, setConfirmCheck] = useState(false);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleConfirmClick = () => {
        setConfirmCheck(true);      

        Post_Categori(inputValue)
        .then((data) => {

            // 카테고리리스트에 추가
            dispatch(
                cateAction(data.data)
            )
        })
        .catch((error) => {
            console.log(error)
        })
    };
    return (
        <>
        {!confirmCheck && (
            <Wrap>
                <Category>
                    <Input type='text' value={inputValue} onChange={handleInputChange}/>

                    <UserOption>
                        <UserOptionBtn>취소</UserOptionBtn>
                        <UserOptionBtn onClick={handleConfirmClick}>확인</UserOptionBtn>
                    </UserOption>
                </Category>
            </Wrap>
        )}
        </>
    );
};

export default AddCategoryItem;

const Wrap = styled.div`
    width: 100%;
    background-color: yellow;
    display: flex;
`;
const Category = styled.div`
    display: flex;
    padding: 1.5rem 1.25rem 1.5rem 2.5rem;
    /* box-sizing: border-box; */
    /* align-items: center; */

    justify-content: space-between;
    flex-grow: 1;
    border: 1px solid var(--gray_light, #939393);
    background: #FFF;
    align-items: center;
    
`;
const Input = styled(S_bold_19_2).attrs({as:'input'})`
    /* padding: 1rem; */
    padding-left: 1rem;
    /* box-sizing: border-box; */

    &:focus {
        outline:none;
    }
    display: flex;
    align-items: center;
    height: calc(100% + 10px);
    width: 50rem;
`;
const UserOption = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

`;
const UserOptionBtn = styled(XS_semibold_16).attrs({as:'button'})`
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    
    border: none;
    background-color: var(--white);
    position: relative;
    cursor: pointer;
    gap: 0.5rem;

    &::after {
        content: "";
        /* border: 0cap.5 solid black; */
        width: 0.0625rem;
        height: 1.875rem;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #000;
        height: 23px;
        position: absolute;
        right: -10px;  
    }

    &:last-child::after {
        display: none;
    }
    
`;


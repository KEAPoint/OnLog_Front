import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { S_bold_19_2, XS_semibold_16 } from '../../components/style/Styled';

const CategoryItem = ({item}) => {
    const editClick = useSelector((state) => state.category.editClick);
    console.log("확인2",editClick);


    return (
        <Wrap>
            <Category as={editClick ? "div" : "button"} $isButton={editClick}>
                <CateTitle>{item.name}</CateTitle>
                    {editClick && (
                        <UserOption>
                            <UserOptionBtn>수정하기</UserOptionBtn>
                            <UserOptionBtn>삭제하기</UserOptionBtn>
                        </UserOption>
                    )}

            </Category>
        </Wrap>
    );
};

export default CategoryItem;

const Wrap = styled.div`
    width: 100%;
    background-color: yellow;
    display: flex;
`;
const Category = styled.button`
    cursor: ${props => !props.$isButton ? "pointer" : "default"};
    display: flex;
    padding: 1.5rem 1.25rem 1.5rem 2.5rem;
    justify-content: space-between;
    flex-grow: 1;
    border: 1px solid var(--gray_light, #939393);
    background: #FFF;

`
const CateTitle = styled(S_bold_19_2)`
    color: var(--black);
    /* align-self: ; */
    display: flex;
    align-items: center;
`
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
        right: -10px;  // Adjust this value to position "sss" correctly
    }

    &:last-child::after {
        display: none;
    }
    
`;


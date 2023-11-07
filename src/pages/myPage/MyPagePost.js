import styled from "styled-components";
import Card from "../home/Card";
import { S_bold_19_2, S_regular_20_8, XS_semibold_16 } from "../../components/style/Styled";
import {ReactComponent as Menu} from "../../assets/images/Icons/Menu.svg";
import {ReactComponent as Edit} from "../../assets/images/Icons/Edit.svg";
import {ReactComponent as Lock} from "../../assets/images/Icons/Lock.svg";
import {ReactComponent as Plus} from "../../assets/images/Icons/Plus.svg";

import CategoryEdit from "./CategoryEdit";
import { useEffect, useState } from "react";
const MypagePost = () => {
    const [clickCheck, setClickCheck] = useState(false);
    const handleEdit = () => {
        setClickCheck(true);
    };
    useEffect(() => {
        console.log(clickCheck)
    },[clickCheck])
    return(
            <PageWrap>
                {/* {clickCheck && <CategoryEdit/>} */}
                <StickWrap>
                    <CateWrap isExpanded={clickCheck}>
                        <MenuWrap>
                            <S_regular_20_8>Category</S_regular_20_8>
                            <EditBtn onClick={handleEdit}><Edit/></EditBtn>
                        </MenuWrap>

                        {!clickCheck && (
                            <>
                                <Option>
                                    <CateTitle>전체</CateTitle>
                                </Option>
                                <Option>
                                    <Lock/>
                                    <CateTitle>비공개 글</CateTitle>
                                </Option>
                            </>
                        )}



                        <Category as={!clickCheck ? "div" : "button"} isButton={clickCheck}>
                            <CateTitle>나의 잡담</CateTitle>
                            {clickCheck && (
                                <UserOption>
                                    <UserOptionBtn>수정하기</UserOptionBtn>
                                    <UserOptionBtn>삭제하기</UserOptionBtn>
                                </UserOption>
                            )}

                        </Category>


                        {clickCheck && (
                            <AddBtn>
                                <Plus/>
                                <CateTitle>카테고리 추가</CateTitle>
                            </AddBtn>
                        )}
                    </CateWrap>
                </StickWrap>
                
                {!clickCheck && (
                    <PostWrap>
                        <Card category=""/>
                    </PostWrap>
                )}

            </PageWrap>
    );
};

export default MypagePost;

const PageWrap = styled.div`
    display: flex;
    position: relative;
`
const StickWrap = styled.div`

`;

const CateWrap = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    /* width: 29.8125rem; */
    width: ${props => props.isExpanded ? 'calc(100vw - 12.5rem)' : '29.8125rem'};
    transition: width 0.5s ease-out;
    // padding: 1.625rem 0rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    /* border-right: 1px solid var(--gray_bold, #4A4A4A); */
    /* background: #FFF; */
`
const MenuWrap = styled.div`
    align-self: stretch;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* gap: 2.5rem; */
    padding: 1.62rem 1.25rem 1.25rem 1.25rem;
`;
const EditBtn = styled.button`
  background-color: transparent;
  border:none;
  outline:none;
  cursor:pointer;
    svg {
        pointer-events:auto; // SVG 내부의 그래픽 요소에만 마우스 이벤트 적용
    }
`;
const Option = styled.button`
    cursor: pointer;
    border: none;
    background: var(--gray_lighter, #DCDCDC);

    display: flex;
    gap: 0.625rem;
    padding: 1.5rem 1.25rem 1.5rem 2.5rem;
    align-self: stretch;
`;
const AddBtn = styled(Option)`
    /* justify-content: space-between; */
    align-items: center;

`;
const Category = styled.button`
    cursor: ${props => !props.isButton ? "pointer" : "default"};
    display: flex;
    padding: 1.5rem 1.25rem 1.5rem 2.5rem;
    justify-content: space-between;
    /* align-items: flex-start; */
    align-content: center;
    align-self: stretch;

    border: 1px solid var(--gray_light, #939393);
    background: #FFF;
`
const CateTitle = styled(S_bold_19_2)`
    color: var(--black);
    align-self: stretch;
    display: flex;
    align-items: center;
`
const PostWrap = styled.div`
    width: 90rem;
    border-left: 1px solid var(--gray_bold, #4A4A4A);
    
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



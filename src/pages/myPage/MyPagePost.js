import styled from "styled-components";
import Card from "../home/Card";
import { S_bold_19_2, S_regular_20_8 } from "../../components/style/Styled";
import {ReactComponent as Menu} from "../../assets/images/Icons/Menu.svg";
import {ReactComponent as Lock} from "../../assets/images/Icons/Lock.svg";

const MypagePost = () => {
    return(
            <PageWrap>
                <StickWrap>
                    <CateWrap>
                        <MenuWrap>
                            <S_regular_20_8>Category</S_regular_20_8>
                            <Menu/>
                        </MenuWrap>

                        <Option>
                            <CateTitle>전체</CateTitle>
                        </Option>
                        <Option>
                            <Lock/>
                            <CateTitle>비공개 글</CateTitle>
                        </Option>


                        <Category>
                            <CateTitle>나의 잡담</CateTitle>
                        </Category>

                        <Category>
                            <CateTitle>일상</CateTitle>
                        </Category>
                        <Category>
                            <CateTitle>나의 IT 이야기</CateTitle>
                        </Category>
                    </CateWrap>
                </StickWrap>
                
                <PostWrap>
                    <Card category=""/>
                </PostWrap>
            </PageWrap>
    );
};

export default MypagePost;

const PageWrap = styled.div`
    display: flex;
    /* padding: 0rem 6.25rem; */

    position: relative;
`
const StickWrap = styled.div``;

const CateWrap = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    width: 29.8125rem;
    // padding: 1.625rem 0rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    // border-right: 1px solid var(--gray_bold, #4A4A4A);
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
const Option = styled.button`
    cursor: pointer;
    border: none;
    background: var(--gray_lighter, #DCDCDC);

    display: flex;
    gap: 0.625rem;
    padding: 1.5rem 1.25rem 1.5rem 2.5rem;
    align-self: stretch;
`;
const Category = styled.button`
    cursor: pointer;
    display: flex;
    padding: 1.5rem 1.25rem 1.5rem 2.5rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;

    border: none;
    border-top: 1px solid var(--gray_light, #939393);
    border-bottom: 1px solid var(--gray_light, #939393);
    border-left: 1px solid var(--gray_light, #939393);
    background: #FFF;
`
const CateTitle = styled(S_bold_19_2)`
    color: var(--black);
`


const PostWrap = styled.div`
    width: 90rem;

    // display: flex;
    // padding: 1.875rem 0.5rem;
    // flex-direction: row;
    border-left: 1px solid var(--gray_bold, #4A4A4A);
    
`



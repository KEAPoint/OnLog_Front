import styled from "styled-components";
import UserProfile from "../../components/common/UserProfile";
import { cardData } from "../../assets/datas/cardData";
import { S_bold_25 } from '../style/Styled';
import { useState } from "react";


const BlogItem = () => {

    const [isSubscribed, setSubscribed] = useState(false); // 구독 상태를 저장하는 state
    const [isHovered, setHovered] = useState(false); // Hover 상태를 저장하는 state


    const handleSubscribe = (e) => {
        setSubscribed(!isSubscribed); // 현재의 반대 값으로 설정
        alert(isSubscribed ? "구독 취소" : "구독 완료");
    }
    return(
        <Wrap>
            <LeftWrap>
                {/* <Profile> 
                    <UserProfile info={cardData}/>
                </Profile> */}
                {/* UserProfile 공간 */}
                <Menu>
                    <ProfileImg></ProfileImg>
                    <TitleWrap>
                        <Title>Hani Tech World</Title>
                        <Name>@hanitech</Name>
                    </TitleWrap>
                </Menu>

                <BlogInfo> 안냐쎄욤. 하니에욤 </BlogInfo>
            </LeftWrap>
            <SubscribeWrap 
                onClick={handleSubscribe} 
                isSubscribed={isSubscribed}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
            {isHovered ? (isSubscribed ? "구독 취소" : "구독하기") : (isSubscribed ? "구독 중" : "구독하기")}
            </SubscribeWrap>
        </Wrap>
    );
};

export default BlogItem;

const Wrap = styled.div`
    display: flex;
    padding: 1.25rem 0rem;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    border-bottom: 1px solid var(--gray_light, #939393);
`

const LeftWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    // flex: 1;

`
const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.875rem;
    display: flex;
    padding: 2rem 0rem 0rem 18.8125rem;
    gap: 0.625rem;
    align-self: stretch;
`
const Menu = styled(S_bold_25)`
    display: flex;
    align-items: center;
`;
const ProfileImg = styled.div`
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 2.5rem;
    background: url(${Profile}) lightgray 50% / cover no-repeat;
    margin-right: 0.94rem;
`;
const TitleWrap = styled.div`
    display: flex; 
    flex-direction: column;
`;
const Title = styled.div`
    text-align: justify;
`;
const Name = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.03375rem;
`;
const BlogInfo = styled(S_bold_25)`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
    color: var(--gray_bold, #4A4A4A);
    text-overflow: ellipsis;

    padding-Left: 4rem;
    font-weight: 400;
    font-size: 1.3rem;
`


const SubscribeWrap = styled.button`
    display: flex;
    padding: 0.75rem 3.9375rem;
    align-items: center;
    gap: 0.9375rem;

    border : 4px solid black;

    text-align: justify;
    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    cursor: pointer;

    background: ${props => props.isSubscribed ? 'white' : 'var(--black, #000)'};
    color: ${props => props.isSubscribed ? 'black' : 'var(--white, #FFF)'};

    &:hover {
        background: ${props => props.isSubscribed ? 'red' : 'white'};
        color: ${props => props.isSubscribed ? 'var(--white, #FFF)' : 'black'};
        border-color: ${props => props.isSubscribed ? 'red' : 'black'};

        transition: 0.5s;
    }
`
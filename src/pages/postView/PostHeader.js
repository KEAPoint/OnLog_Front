import styled from "styled-components";
import UserProfile from "../../components/common/UserProfile";
import { cardData } from "../../assets/datas/cardData";

const PostHeader = () => {

    return(
        <div>
            <Wrap>
                <Category>#일상</Category>
                <Title>아무래도 로키가 멋있으니까</Title>
                <Date>2023.08.30</Date>
            </Wrap>
            <Profile> 
            <UserProfile info={cardData}/>
            </Profile>

        </div>
    )
};

export default PostHeader;

const Wrap = styled.div`
    display: flex;
    padding: 1.25rem 6.25rem;
    align-items: center;
    gap: 1.875rem;
    align-self: stretch;
`

const Title = styled.div`
max-width: 80.625rem;
color: var(--black, #000);

/* L-bold-45 */
font-family: Pretendard;
font-size: 2.8125rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const Category = styled.div`
    display: flex;
    padding: 0rem 2.40625rem;
    align-items: flex-start;
    gap: 0.625rem;
    background: #FF7575;
    color: var(--white, #FFF);
    /* L-semibold-40 */
    font-family: Pretendard;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const Date = styled.div`
    color: var(--gray_bold, #4A4A4A);

    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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
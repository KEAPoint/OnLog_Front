import styled from "styled-components";
import UserProfile from "../../components/common/UserProfile";
import { cardData } from "../../assets/datas/cardData";
import Profile from "../../assets/images/Profile.jpeg";
import { S_bold_25 } from '../../components/style/Styled';


const PostHeader = () => {

    return(
        <div>
            <Wrap>
                <Category>#일상</Category>
                <Title>아무래도 로키가 멋있으니까</Title>
                <Date>2023.08.30</Date>
            </Wrap>
            <Menu>
                    <ProfileImg></ProfileImg>
                    <TitleWrap>
                        <BlogName>Hani Tech World</BlogName>
                        <NickName>@hanitech</NickName>
                    </TitleWrap>
            </Menu>

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

const Menu = styled(S_bold_25)`
    padding: 1.25rem 6.25rem;
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
text-decoration: none;
color: var(--black);
`;
const BlogName = styled.div`
    text-align: justify;
`;
const NickName = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.03375rem;
`;
import styled from "styled-components";
import { cardData } from "../../assets/datas/cardData";


const PostHeader = () => {
    const topic = "일상";
    const title = "새로운 친구랑 놀았다.";
    const date = "2023.10.03";

    return(
        <div>
            <Wrap>
                <Category>#{topic}</Category>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </Wrap>
        </div>
    )
};

export default PostHeader;

const Wrap = styled.div`
    display: flex;
    // padding: 1.25rem 6.25rem;
    padding: 1.25rem 0rem;
    align-items: center;
    gap: 1.875rem;
    align-self: stretch;
    background-color: rgba(255,255,255,1);
`

const Title = styled.div`
    max-width: 80.625rem;
    color: var(--black, #000);

    /* L-bold-45 */
    font-family: Pretendard;
    font-size: 2rem;
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
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const Date = styled.div`
    color: var(--gray_bold, #4A4A4A);

    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
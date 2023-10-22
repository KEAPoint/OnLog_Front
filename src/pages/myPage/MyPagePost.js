import styled from "styled-components";
import Card from "../home/Card";

const MypagePost = () => {
    return(
        <Wrap>
            <CardWrap>
                <Card category="lifestyle"/>
            </CardWrap>
        </Wrap>
    );
};

export default MypagePost;

const Wrap = styled.div`
    display: flex;
    // padding: 1.875rem 6.25rem;
    padding: 3.125rem 17rem;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 1.25rem;
    align-self: stretch;
    flex-wrap: wrap;
`

const CardWrap = styled.div`
    /* background-color: red; */
    position: relative;
`;
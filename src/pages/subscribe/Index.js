import Header from "../../components/common/Header";
import styled from "styled-components";
import NewSubsPost from "../subscribe/NewSubsPost";
import SubsBlog from "./SubsBlog";
import Footer from "../../components/common/Footer";

const SubscribePage = () => {
    return(
        <div>
            <Header/>
            <Wrap>
                <PageName>Subscribed</PageName>
                <NewSubsPost/>
                <SubsBlog/>
            </Wrap>
            <Footer/>
        </div>
    );
};

export default SubscribePage;

const Wrap = styled.div`
    padding: 0rem 8rem;
`
const PageName = styled.div`
    display: flex;
    padding: 0rem 0rem 1.25rem 0rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;

    // color: var(--black, #000);
    // /* L-bold-45 */
    // font-family: Pretendard;
    // font-size: 2.8125rem;
    // font-style: normal;
    // font-weight: 700;
    // line-height: normal;

    color: var(--black, #000);
    /* L-bold-32(RE) */
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
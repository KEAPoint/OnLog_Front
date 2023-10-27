import Header from "../../components/common/Header";
import styled from "styled-components";
import NewSubsPost from "../subscribe/NewSubsPost";
import SubsBlog from "./SubsBlog";

const SubscribePage = () => {
    return(
        <div>
            <Header/>
            <PageName>Subscribed</PageName>
            <NewSubsPost/>
            <SubsBlog/>
        </div>
    );
};

export default SubscribePage;

const PageName = styled.div`
    display: flex;
    padding: 0rem 0rem 1.25rem 6.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;

    color: var(--black, #000);

    /* L-bold-45 */
    font-family: Pretendard;
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
import Header from "../../components/common/Header";
import styled from "styled-components";
import NoticeItem from "../../components/common/NoticeItem";
import Footer from "../../components/common/Footer";

const NoticePage = () => {
    return(
        <div>
            <Header/>
            <Wrap>
            <PageName>Notification</PageName>
            <BlogItemWrap>
                <NoticeItem noticeType='comment'user='hanitech' postTitle='아이언맨이 된 스토리' isReply='0' comment='멋있네요'/>
                <NoticeItem noticeType='comment'user='skyblue' postTitle='하늘을 나는 사람들' isReply='1' comment='오늘부터 비행연습을 하세요'/>
                <NoticeItem noticeType='comment'user='wantFly' postTitle='하늘을 나는 사람들' isReply='0' comment='어떻게 하면 저도 하늘을 날 수 있나요?'/>
                <NoticeItem noticeType='subscribed'user='butterfly' postTitle='' isReply='0' comment=''/>
                <NoticeItem noticeType='postLike'user='orangelike' postTitle='오렌지를 먹고싶어요 상큼' isReply='0' comment=''/>
                <NoticeItem noticeType='commentLike'user='startup' postTitle='오렌지를 먹고싶어요 상큼' isReply='0' comment='저는 귤을 더 좋아해용'/>
            </BlogItemWrap>
            </Wrap>
            <Footer/>
        </div>
    );
};

export default NoticePage;

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

const BlogItemWrap = styled.div`
    display: flex;
    padding: 0rem 11.88rem 5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
`
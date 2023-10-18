import styled from "styled-components";
import UserProfile from "../../components/common/UserProfile";
import { cardData } from "../../assets/datas/cardData";

const Comment = () => {
    return(
        <Wrap>
            <Profile>
                <UserProfile info={cardData}/>
            </Profile>
            
            <Context> 그런데 나는 캡틴아메리카보다 아이언맨이 더 좋던데? 의리남이잖아</Context>
            <CommentFooter>
                <CommentDate>2023.10.18</CommentDate>
                
                <HeartReplyWrap>
                    <HeartWrap>
                            <HeartButton>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                                <path d="M23 7.08001C23 3.72227 20.4472 1 17.2985 1C14.8933 1 12.8388 2.58809 12 4.83466C11.1623 2.58809 9.10669 1 6.70147 1C3.55278 1 1 3.72227 1 7.08001C1 8.23961 1.3042 9.32173 1.83201 10.2441C2.95573 12.7073 5.66402 16.3338 12 21C18.336 16.3338 21.0443 12.7073 22.168 10.2441C22.6958 9.32173 23 8.23961 23 7.08001Z" stroke="#4A4A4A" stroke-width="2" stroke-linejoin="round"/>
                                </svg>
                            </HeartButton>
                            <HeartNum> 1 </HeartNum>
                    </HeartWrap>

                    <ReplyButton> 댓글달기 </ReplyButton>
                </HeartReplyWrap>
            </CommentFooter>
        </Wrap>
    );
};

export default Comment;

const Wrap = styled.div`
    display: flex;
    padding: 2.5rem 5rem 2.5rem 3.125rem;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: stretch;
    border-bottom: 1px solid var(--gray_lighter, #DCDCDC);
`

// 댓글 작성자 프로필
const Profile = styled.div`
    display: flex;
    align-items: flex-start;
    align-self: stretch;
`

// 댓글 내용
const Context = styled.div`
    width: 80rem;
    align-self: stretch;
    color: var(--black, #000);
    padding: 1.25rem;

    /* S-regular-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

// 댓글 작성 날짜, 좋아요, 답장
const CommentFooter = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
`

const CommentDate = styled.div`
    color: var(--gray_bold, #4A4A4A);

    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const HeartReplyWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 0.625rem;
`

const HeartWrap = styled.div`
    display: flex;
    width: 7.875rem;
    padding: 0.1875rem 1.25rem;
    align-items: center;
`
const HeartButton = styled.button`
    display: flex;
    width: 3rem;
    height: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
`
const HeartNum = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;

    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const ReplyButton = styled.button`
    display: flex;
    height: 3.375rem;
    padding: 0.75rem 2.21875rem;
    align-items: center;
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;
    background-color: transparent;

    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
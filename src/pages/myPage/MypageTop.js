import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const MypageTop = () => {
    const movePage = useNavigate();

    const handlePostButtonClick = (e) => {
        e.preventDefault();
        movePage('/mypage/postwrite');
    };
    const handleEditButtonClick = (e) => {
        e.preventDefault();
        movePage('/mypage/edit');

    };

    return (
        <div>
            <Wrap1>
                <Left>
                    프로필 자리
                </Left>
                <Right>
                    <Box>
                        <Title> 작성한 글 </Title>
                        <Num>999</Num>
                    </Box>
                    <Box>
                        <Title> 좋아요 수 </Title>
                        <Num>999</Num>
                    </Box>
                    <Box style={{borderRight:"none"}}>
                        <Title> 구독자 수 </Title>
                        <Num>999</Num>
                    </Box>
                </Right>
            </Wrap1>
            <Wrap2>
                <ProfileInfo>
                Hani Tech World 는 최신 기술 정보와 실용적인 IT 팁을 제공하는 블로그입니다. 복잡한 기술 용어와 개념을 쉽게 이해할 수 있도록 가이드하며, 기술이 우리 일상 생활에 어떻게 적용될 수 있는지 알려드립니다.
                </ProfileInfo>
            </Wrap2>
            <Wrap2>
                <Button onClick={handlePostButtonClick}>글 작성</Button>
                <Button onClick={handleEditButtonClick}>프로필 수정</Button>
            </Wrap2>
        </div>
    );
};

export default MypageTop;

const Wrap1 = styled.div`
    display: flex;
    padding: 3.75rem 13.75rem;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: stretch;
    flex-wrap: wrap;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    width: 35.5rem;
`

const Right = styled.div`
    display: flex;
    padding-left: 0px;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`
const Box = styled.div`
    display: flex;
    padding: 0rem 3.125rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid var(--gray_light, #939393);
`
const Title = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;

    /* S-regular-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Num = styled.div`
    color: var(--black, #000);
    text-align: justify;

    /* L-bold-45 */
    font-family: Pretendard;
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const Wrap2 = styled.div`
    display: flex;
    padding: 1.25rem 25rem 3.75rem 25rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
`
const ProfileInfo = styled.div`
    width: 70rem;
    color: var(--gray_bold, #4A4A4A);

    /* S-regular_30 */
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Button = styled.button`
    display: flex;
    padding: 0.75rem 6.03125rem;
    align-items: center;
    gap: 0.9375rem;
    background: var(--black, #000);
    border: none;
    cursor: pointer;

    color: var(--white, #FFF);
    text-align: justify;
    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
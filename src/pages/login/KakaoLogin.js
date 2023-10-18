import styled from 'styled-components';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/HeaderNormal';


const KakaoLogin = () => {

    const navigate = useNavigate();

    const onKakaoClick = useCallback(() => {
    navigate("/SignUp");
    }, [navigate]);

    return(
        <div>
            <Header/>
            <Wrap>
                <Top>
                    <CategoryText>
                        #lifestyle #travel #foodie #entertainment #tech #sports #news
                    </CategoryText>
                </Top>

                <ButtonWrap onClick={(onKakaoClick)}>
                    <LogoText>
                        <Icon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" viewBox="0 0 33 30" fill="none">
                                <path d="M32.2137 12.1429C32.2137 18.8492 25.1782 24.2857 16.4994 24.2857C15.5237 24.2857 14.5688 24.217 13.6423 24.0855C11.566 23.7908 9.6325 23.1807 7.92801 22.322C3.62771 20.1553 0.785156 16.4056 0.785156 12.1429C0.785156 5.43654 7.82068 0 16.4994 0C25.1782 0 32.2137 5.43654 32.2137 12.1429Z" fill="black"/>
                                <path d="M7.92801 22.322L6.49944 30L13.6423 24.0855C11.566 23.7908 9.6325 23.1807 7.92801 22.322Z" fill="black"/>
                            </svg>
                        </Icon>
                        <Text>카카오 로그인</Text>
                    </LogoText>
                </ButtonWrap>
            </Wrap>
        </div>

    );
};

export default KakaoLogin;

const Wrap = styled.div`
    display: flex;
    padding-bottom: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`
const Top = styled.div`
    display: flex;
    width: 120rem;
    padding: 6.25rem 28.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
`
const CategoryText = styled.div`
    // flex: 1 0 0;
    display: flex;
    width: 62.5rem;
    justify-content: center;

    color: var(--gray_bold, #4A4A4A);
    font-family: Pretendard;
    font-size: 3.4375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    // font-family: Audiowide;
`
const ButtonWrap = styled.button`
    display: flex;
    width: 29.1875rem;
    height: 5.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.75rem;
    background: #FEE500;
    border: none;
`
const LogoText = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.9375rem;
`
const Icon = styled.div`
width: 1.96431rem;
height: 1.875rem;
fill: var(--general-theme-black, #000);
`
const Text = styled.div`
color: rgba(0, 0, 0, 0.85);
font-family: Roboto;
font-size: 1.625rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`
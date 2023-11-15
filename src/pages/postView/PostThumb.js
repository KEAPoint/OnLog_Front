import styled from "styled-components";
import ThumbImg from "../../assets/images/catogories/Tech.png"
import Profile from "../../assets/images/Profile.jpeg";
import { L_semibold_32, S_bold_17, XS_regular_16 } from "../../components/style/Styled";
// import Parser from 'html-react-parser';
import { useDispatch } from 'react-redux';
import { colorAction } from '../../store/actions/color';
import { useEffect , useState} from "react";
import { navData } from "../../assets/datas/categoryData";


function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;  
    }
  }

const PostThumb = ({post}) => {

    const defaultImageUrl = "https://i.namu.wiki/i/awkzTuu2p6WdaGIUbeHWGj0yzxUOd_wniEADxzMH8qvhWH4TDkpkkiUAJpefC-8J79giMVyjN5y1uRYQVoQm2g.webp";  // 이미지 url이 유효한 값이 아닌 string일 때 기본 이미지 URL 설정
    const thumbImageUrl = isValidUrl(post.thumbnailLink) ? post.thumbnailLink : defaultImageUrl;


    const dispatch = useDispatch();
    const [topic, setTopic] = useState({
        name:"",
        color:"",
    });

    useEffect(() => {
        if (post && post.topic) {
            setTopic({
                name: navData[post.topic.id].kName,
                color: navData[post.topic.id].color,
            });

            dispatch(
                colorAction({
                    category: navData[post.topic.id].name,  
                    color: navData[post.topic.id].color,
                })
            );
        }
    }, [post]);


    // console.log('postThumb');
    // console.log(post.writer);
    // console.log(post.writer && post.writer.blogProfileImg);

    return(
        <>
            <Menu>
            <ProfileImg $profileImg={post.writer && post.writer.blogProfileImg}></ProfileImg>
                <TitleWrap>
                    <BlogName>{post.writer && post.writer.blogName}</BlogName>
                    <NickName>@{post.writer && post.writer.blogNickname}</NickName>
                </TitleWrap>
            </Menu>
            <Wrap>
                {/* <ThumbImgDiv $thumbImg={post.thumbnailLink} color={topic.color}>  </ThumbImgDiv> */}
                <ThumbImgDiv $thumbImg={thumbImageUrl} color={topic.color}>  </ThumbImgDiv>
                <Summary dangerouslySetInnerHTML={{__html: post.summary}}/>
            </Wrap>
        </>
    );
};

export default PostThumb;

const Menu = styled.div`
    // padding: 1.25rem 6.25rem;
    padding: 1rem 0rem 0rem 0rem;
    display: flex;
    align-items: center;
`;
const ProfileImg = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 2.5rem;
    background: url(${props => props.$profileImg}) #FF7575 50% / cover no-repeat;
    margin-right: 0.94rem;
`;
const TitleWrap = styled.div`
    text-decoration: none;
    color: var(--black);
`;
const BlogName = styled(S_bold_17)`
    text-align: justify;

    color: var(--black, #000);
`;
const NickName = styled(XS_regular_16)`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;
`;

const Wrap = styled.div`
    display: flex;
    // padding: 1.875rem 6.25rem;
    padding: 1rem 0rem;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    gap: 2rem;
    align-self: stretch;
    flex-wrap: wrap;
`
const ThumbImgDiv = styled.div`
    width: 20rem;
    height: 20rem;
    // border-radius: 1.875rem;
    background: url(${props => props.$thumbImg}), var(${props=>props.color}) 50% / cover no-repeat;
    // background: url(${props => props.$thumbImg}), var(${props=>props.color}) 50% / cover no-repeat;
    /* style_shadow */
    // box-shadow: 6px 7px 7px 0px rgba(0, 0, 0, 0.50);
`

const Summary = styled(S_bold_17)`
    width: 30rem;
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;

    line-height: 2.3rem;
`
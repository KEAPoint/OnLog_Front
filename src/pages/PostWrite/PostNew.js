import React, { useState, useEffect } from "react";
import SunEditor from "suneditor-react";
import _ from 'lodash';
import "suneditor/dist/css/suneditor.min.css";
import styled from "styled-components";
import TextareaAutosize from 'react-textarea-autosize'; // npm install react-textarea-autosize
import { S_bold_19_2, XS_bold_13} from "../../components/style/Styled";
import Swal from "sweetalert2";
import { Get_Categori } from "../../apis/API_MyPage";
import { useNavigate } from "react-router-dom";


const PostNew = () => {
    const nagivate = useNavigate();
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [topic, setTopic] = useState("");
    const [category, setCategory] = useState("");

    const topics = ["lifestyle", "travel", "foodie", "entertainment", "tech", "sports", "news"]; // 주제 리스트

    // onChange 발생 시 content에 저장 (디바운스 적용)
    const handleChange = _.debounce((newContent) => {
        setContent(newContent);
        console.log(newContent);
    });

   // 제목 입력시 변경사항 반영
   const TitleHandler = (e) => {
    setTitle(e.currentTarget.value);
    }

    const nextBtnHandler = () => {
        // 제목, 글 내용, 해시태그, 카테고리 모두 선택했는지 확인해야함
        if(title==""){
            alert('제목을 입력해주세요');
            window.scrollTo({top:0, behavior:"smooth"});

        }
        else if (content==""){
            alert('글을 작성해주세요');
            window.scrollTo({top:0, behavior:"smooth"});
        }
        else{
            console.log('해시태그: ', tagList);
            console.log('카테고리 : ',category);
            console.log('주제 : ',topic);
            console.log('내용 : ', content);

            // navigate(``);
        }
    }

    const [tagItem, setTagItem] = useState('')
    const [tagList, setTagList] = useState([])
  
    const onKeyPress = e => {
      if (e.target.value.length !== 0 && e.key === "Enter") { // enter key 누르면
        submitTagItem() // tagItem에 저장
      }
    }
    // 태그리스트에 태그아이템 추가
    const submitTagItem = () => {
      if (!tagList.includes(tagItem)) { // tagList에 tagItem이 포함되어 있지 않은 경우에만 추가
          let updatedTagList = [...tagList] // 현재 taglist 복사
          updatedTagList.push(tagItem) // taglist 끝에 현재 태그아이템 추가
          setTagList(updatedTagList)
          setTagItem('')
      }
      else{
          alert('중복값 x')
      }
      console.log("tag add. taglist : ", tagList);

    }
    // 태그 삭제
    const deleteTagItem = e => {
      const deleteTagItem = e.target.parentElement.firstChild.innerText
      const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem)
      setTagList(filteredTagList)
      console.log("tag delete. taglist : ", tagList);
    }

    // 카테고리
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategory = async () => {
            const data = await Get_Categori();
            
            let sortedData = data.data.sort((a, b) => a.order - b.order);
            console.log("sortedData: ",sortedData);
            setCategories(sortedData);
        }
        fetchCategory();
      }, []);




   return (
    <Wrap>
        {/* <StickyWrap> */}
            <Title>제목</Title>
            <TitleInput type='text' value={title} style={{ overflow: 'hidden' }} placeholder="제목을 입력하세요" onChange={TitleHandler}/>
        {/* </StickyWrap> */}

        <div className="text-editor">
            <SunEditor 
                width="90rem"
                height="70rem"
                setOptions={{
                    buttonList: [
                        [
                            'undo', 'redo',
                            'font', 'fontSize', 'formatBlock',
                            'paragraphStyle', 'blockquote',
                            'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript',
                            'fontColor', 'hiliteColor', 'textStyle',
                            'removeFormat',
                            'outdent', 'indent',
                            'align', 'horizontalRule', 'list', 'lineHeight',
                            'table', 'link', 'image', 'video', 'audio',
                            'fullScreen', 'showBlocks', 'codeView',
                            'preview', 'print',
                            'save', 'template',
                        ]
                    ],
                }}
                onChange={handleChange}
            />
        </div>
        
        {/* 해시태그 입력 */}
        <Title>
            <div> 해시태그 입력 </div>
            <Tagging> * 해시태그 하나씩 입력 후 엔터를 눌러주세요!</Tagging>
            <TagBox> 
                {/* 생성된 태그 하나하나당 박스 */}
                {tagList.map((tagItem, index) => {
                return (
                    <TagItem key={index}>
                    <Text>{tagItem}</Text>
                    <XButton onClick={deleteTagItem}>X</XButton>
                    </TagItem>
                )
                })}
                {/* 태그 입력하는 입력칸 */}
                <TagInput
                    type='text'
                    tabIndex={2}
                    onChange={e => setTagItem(e.target.value)}
                    value={tagItem}
                    onKeyPress={onKeyPress} // enter누르면 해시태그 생성
                />
            </TagBox>
        </Title>

        {/* 카테고리 선택 */}
        <Title>
            <div>카테고리 선택</div>
            <div style={{paddingTop:"1rem", paddingBottom:"1rem"}}>
                {categories.map((cate) => (
                    <CateBtn key={cate.id} onClick={() => setCategory(cate.name)} selected={category === cate.name}>
                        {cate.name}
                    </CateBtn> 
                ))}
            </div>
        </Title>


        {/* 주제 선택 */}
        <Title>
            <div>주제 선택</div>
            <div style={{paddingTop:"1rem", paddingBottom:"1rem"}}>
                {topics.map((top) => (
                    <TopicBtn key={top} onClick={() => setTopic(top)} selected={topic === top}>
                        #{top}
                    </TopicBtn> 
                ))}
            </div>
        </Title>

        <BtnWrap>
            <NextBtn onClick={nextBtnHandler}>다음</NextBtn>
        </BtnWrap>
               
    </Wrap>
  );
};

export default PostNew;



const Tagging = styled(XS_bold_13)`
    padding:0.5rem 0rem 0rem 0.5rem;
    color: red;
`
const TagBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 1rem 1rem 1rem 0rem;
    padding: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;

    &:focus-within {
    border-color: #FF7575;
    }

    &:hover{
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
    }
`

const TagItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 1rem;
    padding: 0rem 0.5rem;
    background-color: #FF7575;
    border-radius: 5px;
    color: white;

    /* S-medium-20.8(RE) */
    font-family: Pretendard;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 158.023%; /* 2.05431rem */
  `

const Text = styled.span``

const XButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    margin-left: 0.2rem;
    background-color: white;
    border-radius: 50%;
    border: 1px solid white;
    color: tomato;

    cursor: pointer;
`

const TagInput = styled.input`
    display: inline-flex;
    background: transparent;
    border: none;
    outline: none;
    cursor: text;

    /* S-regular_20(RE) */
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.3rem; /* 184% */
    letter-spacing: 0.0125rem;
`



const StickyWrap = styled.div`
    background-color: white;
    position: sticky;
    top: 0;
`
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.25rem 7.5rem;
    align-items: center;
    gap: 1.875rem;
    align-self: stretch;
`

const Title = styled(S_bold_19_2)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
const TitleInput = styled.input`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding: 1rem 0rem 1rem 1rem;
    border: none;
    border-bottom: 1.5px solid var(--gray_bold, #4A4A4A);

    resize: none;

    color: var(--gray_bold, #4A4A4A);

    /* S-regular_20(RE) */
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.3rem; /* 184% */
    letter-spacing: 0.0125rem;

    &:hover{
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
    }
`
const CateBtn = styled.button`
    color: ${props => props.selected ? 'white' : 'var(--gray_bold, #4A4A4A)'};
    background-color: ${props => props.selected ? '#FF7575' : 'white'};

    /* S-bold-19.2(RE) */
    font-family: Pretendard;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    border: 1px solid black;
    padding: 0.75rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:hover {
        color: white;
        background: #FF7575;
    }

    //버튼 클릭 시 애니메이션
    &:active {
        transform: scale(0.95);
    }
`
const TopicBtn = styled.button`
    color: ${props => props.selected ? 'white' : 'var(--gray_bold, #4A4A4A)'};
    background-color: ${props => props.selected ? '#FF7575' : 'white'};

    /* L-semibold-32(RE) */
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    border: none;
    margin-right: 2rem;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
    
    &:hover {
        color: white;
        background: #FF7575;
    }

    //버튼 클릭 시 애니메이션
    &:active {
        transform: scale(0.95);
    }
`

const BtnWrap = styled.div`
    padding-Top: 2rem;
    padding-Left:5rem;
    padding-Right:5rem;
`
const NextBtn = styled.button`
    display: flex;
    padding: 0.75rem 4.0625rem;
    align-items: center;
    gap: 0.9375rem;

    border: none;
    background: black;
    color: white;
    cursor: pointer;

    text-align: justify;

    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    transition: 0.3s ease-in-out;

    &:hover{
        color: black;
        background: white;
        box-shadow: inset 0 0 0 5px black;
    }
`
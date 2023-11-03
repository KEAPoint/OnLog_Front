import styled from "styled-components";
import { useState } from "react";

const CommentWrite = () => {
    
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState("");
  
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = () => {
        setMessages([...messages, inputText]);
        setInputText("");
    }
    return(
        <Wrap>
            <WriteWrap type="text" value={inputText} onChange={handleInputChange}/>
            <Sendbtn onClick={handleSubmit} >
                Send
            </Sendbtn>
        </Wrap>
    );
};

export default CommentWrite;

const Wrap = styled.div`
    padding: 1rem 2rem 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

`

const WriteWrap = styled.textarea`
    height: auto;
    min-height: 3rem;
    display: flex;
    padding: 2.5rem 1.875rem 2.5rem 3.125rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    background: black;
    color: white;
    
    border: none;
    outline: none;
    resize: none;
`

const Sendbtn = styled.button`
    display: flex;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 0.9375rem;

    color: var(--black, #000);
    background: var(--white, #FFF);

    text-align: justify;
    /* S-bold-19.2(RE) */
    font-family: Pretendard;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    border: 2px solid black;
    cursor: pointer;

    &:hover{
        background: var(--black, #000);
        color: var(--white, #FFF);

        transition: 0.3s;
    }
`

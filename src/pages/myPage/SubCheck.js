import React from 'react';

const SubCheck = () => {
    return (
        <>
            <Button name = 'sub' onClick={handleClick}>구독하기</Button>
        </>
    );
};

export default SubCheck;

const Button = styled(SBold192).attrs({as:'button'})`
    display: flex;
    padding: 0.75rem 6.03125rem;
    align-items: center;
    gap: 0.9375rem;
    background: var(--black, #000);
    border: 4px solid black;
    cursor: pointer;

    color: var(--white, #FFF);
    text-align: justify;


    &:hover{
        background: white;
        color: black;
        transition: 0.3s;
    }
    &:active{
        transform: scale(0.95);
    }
`
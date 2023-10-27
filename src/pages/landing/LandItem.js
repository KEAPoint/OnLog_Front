import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { M_regular_38, XL_semibold_80 } from '../../components/style/Styled';


const LandItem = ({info}) =>  {
    const [isHovering, setIsHovering] = useState(0);
    return (
        <div
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
        >
            {
                info.img==="" ? (
                    <Field></Field>
                ):(
                    <FieldL to={`/main/${info.name}`}>
                        <FieldImg $img={info.img} $hover={isHovering}>
                            {isHovering===1 && (
                                <Wrap>
                                    <Title>#{info.name}</Title>
                                    <Contents>{info.contents}</Contents>
                                </Wrap>
                            )}
                        </FieldImg>
                    </FieldL>
                )
            }
        </div>
    );
};

export default LandItem;

const FieldL = styled(Link)`
    text-decoration: none;
    width: 29.0625rem;
    height: 45.1875rem;
`;
const Field = styled.div`
    width: 29.0625rem;
    height: 45.1875rem;
`;
const FieldImg = styled.div`

    width: 100%;
    height: 100%;

    background: ${props => props.$hover ? (
            `linear-gradient(0deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.70) 100%), url(${props.$img}), lightgray 50% / cover no-repeat`
        )
        :(
            `url(${props.$img})`
        )};
    display: flex;

`;


const Wrap = styled.div`
    padding: 2.75rem 3.375rem 3.9375rem 3.375rem;
    display: flex;
    
    flex-direction: column;
    gap: 1.06rem;
`;

const Title = styled(XL_semibold_80)`
    color: var(--black, #000);
    word-break: break-all;
`;
const Contents = styled(M_regular_38)`

    color: var(--black, #000);

`;


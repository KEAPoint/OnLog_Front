import React from 'react';
import {ReactComponent as Vector} from '../../assets/images/background/Vector.svg';
import {ReactComponent as RVector} from '../../assets/images/background/RVector.svg';

const BackImage = () => {
    return (
        <div>
            <Back/>
            <Back2/>
        </div>
    );
};

export default BackImage;

// 뒷배경
const Back = styled(Vector)`
    position: absolute;
    /* top: -15rem; */
    left: 40rem;
    /* z-index: 10; */
    /* background-color: red; */
`;

const Back2 = styled(RVector)`
    position: absolute;
    top: 60rem;
    left: 0rem;
    /* z-index: 10; */

`;
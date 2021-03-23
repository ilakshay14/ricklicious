import styled from "styled-components";
import { FlexRow } from "../../theme/defaultStyles";

const StyledThemeToggler = styled.div`
    
    width: 100%;
    ${FlexRow}
    justify-content: flex-end;
    align-items: center;

    .rick{
        width: 50px;
        height: 50px;
        margin-left: 10px;
    }

    .morty{
        width: 30px;
        height: 30px;
        margin-right: 15px;
    }

    input[type=checkbox]{
        height: 0;
        width: 0;
        visibility: hidden;
    }

    label {
        cursor: pointer;
        text-indent: -0px;
        width: 50px;
        height: 20px;
        background: #53ff11;
        display: block;
        border-radius: 10px;
        position: relative;
        border: 1px solid #53ff11;
    }

    label:after{
        content: '';
        position: absolute;
        top: 2.5px;
        left: 2.5px;
        width: 15px;
        height: 15px;
        background: #000;
        border-radius: 15px;
        transition: 0.5s;
    }

    input:checked + label {
        background: #ff01c1;
        border: 1px solid #ff01c1;
	
    }

    input:checked + label:after {
        left: calc(100% - 2.5px);
        transform: translateX(-100%);
        
    }

    label:active:after {
        width: 10px;
	
    }
`;

export default StyledThemeToggler;
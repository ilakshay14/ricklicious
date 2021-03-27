import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../theme/defaultStyles";

const StyledPagination = styled.div`
    width: 200px;

    ${FlexRow}

    justify-content: space-evenly;
    align-items: center;

    button{
        border: none;
        background: none;
        font-size: 150%;
        border-radius: 50%;
        

        ${FlexColumn}
        cursor: pointer;

        ion-icon{
            transition: all 0.2s ease-in-out;
        }        

        ion-icon:hover{
            filter: drop-shadow(1px 1px 1px #000000);
        }
    }

`;

export default StyledPagination;
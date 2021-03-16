import styled from "styled-components";
import { FlexRow } from "../../theme/defaultStyles";

const StyledCharacters = styled.div`
    //border: 1px solid black;
    width: 100%;
    height: 100%;

    ${FlexRow}
    justify-content: space-evenly;
    gap: 30px;

`;

export default StyledCharacters;
import styled from "styled-components";

const StyledContainer = styled.section`
    padding: 20px;
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;
`;

const Container = ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}

export default Container;
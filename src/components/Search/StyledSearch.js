import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../theme/defaultStyles';

const StyledSearch = styled.div`
    width: 100%;
    padding: 20px;
    ${FlexRow}

    div {
        ${FlexColumn}
        justify-content: center;
        align-items: center;

        width: 100%;

        input, .actionButton {
            border: 2px solid black;
            border-radius: 5px;
            height: 50px;
            padding: 5px 10px 5px 10px;
            font-size: 100%;
            font-weight: normal;
            letter-spacing: 1px;
        }

        input{
            
            width: 100%;
            outline: none;
            margin-bottom: 10px;

            ::placeholder{
                text-align: center;
            }
            
        }

        .actionButton {
            width: 200px;
            border: none;
            border-color: #57F22A;
            background-color: #53ff11;            
            cursor: pointer;            
            transition: all .7s ease-out;
        }

    }

    .rick___shouts{
        position: absolute;
        border: 1px solid #ff01c1;
        background-color: #ff01c1;
        width: 90%;
        height: 450px;
        border-radius: 10px;
        padding: 20px;
        
        display: flex !important;
        flex-direction: column;

        -webkit-box-shadow: 3px 4px 40px 2px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 4px 40px 2px rgba(0,0,0,0.75);
        box-shadow: 3px 4px 40px 2px rgba(0,0,0,0.75);

        p{
            font-size: 150%;
            width: 80%;
            text-align: center;
        }

        button{
            margin-top: 20px;
            width: 250px;
            border: none;
            border-color: #57F22A;
            background-color: #53ff11;            
            cursor: pointer;            
            transition: all .7s ease-out;
            border-radius: 5px;
            height: 50px;
            padding: 5px 10px 5px 10px;
            font-size: 100%;
            font-weight: normal;
            letter-spacing: 1px;
        }
    }

    @media screen and (min-width: 56rem) {
            .rick___shouts{
                max-width: 1000px;
                height: 200px;

                button{
                    margin-top: 10px;
                }
            }

            div{
                ${FlexRow}
                justify-content: space-evenly;
                align-items: center;

                input{
                    width: 75%;
                    margin-bottom: 0px;
                    font-size: 150%;
                    text-align: center;
                    
                }

                .actionButton {
                    width: 200px;
                    height: 100%;
                    border: none;
                    border-color: #53ff11;
                    background-color: #53ff11;            
                    cursor: pointer;            
                    transition: all .7s ease-out;

                    :hover{
                        background-color: #ff01c1;
                        font-size: 120%;
                        color: white;
                        -webkit-box-shadow: 3px 4px 25px 2px rgba(0,0,0,0.75);
                        -moz-box-shadow: 3px 4px 25px 2px rgba(0,0,0,0.75);
                        box-shadow: 3px 4px 25px 2px rgba(0,0,0,0.75);
                    }
                }
            }
        }
    


`;

export default StyledSearch;
import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../theme/defaultStyles";

const StyledSingleCharacter = styled.div`
    
    ${FlexColumn}
    align-items: center;
    margin-top: 20px;

    .char__image{
        width: 90%;

        img{
            width: 100%;
            max-height: 400px;
            object-fit: cover;
            border-radius: 10px;
        }

    }

    .char__desc{
        //border: 1px solid black;
        width: 90%;
        margin-top: 10px;
        padding: 0 2rem 2rem 2rem;

        .char__meta{
            margin-top: 5px;
            ${FlexRow}
            justify-content:space-between;
            width: 50%;
            font-size: 90%;
            color: ${({ theme }) => theme?.meta};
        }

        hr{
            margin-top:7px;
            height:1px;
            background: ${({ theme }) => theme?.divider};
            border: none;
        }

        .primary__info{
            div{
                ${FlexRow}
                margin: 15px auto;
                p{
                    width: 50%;
                }
            }
        }
    }

    .backButton{
        width: 100%;

        ${FlexRow}
        //justify-content: center;

        button {
            border-radius: 5px;
            height: 40px;
            padding: 5px 10px 5px 10px;
            font-size: 100%;
            font-weight: normal;
            letter-spacing: 1px;

            border: none;
            border-color: #57F22A;
            background-color: #53ff11;
            cursor: pointer;
            line-height: 100%;
            ion-icon{
                vertical-align: middle;
                margin-right: 5px;
            }
        }
    }

    .rick___shouts{

        ${FlexColumn}
        justify-content: center;

        position: absolute;
        border: 1px solid #ff01c1;
        background-color: #ff01c1;
        width: 90%;
        max-width: 1000px;
        height: 300px;
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

        div{
            margin: auto;
            ${FlexRow}
            width: 70%;
            justify-content: space-evenly;

            button{
                margin: auto;
                margin-top: 20px;
                width: 200px;
                border: none;
                
                cursor: pointer;
                transition: all .7s ease-out;
                border-radius: 5px;
                height: 50px;
                padding: 5px 10px 5px 10px;
                font-size: 100%;
                font-weight: normal;
                letter-spacing: 1px;
            }

            .positiveAction{
                border-color: #57F22A;
                background-color: #53ff11;
            }

            .negativeAction{
                border-color: #000;
                background-color: #fff;
            }
        }

        
    }

    @media screen and (min-width: 42rem) {
        ${FlexRow}
        justify-content: space-between;
        margin-top: 70px;

        .char__image{
            width: 35%;
        }

        .char__desc{
            //border: 1px solid black;
            width: 55%;

            .char__meta{
                width: 40%;
            }

            .primary__info{
                div{
                    p{
                        width: 70%;

                        :first-of-type{
                            width: 30%;
                        }
                    }
                }
            }
        }

        .rick___shouts{
            ${FlexRow}
            height: 150px;
        }
    }


`;

export default StyledSingleCharacter;
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    //width: 250px;
    flex: 0 1 250px;
    height: 400px;

    //padding: 10px;
    overflow: hidden;
    border-radius: 5px;
    border: ${({ theme }) => theme?.border};

    cursor: pointer;
    transition: all .7s ease-out;

    img{
        display: block;
        height: 250px;
        object-fit: cover;
    }

    :hover{
        
        -webkit-box-shadow: ${({ theme }) => theme?.['box-shadow']};
        -moz-box-shadow: ${({ theme }) => theme?.['box-shadow']};
        box-shadow: ${({ theme }) => theme?.['box-shadow']};
    }

    .card__content{
        padding: 10px;

        .card__header{
            font-weight: 700;
            font-size: 110%;
            display: block;
        }
        .card__meta, .card__extra{
            font-size: 90%;
            //color: rgba(0,0,0, 0.4);
            color: ${({ theme }) => theme?.meta};
        }

        .card__desc{
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            color: ${({ theme }) => theme?.description};
            height: 40px;
        }

        .card__extra{
            margin-top: 0.5rem;
        }

        
    }

`;

const CharacterCard = (char) => {
    //console.log({ char });
    const { id, name, image, species, location, status } = char;
    return (

        <Card>
            <Link to={{
                pathname: `/character/${id}`,
                state: char
            }}>
                <img src={image} alt={name} />
                <div className='card__content'>
                    <p className='card__header'>{name}</p>
                    <p className='card__meta'>{species}</p>
                    <p className='card__desc'>{location?.name}</p>
                    <hr />
                    <p className='card__extra'>{status}</p>
                </div>
            </Link>
        </Card>

    );
}

export default CharacterCard;
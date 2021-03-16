import styled from "styled-components";

const Card = styled.div`
    //width: 250px;
    flex: 0 1 250px;
    height: 400px;

    //padding: 10px;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid rgba(34,36,38,.1);

    cursor: pointer;
    transition: all .7s ease-out;

    img{
        display: block;
        height: 250px;
        object-fit: cover;
    }

    :hover{
        
        -webkit-box-shadow: 3px 4px 25px 2px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 4px 25px 2px rgba(0,0,0,0.75);
        box-shadow: 3px 4px 25px 2px rgba(0,0,0,0.75);
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
            color: rgba(0,0,0, 0.4);
        }

        .card__desc{
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            color: rgba(0,0,0, 0.68);
            height: 40px;
        }

        .card__extra{
            margin-top: 0.5rem;
        }

        
    }

`;

const CharacterCard = ({ name, image, species, location, status }) => {
    return (
        <Card>
            <img src={image} alt={name} />
            <div className='card__content'>
                <p className='card__header'>{name}</p>
                <p className='card__meta'>{species}</p>
                <p className='card__desc'>{location?.name}</p>
                <hr/>
                <p className='card__extra'>{status}</p>
            </div>
        </Card>
    );
}

export default CharacterCard;
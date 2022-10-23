import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummeryCard = ({ news }) => {
    const { _id, title
        , author, details, total_view, rating, image_url} = news;
    // console.log(news);
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div>
                        <Image src={author?.img}
                            className="rounded-circle"
                            style={{height: "60px"}}
                        ></Image>
                        <div className='d-flex'>
                            <p className='me-3'><small>{ author?.name}</small></p>
                            <p><small>{author?.published_date}</small></p>
                        </div>
                    </div>
                    <div variant="dark">
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url}></Card.Img>
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div>
                        <FaStar className='text-warning'></FaStar>
                        <span>{ rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='text-warning'></FaEye>
                        <span>{ total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;
import React, { useEffect, useState } from 'react';
import './post.css'; 
export default function Post({ data, date }) {
    const [isLiked, SetIsLiked] = useState(false)
    const post_liked = JSON.parse(localStorage.getItem("liked"));

    const publishedDate = new Date(data.publishedDate).toLocaleDateString();

    const dateParts = publishedDate.split('/');
    const month = ('0' + dateParts[0]).slice(-2); 
    const day = dateParts[1];
    const year = dateParts[2];
    const formattedPublishedDate = `${month}/${day}/${year}`;
   
    const dateObject = new Date(date);

    const formattedDate = dateObject.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });

    useEffect(() => {
        SetIsLiked(post_liked?.find(obj => obj.id === data._id) !== undefined);
    }, [post_liked, data._id])


    const handleLike = () => {
        let liked = [];
        if (localStorage.getItem("liked")) {
            liked = JSON.parse(localStorage.getItem("liked"));
            liked.push({ id: data._id });
            localStorage.setItem("liked", JSON.stringify(liked));
        }
        else {
            localStorage.setItem("liked", JSON.stringify([{ id: data._id }]));
        }
        SetIsLiked(true);
    }
    const like_counts = parseInt(data.likes) + 1


    return (
        <div>
            {formattedPublishedDate === formattedDate ?
                <div className="post">
                    < div className="post-header" >
                        <span className="author">{data.author}</span>
                        <span className="publishedDate">{publishedDate}</span>
                    </div >
                    <p className="post-text">{data.text}</p>
                    <div className='image-container'>
                        {data.imageUrl && (
                            <img src={data.imageUrl} className="post-image" alt={data.imageUrl} />
                        )}
                    </div>

                    <div className="post-buttons">
                        <a href={data.url} className="post-button url">Redirect to Original Tweet &rarr;</a>

                        <button className="post-button" onClick={handleLike}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked ? "red" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="like-svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>{data.likes} Likes
                        </button>
                    </div>
                </div > : null}
            {date === "" ?
                <div className="post">
                    < div className="post-header" >
                        <span className="author">{data.author}</span>
                        <span className="publishedDate">{publishedDate}</span>
                    </div >
                    <p className="post-text">{data.text}</p>
                    <div className='image-container'>
                        {data.imageUrl && (
                            <img src={data.imageUrl} className="post-image" alt={data.imageUrl} />
                        )}
                    </div>

                    <div className="post-buttons">
                        <a href={data.url} className="post-button url">Redirect to Original Tweet &rarr;</a>
                        <button className="post-button" onClick={handleLike}><svg xmlns="http://www.w3.org/2000/svg" fill={isLiked ? "red" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="like-svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                            {isLiked ? like_counts : data.likes} Likes</button>
                    </div>
                </div > : null}
        </div>
    );
}

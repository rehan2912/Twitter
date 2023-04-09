import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/getposts';
import Post from '../Post';
import './posts.css'; // import the CSS file

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    
    useEffect(() => {
        const getData = async () => {
            setPosts(await getPosts());
        };
        getData();
    }, []);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className="posts">
            <div className='date-container'>
                <label htmlFor="date-picker">Date:</label>
                <input type="date" id="date-picker" value={selectedDate} onChange={handleDateChange} />
            </div>
            <div>
                {posts?.map((item) => {
                    return <Post key={item._id} data={item} date={selectedDate} />;
                })}
            </div>
        </div>
    );
}

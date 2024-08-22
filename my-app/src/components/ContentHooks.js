import React, { useState, useEffect } from 'react';
import savedPosts from '../posts.json';
import PostItem from './PostItem';
import css from './css/Content.modules.css';

function ContentHooks() {

    const [isLoaded, setLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(isLoaded => !isLoaded);
            setFetchedPosts(fetchedPosts => savedPosts.savedPosts);
        }, 2000);
        }, [])

    const handleChange = (event) => {
        setFetchedPosts(fetchedPosts.filter(post => {
            return post.name.toLowerCase().includes(event.target.value)
        }));
    }

  return (
    <div className={css.TitleBar}>
    <h1>My Photos</h1>
    <form>
        <label htmlFor='searchInput'>Search: </label>
        <input type='search' id='searchInput' placeholder='By Author' name='searchbox' onChange={handleChange} />  
        <h4>Posts found: {fetchedPosts.length}</h4>
    </form>
    <PostItem posts={fetchedPosts} />  
  </div>
  )
}

export default ContentHooks

import React from 'react'
import styles from './InfoPosts.module.css'

const InfoJobPosts = ({posts, loading}) => {
    if (loading){
        return <h2>loading..</h2>
    }
  
    return (
            <div className={styles.containerJob}>
                {posts.slice(0,3)
                .map(post =>(
                    <div id = {post.id} className = {styles.postboxJob}>
                        <a href={post.link} target="_blank" rel="noreferrer" >
                        <div className = {styles.date}>{post.date}</div>
                        <div className ={styles.postTitle}>{post.title}</div>
                        </a>
                    </div>
                ))}
            </div>
    )
}

export default InfoJobPosts;
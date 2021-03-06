import React from 'react'
import styles from './CommunitySpacePosts.module.css'

const CommunitySpacePosts = ({posts, loading}) => {

    const posts_top = posts.slice(0,3);
    const posts_bottom = posts.slice(3,6); 

    if(loading){
        return <h2>loadgindd</h2>
    }
    return (
        <div className={styles.container}>

            <div className ={styles.postsContainer}>
                {posts_top.map(post => (
                    <div key = {post.id} className = {styles.post}>
                        <div className = {styles.date}>2020.10.13</div>
                        <div className ={styles.postText}>{post.title}</div>
                        <div className ={styles.tagContainer}>
                            <div className = {styles.tagGreen}>Spring</div>
                            <div className = {styles.tagYellow}>취준</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className ={styles.postsContainer}>
                {posts_bottom.map(post => (
                            <div key = {post.id} className = {styles.post}>
                                <div className ={styles.date}>2020.10.19</div>
                                <text className = {styles.postText}>{post.title}</text>
                                <div className ={styles.tagContainer}>
                                <div className = {styles.tagYellow}>취준</div>
                            </div>
                        </div>
                    ))} 
            </div>
        </div>
    )
}

export default CommunitySpacePosts;
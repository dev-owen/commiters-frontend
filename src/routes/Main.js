import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileCard from '../components/main/ProfileCard'
import ProfileCardLogged from '../components/main/ProfileCardLogged'
import RankingGithub from '../components/main/RankingGithub'
import RankingBaekjun from '../components/main/RankingBaekjun.js'
import CommunitySpace from '../components/main/CommunitySpace.js'
import CommunitySideProject from '../components/main/CommunitySideProject.js'
import InfoTechRss from '../components/main/InfoTechRss'
import InfoNotice from '../components/main/InfoNotice'
import styles from './css/Main.module.css'
import mainText from '.././assets/images/main_text_winter@3x.png'
 

const Main = () => {
   
    const[isLogin, setIsLogin] = useState(false);
    const getLogState = (value) =>{
        if(value === true){
        setIsLogin(value);}
        //console.log("inside getloginstate");
    }

    const setProfileCard = (isLogin) => {
        if(isLogin === true) {
            return <ProfileCardLogged />
        }
        return <ProfileCard getLogState ={getLogState}/> 
    }

    const INTRO_MESSAGE = "이화여자대학교 개발자를 위한 커밋 이화동산 커뮤니티입니다.\n꾸준한 커밋으로 겨울 정원사 뱃지를 취득하세요!";

        return (
            <div className = "main-container">
                <Header></Header>
                <div className = {styles.mainBody}>
                    <Link to = "/">
                            <img src={mainText} alt="always for ewha developers" className = {styles.mainTextImage}/>
                    </Link>
                    <div className = {styles.introMessage}>
                            <NewlineText text = {INTRO_MESSAGE}/>
                    </div>
                        
                        {setProfileCard(isLogin)}
                        <RankingGithub />
                        <RankingBaekjun />
                        <CommunitySpace />
                        <CommunitySideProject />
                        <InfoTechRss />
                        <InfoNotice />
                    </div>
                <Footer className={styles.mainFooter}></Footer>
                </div>
        )
}


function NewlineText(props) {
    const text = props.text;
    
    //const styles = {lineHeight: "1.71", marginLeft: "9.5em" }
    const newText = text.split('\n').map((str, index) =><span key = {index} className ="intro-message-text">{str}<br/></span>);
    return newText;
  }

export default Main

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './RankingGithub.module.css'
import BlockWeather from './BlockWeather'
import BlockWeek from './BlockWeek'
import { getQuarterRanking, getWeekRanking } from '../../../api/APIRank'
import arrow from '../../../assets/icon/myProfile/arrow@3x.png'


//나중에 계절 파라미터로 받을 것
const SEASON_TITLE = "가을 정원사 랭킹 (9월-11월)"
const WEEK_TITLE = "10월 2주차 (2020.10.05 ~2020.10.11)"

const RankingGithub = () => {

    const [quarterBlocks, setQuarterBlocks] = useState([]);
    const [weekBlocks, setWeekBlocks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentLine, setCurrentLine] = useState(1)
    const [blocksPerLine] = useState(35);
    //나중에는 아예 나눠서 다른 api에서 받와야함

    useEffect(() => {
        
        const fetchBlocks = async () => {
            setLoading(true);
            const res = getQuarterRanking().then(res => {
                console.log(res);
                setQuarterBlocks(res.response);
                setLoading(false);
            }).catch(error => {
                console.log(error);
            })
        }

        const fetchWeekBlocks = async () => {
            setLoading(true);
            const res = getWeekRanking().then(res => {
                console.log(res);
                setWeekBlocks(res.response);
                setLoading(false);
            }).catch(error => {
                console.log(error);
            })
        }

        fetchBlocks();
        fetchWeekBlocks();
    }, []);

    
    //get currentpost
    // const indexOfLastBlock = currentLine * blocksPerLine;
    // const indexOfFirstBlock = indexOfLastBlock - blocksPerLine;
    // const currentWeekBlocks = weekBlocks.slice(indexOfFirstBlock, indexOfLastBlock);
    // const currentQuarterBlocks = quarterBlocks.slice(indexOfFirstBlock, indexOfLastBlock);
    //paginate
    const paginate = (lineNumber) => setCurrentLine(lineNumber)

    return (
        <div className={styles.rankingGithubContainer}>

            <div className={styles.subtitleText}>EWHA RANKING | Github</div>
            <div className={styles.rowBox}>
                <div className={styles.rankingGithubText}>{SEASON_TITLE}</div>
                <Link to="/Ranking" className={styles.link}>
                    <div className={styles.more}>MORE</div>
                    <img src={arrow} alt="arrow" className={styles.arrow} />
                </Link>
            </div>

            <div className={styles.blocksContainer}>
                <BlockWeather blocks={quarterBlocks} loading={loading} />
            </div>
            <div className={styles.rowBox2}>
                <div className={styles.weekText}>{WEEK_TITLE}</div>
                <Link to="/Ranking" className={styles.link}>
                    <div className={styles.more}>MORE</div>
                    <img src={arrow} alt="arrow" className={styles.arrow} />
                </Link>
            </div>
            <div className={styles.blocksContainer}>
                <BlockWeek blocks={weekBlocks} loading={loading} />
            </div>
        </div>
    )
}



export default RankingGithub
import React, { Component } from 'react';
import styles from './Homepage.module.scss';

class HomePage extends Component {
 render(){
     return (
         <>
         <h1>AltMedsconnector</h1>
         <div className={styles.videoContainer}>
         
         <iframe width="640" height="420" src="https://www.youtube.com/embed/R_sRpaPeB3Y" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className={styles.textBox}>
         <h3>Rethinking the way you receive care</h3>
         <p>Our approach to care is all about breaking down the walls of an office and supporting your health wherever you are. Our US-based, board-certified physicians and licensed psychiatrists and psychologists are available on your schedule.</p>
            </div>
         </div>
            <br/>
            <div>
                <h3>Find the right green medication for you!</h3>
            </div>
         </>
     )
 }
}

export default HomePage
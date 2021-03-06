import styles from '../styles/Home.module.css'
import React from 'react'

type Props = {
    goalSpeed: number
}

class GoalSpeed extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      if(this.props.active) {
        return (
          <div className={styles.upper_middle_top_card}>
            <p>Goal Speed</p>
            <h1>{this.props.goalSpeed} mph</h1>
          </div>
        );  
      } else {
        return (
          <div className={styles.upper_middle_top_card}>
          <p>Goal Speed</p>
          <h1>0 mph</h1>
        </div>
        )
      }
    }
  }


export default GoalSpeed
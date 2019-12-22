import React, { Component } from 'react';
import styles from './Studies.module.css';
import axios from 'axios';
import Study from '../../components/Study/Study';
import SeachBox from '../../components/SearchBox/SearchBox';

class Studies extends Component {
  state = {
    studies: [],
    search: '',
  }


  componentDidMount() {
    axios.get('https://api.otreeba.com/v1/studies?page=')
      .then(response => {
        this.setState({
          studies: response.data.data
        })
      })
  }

  handleInput = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const filterStudies = this.state.studies.filter(study => {
      return (
        study.name.toLowerCase().indexOf(this.state.search) !== -1 ||
        study.conditions[0].name.toLowerCase().indexOf(this.state.search)) !== -1 ||
        study.keyFindings.toLowerCase().indexOf(this.state.search) !== -1;
    })

    return (
      <div className={styles.Content} >
        <SeachBox
          className={styles.SearchBox}
          handleInput={this.handleInput}
        />
        <div className={styles.Studies}>
          {filterStudies.map(study => {
            return <Study
              key={study.keyFindings}
              doi={study.doi}
              name={study.name}
              content={study.keyFindings}
              condition={(study.conditions[0].name)}
            />
          })}
        </div>
      </div>
    )
  }
}

export default Studies;
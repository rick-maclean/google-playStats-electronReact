// @flow
import React, { Component } from 'react';
import electron from 'electron';
// using an ES6 transpiler, like babel
// import Img from 'react-image';
// import logo from './logo.svg';
//  import { Link } from 'react-router-dom';
// import styles from './Home.css';

import ImportCsvFileWithPapaParse from '../components/ImportCsvFileWithPapaParse';
import GooglePlayScraper from '../components/GooglePlayScraper';
import Table from '../components/Table';
import DisplayGoogleWbtApps from '../components/DisplayGoogleWbtApps';
import ListWbtApps from '../components/ListWbtApps';
import ImportCsvDataAllApps from '../components/ImportCsvDataAllApps';
import DownloadAllAppsCsvDataFiles from '../components/DownloadAllAppsCsvDataFiles';


const app = electron.remote;
const dialog = app.dialog;

export default class Home extends Component {
  state: {
    someStateVariable: string,
    googlePlayScaperProp: string
  }
  constructor() {
    super();
    this.state = {
      inputTextDelay1Char: 'this is something',
      textStateInHomeNoDelay: 'text In Home',
      someStateVariable: 'just a place holder for demo of structure',
      transactionDateInHome: 'Jan 4 1927',
      googlePlayScaperProp: 'connect scraper with Home.js'
    };
  }
  handleTryText(inputText) {
    const tryText = inputText;
    console.log('in handleTryText we have inputText as=>' + inputText);
    this.setState({ inputTextDelay1Char: tryText });
  }
  handleTransactionDate(inputText) {
    const tryTransactionDate = inputText;
    console.log('in handleTransactionDate we have inputText as=>' + inputText);
    this.setState({ transactionDateInHome: tryTransactionDate });
  }
  mainOnChangeTextToHomeNoDelay = (event) => {
    const target = event.target;
    console.log(target.name);
    console.log(target.value);
    if (target.name === 'textToHome') {
      this.setState({ textStateInHomeNoDelay: target.value });
    }
  }
  mainonChangepropInHome = (event) => {
    //could do something
    console.log('entering mainonChangepropInHome');
    const target = event.target;
    console.log(target.name);
    console.log(target.name);
    console.log('leaving mainonChangepropInHome');
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="App-header">
            <h2>Scripture Apps Install Stats</h2>
          </div>
          <DownloadAllAppsCsvDataFiles/>
          <ImportCsvDataAllApps/>

          <ListWbtApps />
          {/* ===================================================================================================================== */}
          {/*
          <ImportCsvFileWithPapaParse />
          */}
          {/* ===================================================================================================================== */}
          {/*
          <GooglePlayScraper
            propInHome={this.state.googlePlayScaperProp}
            onChangepropInHome={this.mainonChangepropInHome}
          />
          */}
          {/* ===================================================================================================================== */}
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';


import Chat from './cpm/chat';

import Ma from './cpm/navig';
import Spalsh from './cpm/Splash';
import { SplashScreen } from 'react-native-splash-screen';

export default class App extends Component{
  constructor(props) {
    super(props);
  
    this.state = { isLoading: true }
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
render(){
  if (this.state.isLoading) {
    return <Spalsh/>;
  }
  return(

<Ma></Ma>

    


  )


}

}
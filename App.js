import React, { Component } from 'react';
import { SwitchNavigator } from './src/navigation';

import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';

type Props = {};
export default class App extends Component<Props> {

  componentWilMount(){
    RNLanguages.addEventListener('change',this.onChangeLanguage);
  }
  
  componentWilUnmount(){
    RNLanguages.addEventListener('change',this.onChangeLanguage);
  }
  
  onChangeLanguage = ({ language })=>{
    i18n.locale=language;
  }

  render() {
    return (
      //Retorna un component
      <SwitchNavigator />
      
    );
  }
}

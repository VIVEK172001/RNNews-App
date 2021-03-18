import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Providers from "./src/navigation";

const App=()=>{
      return(
          <Providers/>
      );
}

export default App;

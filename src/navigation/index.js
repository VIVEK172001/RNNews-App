import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { AuthProvider } from './AuthProvider';

import Routes from "./Routes";

const Providers=()=>{
    return(
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    );
};

export default Providers;
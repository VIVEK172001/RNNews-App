import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";

const Routes=()=>{
    return(
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
};

export default Routes;
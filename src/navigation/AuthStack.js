import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createStackNavigator} from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import OnboardingScreen from  "../screens/OnboardingScreen";
import ForTab from "../ForTab";
import AsyncStorage from "@react-native-community/async-storage";

const Stack=createStackNavigator();
const Drawer = createDrawerNavigator();


const AuthStack=()=>{

    const [isFirstLaunch, setIsFirstLunch] = useState(null);
    let routeName;

    useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if(value==null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLunch(true);
      }else{
        setIsFirstLunch(false);
      }
    }); 
    }, []);

    if(isFirstLaunch==null)
    {
      return null;
    }else if(isFirstLaunch==true){
       routeName="Onboarding";
    }else{
       routeName="ForTab";
    }

    return(
         <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{header:()=>null}}/>
            <Stack.Screen name="ForTab" component={ForTab} options={{header:()=>null}}  />
         </Stack.Navigator>
    );
};

export default AuthStack;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
    },
});
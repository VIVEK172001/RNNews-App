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
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import OnboardingScreen from  "../screens/OnboardingScreen";
import ForTab from "../ForTab";
import AsyncStorage from "@react-native-community/async-storage";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { GoogleSignin } from '@react-native-community/google-signin';

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

    GoogleSignin.configure({
      webClientId: "571319375474-r6aadqt38t1gbtcrptr85lg23m8619d6.apps.googleusercontent.com",
    });

    }, []);

    if(isFirstLaunch===null)
    {
      return null;
    }else if(isFirstLaunch==true){
       routeName="Onboarding";
    }else{
       routeName="Login";
    }

    return(
         <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{header:()=>null}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{header:()=>null}}  />
            <Stack.Screen name="Signup"
                            component={SignupScreen}
                            options={({navigation}) => ({
                            title: '',
                            headerStyle: {
                            backgroundColor: '#f9fafd',
                            shadowColor: '#f9fafd',
                            elevation: 0,
                        },
                        headerLeft: () => (
                        <View style={{marginLeft: 10}}>
                            <FontAwesome.Button 
                                name="long-arrow-left"
                                size={25}
                                backgroundColor="#f9fafd"
                                color="#333"
                                onPress={() => navigation.navigate('Login')}/>
                        </View>
                        ),
                        })}
            />
        
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
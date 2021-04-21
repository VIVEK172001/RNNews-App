import React,{useState,useEffect,useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import DrawerContent from "../screens/DrawerContent";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from "@react-navigation/stack";
import ForTab from "../ForTab";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';

import TabScreen from "../screens/TabScreen";

import {AuthContext} from "../navigation/AuthProvider";
import FormButton from "../component/FormButton";

const TabStack=createStackNavigator();
const Drawer = createDrawerNavigator();





const AppStack=(props)=>{

    const {user,logout} = useContext(AuthContext);

    const HomeStackScreen=({navigation})=>(
  

        <TabStack.Navigator>
                <TabStack.Screen name="ForTab" component={ForTab} options={{
                    title:'News App',
            headerStyle:{
                backgroundColor: '#FF4331',
                shadowColor: '#f9fafd',
                elevation: 0,
            },
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#FF4331" onPress={() => navigation.openDrawer()}></Icon.Button>
            ),
            headerRight: () => (
                <Icon1.Button name="log-out" size={25} backgroundColor="#FF4331" onPress={() =>logout()}/>
            ),
            }}  />
                 {/* <Stack.Screen name="Tab1" component={Tab1}/> */}
        </TabStack.Navigator>
    )

    return(
        <Drawer.Navigator drawerContent={props=> <DrawerContent {...props}/>} >
            <Drawer.Screen name="Home" component={HomeStackScreen} options={{header:()=>null}} onPress={() => props.navigation.navigate("General")}/>
        </Drawer.Navigator>
        // <Stack.Navigator>
        //     <Stack.Screen name="ForTab" component={ForTab} options={{header:()=>null}}  />
        //     {/* <Stack.Screen name="Tab1" component={Tab1}/> */}
        // </Stack.Navigator>
    )
}

export default AppStack;

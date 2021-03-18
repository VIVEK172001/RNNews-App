import React from "react";
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen=({navigation})=>{

  const skip=({...props})=>(
    <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}>
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
  )

  const Next=({...props})=>(
    <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}>
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
  )

  const Done=({...props})=>(
    <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}>
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
  )

  const Dots=({selected})=>{
    let backgroundColor;

    backgroundColor=selected?"rgba(0,0,0,0.8)":"rgba(0,0,0,0.3)";

    return(
          <View style={{width:5,height:5,marginHorizontal:3,backgroundColor}}/>
    );

  }

     return(
        <Onboarding
        SkipButtonComponent={skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={()=>navigation.replace("ForTab")}
        onDone={()=>navigation.replace("ForTab")}
        pages={[
          {
            backgroundColor: '#FFFFFF',
            image: <Image source={require("../assests/newsitem.jpg")} style={styles.forimage}/>,
            title: 'WELCOME TO NEWS WORLD',
            subtitle: 'Meet the Greatest News',
          },
          {
            backgroundColor: '#FFFFFF',
            image: <Image source={require('../assests/7daylive.jpg')} style={styles.forimage}/>,
            title: 'BREAKING NEWS',
            subtitle: 'Because you deserve nothing but the truth',
          },
          {
            backgroundColor: '#FFFFFF',
            image: <Image source={require('../assests/worldpeople.jpg')} style={styles.forimage}/>,
            title: 'The Power of Information',
            subtitle: 'Connected to your community',
          },
        ]}
      />
     );
};

export default OnboardingScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
    },
    forimage:{
      height:370,
      width:370,
    }
});
import React from "react";
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import {windowHeight,windowWidth} from "../utils/Dimension";

const FromButton=({buttonTitle,...rest})=>{
     return(
         <TouchableOpacity style={styles.buttoncontainer} {...rest}>
             <Text style={styles.buttonText}>{buttonTitle}</Text>
         </TouchableOpacity>
     );
};

export default FromButton;

const styles=StyleSheet.create({
    buttoncontainer:{
        marginTop:10,
        width:'100%',
        height:windowHeight/15,
        backgroundColor:"#2e64e5",
        padding:10,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:3,
    },
    buttonText:{
        fontSize:18,
        fontWeight:"bold",
        color:'#ffffff',
        fontFamily:'Lato-Regular',    
    }
});
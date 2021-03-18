import React,{useState} from 'react'
import { View, StyleSheet,Image, Dimensions,TouchableOpacity} from 'react-native';
import {Button,Text} from "native-base";
import {color} from "react-native-reanimated";
import image3 from "../assests/world.jpg";
import Published from "./published";


const { width, height } = Dimensions.get('window')

const NewsCard = ({item,onPress}) => {
    const opimage=image3;

    const {url, title} = item

    const handlePress = () => (
        onPress({url, title})
    )

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.cardView}>
                <Image style={styles.image} source={item.urlToImage ? {uri: item.urlToImage } :image3}/>
                <Text style={styles.title}> {item.title}</Text>
                <Text style={styles.author}>{item.author} </Text>
                {/* <Image style={styles.image} source = {{uri: item.urlToImage}}/> */}
                <Text note numberOfLines={3} style={styles.description}>{item.description}</Text>
                <Published style={styles.author} date={item.publishedAt} />
                {/* <Text style={styles.author}>{item.publishedAt} </Text> */}
                {/* <Button transparent onPress={handlePress}>
                <Text style={[styles.author,{color:"#383CC1"}]}>view more...</Text>
                </Button> */}
            </View>
        </TouchableOpacity>
    )
}

export default NewsCard;

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginHorizontal: width * 0.02,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'

    },
    description: {
        marginVertical: width * 0.03,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 15
    },
    image: {
        height: height / 3.5,
        width:width-25,
        marginLeft: 0,
        marginRight: 0,
        marginTop:0,
        marginBottom: height * 0.02,
        borderTopLeftRadius: width * 0.05,
        borderTopRightRadius:width * 0.05
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.02,
        fontSize: 15,
        color: 'gray'
    }

})




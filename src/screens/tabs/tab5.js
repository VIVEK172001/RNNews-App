import React,{useState,useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,View,Spinner} from 'native-base';
import {articles_url,_api_key,country_code} from "../../api/apiurl_key";
import Axios from 'react-native-axios';
import NewsCard from "../../component/NewsCard";
import Model from "../../component/view";

const URL=`http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${_api_key}`;

const Tab5=()=>{

  const [details, setDetails] = useState(null);
  const [setModalVisible, setSetModalVisible] = useState(false);
  const [modalArticleData, setModalArticleData] = useState({});

  const handleItemDataOnPress = (articleData) => {
    setSetModalVisible(true);
    setModalArticleData(articleData);
  }

  const handleModalClose = () => {
    setSetModalVisible(false);
    setModalArticleData({});
  }

  const fetchDetails = async () => {
    try {
       const {data} = await Axios.get(URL);
       const details = data;

       setDetails(details)

    } catch (error) {
      console.log(error)
    }
  }
   
  useEffect(()=>{
    fetchDetails()
  }, [])

  if (!details) {
    return (
      <Container style={styles.container}>
        <Spinner color="#00b7c2" />
      </Container>
    )
  }else
  {
    return (
      <View style={styles.container}>
            <FlatList data={details.articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <NewsCard item = {item} onPress={handleItemDataOnPress}/>
                }}
            />
            <Model
                showModal={setModalVisible}
                articleData={modalArticleData}
                onClose={handleModalClose}
            />
      </View>
    );
  }
   
}
export default Tab5;

const styles=StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#E8E8E8"
    },
});
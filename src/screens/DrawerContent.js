import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import image2 from "../assests/image2.png";

const DrawerContent=(props)=> {

        const BASE_PATH =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
        const proileImage = 'react_logo.png';

        return (
          <SafeAreaView style={{flex: 1}}>
            {/*Top Large Image */}
            <Image
              source={require('../assests/user-male.png')} 
              style={styles.sideMenuProfileIcon}
            />
            <Text style={{fontWeight:"bold",marginVertical:10,marginHorizontal:80}}>User@gmail.com</Text>
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                label="Visit Us"
                onPress={() => Linking.openURL('https://aboutreact.com/')}
              />
              <View style={styles.customItem}>
                <Text
                  onPress={() => {
                    Linking.openURL('https://aboutreact.com/');
                  }}
                  >
                  Rate Us
                </Text>
                <Image
                  source={{uri: BASE_PATH + 'star_filled.png'}}
                  style={styles.iconStyle}
                />
              </View>
            </DrawerContentScrollView>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                color: 'grey'
              }}>
                  News App
            </Text>
          </SafeAreaView>
        );

}

export default DrawerContent;



const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});


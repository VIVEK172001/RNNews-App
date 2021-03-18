import React,{useState,useEffect} from 'react';
import moment from "moment";
import {
  Text,
} from 'react-native';

const published=({date})=>{

    const time = moment(date || moment.now()).fromNow();
    return(
        <Text note numberOfLines={1} children={time} style={{ marginHorizontal: 8}}/>
    );
};

export default published;

  
import React,{useContext} from 'react';
import { Container, Header, Content, Tab, Tabs,Left, Body, Right, Title, DefaultTabBar,ScrollableTab,Button,Icon,Text} from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';
import Tab6 from './tabs/tab6';
import Tab7 from './tabs/tab7';
import {AuthContext} from "../navigation/AuthProvider";
import FormButton from "../component/FormButton";


const renderTabBar = (props: any) => {
  props.tabStyle = Object.create(props.tabStyle);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <ScrollableTab {...props} />;
};

const TabScreen=({navigation})=>{

  const {user,logout} = useContext(AuthContext);
  
    return (
        <Container>
          {/* <Header hasTabs style={{backgroundColor:"#FF4331"}}>
          <Left/>
          <Body>
            <Title style={{color:"white"}}>News App</Title>
          </Body>
          <Right>
          <FormButton
            buttonTitle="Logout"
            onPress={() =>logout()}
          />
          </Right>
          </Header> */}
          <Tabs tabBarUnderlineStyle={{backgroundColor:"white"}} renderTabBar={renderTabBar}>
            <Tab heading="General" tabStyle={{backgroundColor:"#FF4331"}} activeTabStyle={{backgroundColor:"#FF4331"}}
            textStyle={{color:"white"}} activeTextStyle={{color:"white"}}>
              <Tab1 />
            </Tab>
            <Tab heading="TechCrunch" tabStyle={{backgroundColor:"#FF4331"}} activeTabStyle={{backgroundColor:"#FF4331"}}
            textStyle={{color:"white"}} activeTextStyle={{color:"white"}}>
              <Tab2 />
            </Tab>
            <Tab heading="Business" tabStyle={{backgroundColor:"#FF4331"}} activeTabStyle={{backgroundColor:"#FF4331"}}
            textStyle={{color:"white"}} activeTextStyle={{color:"white"}}>
              <Tab3 />
            </Tab>
            <Tab heading="Entertainment" tabStyle={{backgroundColor:"#FF4331"}} activeTabStyle={{backgroundColor:"#FF4331"}}
            textStyle={{color:"white"}} activeTextStyle={{color:"white"}}>
              <Tab4 />
            </Tab>
            <Tab heading="Health" tabStyle={{backgroundColor:"#FF4331"}} activeTabStyle={{backgroundColor:"#FF4331"}}
            textStyle={{color:"white"}} activeTextStyle={{color:"white"}}>
              <Tab5 />
            </Tab>
            <Tab heading="Sports" tabStyle={{backgroundColor:"#FF4331"}} activeTabStyle={{backgroundColor:"#FF4331"}}
            textStyle={{color:"white"}} activeTextStyle={{color:"white"}}>
              <Tab6 />
            </Tab>
            <Tab heading="Bitcoin" tabStyle={{backgroundColor:"#FF4331"}} activeTabStyle={{backgroundColor:"#FF4331"}}
            textStyle={{color:"white"}} activeTextStyle={{color:"white"}}>
              <Tab7 />
            </Tab>
          </Tabs>
        </Container>
      );
}

export default TabScreen;
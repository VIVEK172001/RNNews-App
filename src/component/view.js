import React, {useEffect} from 'react';
import { Dimensions,Modal, Share,ScrollView} from 'react-native';
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';
import { WebView } from 'react-native-webview';

const webViewHeight = Dimensions.get('window').height - 56;

const ModelComponent=({showModal,articleData,onClose})=>{

    const handleClose = () =>(
        onClose()
    )

    const handleShare = () => {
        const {url, title} = articleData;
        const message = `${title}\n\nRead More ${url}\n\nShared via sgpRNNewsApp`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
        );
    }
        

    const {url}=articleData;
     if(url!=undefined)
     {
        return(
        <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={handleClose}
        >
        <Container style={{backgroundColor:'#fff'}}>
            <Header style={{backgroundColor:'#FF4331'}}>
                <Left>
                    <Button onPress={()=>handleClose()} transparent>
                        <Icon name="close" style={{color: 'white', fontSize: 25}}/>
                    </Button>
                </Left>
                <Body>
                    <Title children={articleData.title} style={{color: 'white'}}/>
                </Body>
                <Right>
                    <Button onPress={handleShare} transparent>
                        <Icon name="share" style={{color: 'white', fontSize: 25}}/>
                    </Button>
                </Right>
            </Header>
            <Content contentContainerStyle={{height: webViewHeight,flex:1}}>
                <WebView source={{uri:url}} style={{flex: 1}}
                    onError={()=>handleClose()} startInLoadingState
                    scalesPageToFit ScrollView
                    
                />
            </Content>
        </Container>
        </Modal>
        )
     }else{
         return null;
     }

}

export default ModelComponent;
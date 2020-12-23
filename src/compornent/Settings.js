import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, Dimensions, ScrollView} from 'react-native';
import { Drawer, Text, Button } from 'react-native-paper';
import Modal from 'react-native-modal';

const Settings = (props)=>{
    console.log("setting",props.visible)

    const toggleVis = ()=>{
        props.setVis(!props.visible);
    }

    return(
        <Modal 
            isVisible={props.visible}
            animationIn='slideInRight'
            animationOut='slideOutRight'
            onBackdropPress={toggleVis}
        >
            <ImageBackground
                style={{width:250, height:650, left:145}}
                source={require('../../assets/drawable/PopBG_slide.png')}
            >

            </ImageBackground>
        </Modal>
    );
}

export default Settings;
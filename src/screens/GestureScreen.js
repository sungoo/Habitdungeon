import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const GestureScreen=()=>{
//     return(

//     );
// }

// //위와 아래는 같은 결과다.
// export default class GestureScreen extends React.Component{
//     render(){
//         return(
//             <View>

//             </View>
//         )
//     }
// }

export default class GestureHandler extends React.Component{
    translateX = new Animated.Value(0);
    translateY = new Animated.Value(0);
    handleGesture = Animated.event([{nativeEvent: {translationX: this.translateX, translationY: this.translateY}}], {useNativeDriver: true})
    handleGesture(event){
        console.log(event.nativeEvent);
    }
    render(){
        <View>

        </View>
    }
}
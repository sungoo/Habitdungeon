import React, {Component, useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Easing} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import PropTypes from 'prop-types';

const UserProfile = (props)=>{

    const [hp, setHP] = useState(100);
    const [exp, setEXP] = useState(0);
    const [level, setLV] = useState(1);
    const [coin, setCoin] = useState(0);

    useEffect(()=>{
        console.log(hp);
        console.log(exp);
        console.log(level);
        console.log(coin);
    },[]);
 
    const hpDrop = useEffect(()=>{
        setHP((hp)=> hp-12);
    }, [props.hp]);

    const expUP = useEffect(()=>{
        if(exp > 100){
            setEXP(0);
            setLV(level+1);
        }
        else{
            setEXP((exp)=> exp+8);
        }
    }, [props.exp]);

    const CoinGain = useEffect(()=>{
        setCoin((coin)=>coin+12);
    }, [props.coin]);

    return(
        <TouchableOpacity>
            <Image
                style={{resizeMode:"contain", width: 70, height: 70, position: "absolute", top: 10, left: 10, zIndex: 4}}
                source={require("../../assets/drawable/Profile.png")}
            />
            <View
                style={{top: 30, left: 70, zIndex: 2, width: 120, height: 20}}
            >
                <ProgressBar progress={hp/100} width={120} height={20}
                color="red" unfilledColor="rgba(0, 0, 0, 0.4)" borderWidth={0}
                borderRadius={10}
                />
            </View>
            <Image
                style={{resizeMode:"contain", width: 13, height: 13, position: "absolute", top: 33, left: 85, zIndex: 3}}
                source={require("../../assets/drawable/Heart.png")}
            />
            <View
                style={{width: 60, height: 12, top: 35, left: 67, zIndex: 2}}
            >
                <ProgressBar progress={exp/100} width={60} height={12}
                color="#6de9bc" unfilledColor="rgba(0, 0, 0, 0.4)" borderWidth={0}
                borderRadius={10}
                />
            </View>
            <Image
                style={{resizeMode:"contain", width: 15, height: 15, position: "absolute", top: 72, left: 72, zIndex: 1}}
                source={require("../../assets/drawable/Coin.png")}
            />
            <Text style={{fontSize: 15, color: 'white', position:"absolute", top: 28, left: 100, zIndex: 4}}>{props.hp} / 100</Text>
            <Text style={{fontSize: 15, color: 'white', position:"absolute", top: 50, left: 80, zIndex: 4}}>{props.exp}%</Text>
            <Text style={{fontSize: 15, color: 'white', position:"absolute", top: 69, left: 89, zIndex: 4}}>{props.coin}</Text>
        </TouchableOpacity>
    );
}

UserProfile.PropTypes={
    hp:PropTypes.number.isRequired,
    exp:PropTypes.number.isRequired,
    coin:PropTypes.number.isRequired,
}
UserProfile.defaultProps={
    hp:100,
    exp:0,
    coin:0,
}

export default UserProfile;
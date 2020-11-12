import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class UserProfile extends Component{
    constructor(props){
        super(props);

        this.state={
            hp: 100,
            exp: 0,
            coin: 0
        }
    }
    //useEffect 검색해서 사용해볼것
    // componentDidUpdate(){
    //     if(this.state.hp !== this.props.hp){
    //         this.setState({hp:this.props.hp})
    //     }
    //     if(this.state.exp !== this.props.exp){
    //         this.setState({exp:this.props.exp})
    //     }
    //     if(this.state.coin !== this.props.coin){
    //         this.setState({coin:this.props.coin})
    //     }
    // }

    render(){
        return(
            <TouchableOpacity>
                <Image
                    style={{resizeMode:"contain", width: 70, height: 70, position: "absolute", top: 10, left: 10, zIndex: 4}}
                    source={require("../../assets/drawable/Profile.png")}
                />
                <Image
                    style={{resizeMode:"contain", width: 120, height: 20, position: "absolute", top: 30, left: 70, zIndex: 1}}
                    source={require("../../assets/drawable/Bar_empty.png")}
                />
                <Image
                    style={{resizeMode:"contain", width: 120, height: 20, position: "absolute", top: 30, left: 70, zIndex: 2}}
                    source={require("../../assets/drawable/Bar_hp.png")}
                />
                <Image
                    style={{resizeMode:"contain", width: 13, height: 13, position: "absolute", top: 33, left: 85, zIndex: 3}}
                    source={require("../../assets/drawable/Heart.png")}
                />
                <Image
                    style={{resizeMode:"contain", width: 60, height: 12, position: "absolute", top: 55, left: 70, zIndex: 1}}
                    source={require("../../assets/drawable/Bar_empty.png")}
                />
                <Image
                    style={{resizeMode:"contain", width: 60, height: 12, position: "absolute", top: 55, left: 50, zIndex: 2}}
                    source={require("../../assets/drawable/Bar_exp.png")}
                />
                <Image
                    style={{resizeMode:"contain", width: 15, height: 15, position: "absolute", top: 72, left: 72, zIndex: 1}}
                    source={require("../../assets/drawable/Coin.png")}
                />
                <Text style={{fontSize: 15, color: 'white', position:"absolute", top: 28, left: 100, zIndex: 4}}>{this.props.hp} / 100</Text>
                <Text style={{fontSize: 15, color: 'white', position:"absolute", top: 50, left: 80, zIndex: 4}}>{this.props.exp}%</Text>
                <Text style={{fontSize: 15, color: 'white', position:"absolute", top: 69, left: 89, zIndex: 4}}>{this.props.coin}</Text>
            </TouchableOpacity>
        );
    }
}
import React, {useState, Component} from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';

class TodoElement extends Component{

    constructor(props){
        super(props);
        this.state={
            visible_a:false,
            isFightVisible:false
        }
    }

    showDialog(){
        this.props.showDialog();
    }
    handleCancel(){
        this.props.handleCancel();
    }
    handleDelete(){
        this.props.handleDelete();
    }

    toggleFightVisible(visible){
        this.props.toggleFightVisible(!isFightVisible);
    }

    render(){
        return(
            <ImageBackground
                style={styles.listbody}
                source={require("../../assets/drawable/BG_list.png")}
                imageStyle={{resizeMode:'contain'}}
            >
                <Image
                style={{resizeMode:"contain", width:60, height:60, position:"relative", top:32, left:10, zIndex:4}}
                source={require('../../assets/drawable/Mon_active.png')}
                />
                <Text style={{fontSize: 14, fontWeight:'bold', position:'relative', top:-15, left:100}}>UI/UX 과제하기</Text>
                <Text style={{fontSize: 12, position:'relative', top:-15, left:100}}>DUE : 11.15</Text>
                <TouchableOpacity 
                style={{width: 60, height: 60, position:"relative", left:250,top:-65}}
                onPress={()=>{this.showDialog()}}
                >
                    <ImageBackground
                        style={{width: 60, height: 60, alignItems:"center"}}
                        source={require('../../assets/drawable/Button_blue.png')}
                        imageStyle={{resizeMode:'contain'}}
                    >
                        <Image
                        style={{width:30, height:30, top:10, resizeMode:'contain'}}
                        source={require('../../assets/drawable/Icon_run.png')}
                        />
                        <Text style={{color:'white', fontSize:7, top:13}}>RUN</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                style={{width: 60, height: 60, position:"relative", alignItems:"center", left:320,top:-125}}
                onPress={()=>{this.toggleFightVisible(!isFightVisible)}}
                >
                <ImageBackground
                    style={{width: 60, height: 60, alignItems:"center"}}
                    source={require('../../assets/drawable/Button_pink.png')}
                    imageStyle={{resizeMode:'contain'}}
                >
                    <Image
                    style={{width:30, height:30, top:10, resizeMode:'contain'}}
                    source={require('../../assets/drawable/Icon_fight.png')}
                    />
                    <Text style={{color:'white', fontSize:7, top:13}}>FIGHT</Text>
                </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
        );
    }    
}

export default TodoElement;

const styles = StyleSheet.create({
    listbody:{
        resizeMode:"contain",
        width: 400,
        height: 120,
        zIndex: 1
    },


})
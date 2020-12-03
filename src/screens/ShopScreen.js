import React, {useState, useCallback, useEffect, Component} from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, TouchableHighlight, Dimensions, ScrollView, ScrollViewComponent} from 'react-native';
import { Drawer, Text, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Dialog from "react-native-dialog";
import Modal from 'react-native-modal';

const User = (props) =>{

}

//상점아저씨 말풍선
const RandomDialog = (props)=>{

    // let randial = [
    //     '../../assets/drawable/Shop/Talkballoon1.png',
    //     '../../assets/drawable/Shop/Talkballoon2.png',
    //     '../../assets/drawable/Shop/Talkballoon3.png',
    //     '../../assets/drawable/Shop/Talkballoon4.png'
    // ]

    let dial = '../../assets/drawable/Shop/Talkballoon1.png';
    // let dial2 = '../../assets/drawable/Shop/Talkballoon2.png';

    // const change=()=>{
    //     dial = dial2;
    // }

    return(
        <Image
            resizeMode='contain'
            style={{width:200, height:80, top:70, left:80, position:'absolute'}}
            source={require(dial)}
        />
    );
}

//샵 전경
const ShopView=(props)=>{
    return(
        <View style={{alignItems:'center'}}>
            <Image
                resizeMode={"contain"}
                style={[styles.books, {left:-144}]}
                source={require("../../assets/drawable/Shop/Books_dark1.png")}
            />
            <Image
                resizeMode={"contain"}
                style={[styles.books, {right:-144, position:'absolute'}]}
                source={require("../../assets/drawable/Shop/Books_dark2.png")}
            />
            <View
                style={{width:Dimensions.get('window').width, height:50, position:'absolute', top:240}}>
                <LinearGradient
                    colors={['#2B3274', '#A3857A']}
                    style={{width:'100%', height:'100%',}}
                />
            </View>
            <Image
                resizeMode={"contain"}
                style={[styles.shopKeeper, {position:'absolute'}]}
                source={require("../../assets/drawable/gif/shopkeeper.gif")}
            />
            <RandomDialog/>
        </View>
    );
}

//착용샷
const Fitting = (props)=>{
    
    
    return(
        <View style={{alignItems:'center'}}>
            <Image
                resizeMode={"contain"}
                style={{width:100, height:125, top:20, right:100}}
                source={require("../../assets/drawable/gif/player_idle.gif")}
            />
            <ImageBackground
                resizeMode={"contain"}
                style={{width:50, height:50, top:20, right:30, position:'absolute'}}
                source={require("../../assets/drawable/Shop/Box_equiped.png")}
            >

            </ImageBackground>
            <ImageBackground
                resizeMode={"contain"}
                style={{width:50, height:50, top:20, left:70, position:'absolute'}}
                source={require("../../assets/drawable/Shop/Box_equiped.png")}
            >
                
            </ImageBackground>
            <ImageBackground
                resizeMode={"contain"}
                style={{width:50, height:50, top:20, left:120, position:'absolute'}}
                source={require("../../assets/drawable/Shop/Box_equiped.png")}
            >
            
            </ImageBackground>
            <ImageBackground
                resizeMode={"contain"}
                style={{width:50, height:50, top:20, left:170, position:'absolute'}}
                source={require("../../assets/drawable/Shop/Box_equiped.png")}
            >
            
            </ImageBackground>
            <View style={{left:20}}>
                <Text style={{color:'#35C4E3', fontSize:20, bottom:50}}>BUFF</Text>
                <Text style={{fontSize:10, bottom:50}}>희귀 아이템 등장확률 : </Text>
                <Text style={{fontSize:10, bottom:50}}>체력 매일 자동회복률 : </Text>
                <Text style={{fontSize:10, bottom:50}}>경험치 획득 보너스 : </Text>
            </View>
        </View>
    );
}

const HairList = (props)=>{


    return(
        <ScrollViewComponent horizontal={false} style={{width:Dimensions.get('window').width,}}>
            <View style={styles.listItems}>
                <TouchableOpacity>
                    <ImageBackground
                        resizeMode={'contain'}
                        source={require("../../assets/drawable/Shop/Box_item.png")}
                    >

                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </ScrollViewComponent>
    );
}

//아이템 목록
const ItemList = (props)=>{


    return(
        <View>
            <View>
                <TouchableOpacity style={{right:150}}>
                    <Image
                        resizeMode={'contain'}
                        style={[styles.listButton]}
                        source={require("../../assets/drawable/Shop/Menu_hair.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{position:'absolute', right:50}}>
                    <Image
                        resizeMode={'contain'}
                        style={[styles.listButton]}
                        source={require("../../assets/drawable/Shop/Menu_hat.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{position:'absolute', left:50}}>
                    <Image
                        resizeMode={'contain'}
                        style={[styles.listButton]}
                        source={require("../../assets/drawable/Shop/Menu_cloth.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{position:'absolute', left:150}}>
                    <Image
                        resizeMode={'contain'}
                        style={[styles.listButton]}
                        source={require("../../assets/drawable/Shop/Menu_weapon.png")}
                    />
                </TouchableOpacity>
            </View>
            <View>
                
            </View>
        </View>
        
    );
}

const ShopPage=(props)=>{
    

    return(
        <View style={styles.main}>
            <LinearGradient
                //Background Linear Gradient
                colors={['#455E9F', '#2C2673']}
                style={styles.liner}
            >
                <ShopView/>
                <View
                    style={styles.feetingNList}
                >
                    <View>
                        <Fitting/>
                    </View>
                    <View style={{bottom:40}}>
                        <ItemList/>
                    </View>
                    <Image
                        resizeMode={'contain'}
                        style={{width:400, bottom:40}}
                        source={require('../../assets/drawable/Shop/Buff_hair.png')}
                    />
                </View>
            </LinearGradient>
        </View>
    )
}

export default ShopPage;

const styles = StyleSheet.create({
    main:{
        marginTop: 24,
        flex: 1,
        backgroundColor: '#534B88',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    liner:{
        position: 'absolute',
        left:0,
        right:0,
        top:0,
        height:620,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    books:{
        width: 125,
        height: 200,
        top:80,
    },
    shopKeeper:{
        width: 300,
        height: 170,
        top: 115,
        left:-87
    },
    feetingNList:{
        backgroundColor:'#F6F6F8', 
        flex:1,
        width:Dimensions.get('window').width, 
        top:88,
        alignItems:'center',
    },
    listButton:{
        width:150, 
        height:45,
    },
    listItems:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
    },
})
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, Dimensions, ScrollView} from 'react-native';
import { Drawer, Text, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Dialog from "react-native-dialog";
import Modal from 'react-native-modal';

const User = (props) =>{

}

//상점아저씨 말풍선
const RandomDialog = (props)=>{

    return(
        <Image
            resizeMode='contain'
            style={{width:200, height:80, position:'absolute'}}
            source={props.dial}
        />
    );
}

//샵 전경
const ShopView=(props)=>{

    const randial = {
        basic : require('../../assets/drawable/Shop/Talkballoon1.png'),
        murmur : require('../../assets/drawable/Shop/Talkballoon2.png'),
        thankToBuy : require('../../assets/drawable/Shop/Talkballoon3.png'),
        boast : require('../../assets/drawable/Shop/Talkballoon4.png')
    }

    const [dial, setDial] = useState(randial.basic);

    const randomchange = ()=>{
        let ran = Math.random()*3;
        console.log(ran);

        switch(Math.floor(ran)){
            case 0:
                setDial(randial.basic);
                break;
            case 1:
                setDial(randial.murmur);
                break;
            case 2:
                setDial(randial.boast);
                break;
            default:
                break;
        }
    }

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
            <TouchableWithoutFeedback onPress={randomchange}>
                <Image
                    resizeMode={"contain"}
                    style={[styles.shopKeeper, {position:'absolute'}]}
                    source={require("../../assets/drawable/gif/shopkeeper.gif")}
                />
            </TouchableWithoutFeedback>
            <View style={{bottom:130, left:10}}>
                <RandomDialog dial={dial}/>
            </View>
        </View>
    );
}

//착용샷
const Fitting = (props)=>{
    
    
    return(
        <View style={{alignItems:'center'}}>
            <Image
                imageStyle={{resizeMode: 'contain'}}
                style={{width:100, height:125, top:20, right:100}}
                source={require("../../assets/drawable/gif/player_idle.gif")}
            />
            <ImageBackground
                imageStyle={{resizeMode: 'contain'}}
                style={{width:50, height:50, top:20, right:30, position:'absolute'}}
                source={require("../../assets/drawable/Shop/Box_equiped.png")}
            >

            </ImageBackground>
            <ImageBackground
                imageStyle={{resizeMode: 'contain'}}
                style={{width:50, height:50, top:20, left:70, position:'absolute'}}
                source={require("../../assets/drawable/Shop/Box_equiped.png")}
            >
                
            </ImageBackground>
            <ImageBackground
                imageStyle={{resizeMode: 'contain'}}
                style={{width:50, height:50, top:20, left:120, position:'absolute'}}
                source={require("../../assets/drawable/Shop/Box_equiped.png")}
            >
            
            </ImageBackground>
            <ImageBackground
                imageStyle={{resizeMode: 'contain'}}
                style={{width:50, height:50, top:20, left:170, position:'absolute'}}
                source={require("../../assets/drawable/Shop/Box_equiped.png")}
            >
            
            </ImageBackground>
            <View style={{left:20}}>
                <Text key={Math.random().toString()} style={{color:'#35C4E3', fontSize:20, bottom:50}}>BUFF</Text>
                <Text key={Math.random().toString()} style={{fontSize:10, bottom:50}}>희귀 아이템 등장확률 : </Text>
                <Text key={Math.random().toString()} style={{fontSize:10, bottom:50}}>체력 매일 자동회복률 : </Text>
                <Text key={Math.random().toString()} style={{fontSize:10, bottom:50}}>경험치 획득 보너스 : </Text>
            </View>
        </View>
    );
}

const Item = (props)=>{

    console.log(props.imagePath);
    
    //const img = require(props.imagePath);

    return(
        <View style={styles.listItems}>
            <TouchableOpacity>
                <ImageBackground
                    style={{flex:1, width:'100%', height:'100%'}}
                    source={require("../../assets/box_equiped.png")}
                >

                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const HairList = (props)=>{


    return(
        <ScrollView horizontal={false} style={styles.scroll}>
            <Item imagePath="../../assets/box_equiped.png"/>
        </ScrollView>
    );
}

const CatalogButton = (props)=>{

    return(
        <Image
            resizeMode='contain'
            style={[styles.listButton]}
            source={props.catalog}
        />
    );
}

//아이템 목록
const ItemList = (props)=>{

    const Catalog = {
        hair:require("../../assets/drawable/Shop/Menu_hair.png"),
        hat:require("../../assets/drawable/Shop/Menu_hat.png"),
        cloth:require("../../assets/drawable/Shop/Menu_cloth.png"),
        weapon:require("../../assets/drawable/Shop/Menu_weapon.png"),

        hairSelect:require("../../assets/drawable/Shop/Menu_hair_selected.png"),
        hatSelect:require("../../assets/drawable/Shop/Menu_hat_selected.png"),
        clothSelect:require("../../assets/drawable/Shop/Menu_cloth_selected.png"),
        weaponSelect:require("../../assets/drawable/Shop/Menu_weapon_selected.png"),
    }

    const [hair,selectHair] = useState(Catalog.hairSelect);
    const [hat,selectHat] = useState(Catalog.hat);
    const [cloth,selectCloth] = useState(Catalog.cloth);
    const [weapon,selectWeapon] = useState(Catalog.weapon);

    let selected = 1;

    const togleHair = () =>{
        selected = 1;
        selectHair(Catalog.hairSelect);
        selectHat(Catalog.hat);
        selectCloth(Catalog.cloth);
        selectWeapon(Catalog.weapon);
    }
    const togleHat = () =>{
        selected = 2;
        selectHair(Catalog.hair);
        selectHat(Catalog.hatSelect);
        selectCloth(Catalog.cloth);
        selectWeapon(Catalog.weapon);
    }
    const togleCloth = () =>{
        selected = 3;
        selectHair(Catalog.hair);
        selectHat(Catalog.hat);
        selectCloth(Catalog.clothSelect);
        selectWeapon(Catalog.weapon);
    }
    const togleWeapon = () =>{
        selected = 4;
        selectHair(Catalog.hair);
        selectHat(Catalog.hat);
        selectCloth(Catalog.cloth);
        selectWeapon(Catalog.weaponSelect);
    }

    return(
        <View>
            <View>
                <TouchableOpacity style={{right:150}} onPress={togleHair}>
                    <CatalogButton catalog={hair}/>
                </TouchableOpacity>
                <TouchableOpacity style={{position:'absolute', right:50}} onPress={togleHat}>
                    <CatalogButton catalog={hat}/>
                </TouchableOpacity>
                <TouchableOpacity style={{position:'absolute', left:50}} onPress={togleCloth}>
                    <CatalogButton catalog={cloth}/>
                </TouchableOpacity>
                <TouchableOpacity style={{position:'absolute', left:150}} onPress={togleWeapon}>
                    <CatalogButton catalog={weapon}/>
                </TouchableOpacity>
            </View>
            <View>
                <HairList/>
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
    scroll:{
        flex:1,
        
    },
    listItems:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
    },
})
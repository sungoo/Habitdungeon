import React, {useState, Component} from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Dialog from "react-native-dialog";
import Modal from 'react-native-modal';
import { accessibilityProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';

export default function TodoElement(){

    const [visible_a, setVisible]=useState(false);
    const [isFightVisible, setFightVisible] = useState(false);

    // const showDialog=()=>{
    //     setVisible(true);
    // }
    // const handleCancel=()=>{
    //     setVisible(false);
    // }
    // const handleDelete=()=>{
    //     setVisible(false);
    // }

    // const toggleFightVisible=()=>{
    //     setFightVisible(!isFightVisible);
    // }

    // const deleteList = ()=>{
    //     return(
    //         <Dialog.Container visible={visible_a}>
    //             <Dialog.Title>과제를 삭제하시겠습니까?</Dialog.Title>
    //         <Dialog.Description>
    //             삭제한 과제는 다시 되돌릴 수 없습니다.
    //         </Dialog.Description>
    //         <Dialog.Button label="예" onPress={handleDelete} />
    //         <Dialog.Button label="아니오" onPress={handleCancel} />
    //         </Dialog.Container>
    //     );
    // }

    // const succeedList = ()=>{
    //     return(
    //         <Modal isVisible={isFightVisible}>
    //             <View style={{width:'100%', height:500, alignItems:'center'}}>
    //                 <ImageBackground
    //                     style={{width:'100%', height:'100%', alignItems:'center'}}
    //                     source={require('../../assets/drawable/popBG_monsterBeating.png')}
    //                     imageStyle={{resizeMode:'contain'}}
    //                 >
    //                     <Text style={{fontSize:30, fontWeight:'bold', top:30}}>몬스터 퇴치</Text>
    //                     <Text style={{fontSize:15, top:25}}>해야 할 일 완료!</Text>
    //                     <Text style={{fontSize:30, fontWeight:'bold', top:70}}>UI/UX 과제하기</Text>
    //                     <Text style={{fontSize:15, top:110, right:130}}>메모</Text>
    //                     <ImageBackground
    //                     style={{width:'95%', height:'95%', top:-30, left:10}}
    //                     source={require('../../assets/drawable/Textbox_memo1.png')}
    //                     imageStyle={{resizeMode:'contain'}}
    //                     >
    //                         <Text style={{fontSize:20, color:'gray', top:160, left:20}}>간단한 메모를 작성해보세요!</Text>
    //                     </ImageBackground>
    //                 </ImageBackground>
    //                 <TouchableOpacity onPress={toggleFightVisible}
    //                     style={{width:90, height:90, top:-110, left:50}}
    //                 >
    //                     <Image
    //                     style={{width:'100%', height:'100%', resizeMode:'contain'}}
    //                     source={require('../../assets/drawable/Button_cancel.png')}
    //                     />
    //                 </TouchableOpacity>
    //                 <TouchableOpacity onPress={toggleFightVisible}
    //                     style={{width:85, height:85, top:-197, left:130}}
    //                 >
    //                     <Image
    //                     style={{width:'100%', height:'100%', resizeMode:'contain'}}
    //                     source={require('../../assets/drawable/Button_check.png')}
    //                     />
    //                 </TouchableOpacity>
    //             </View>
    //         </Modal>
    //     );
    // }

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

const styles = StyleSheet.create({
    listbody:{
        resizeMode:"contain",
        width: 400,
        height: 120,
        zIndex: 1
    },


})
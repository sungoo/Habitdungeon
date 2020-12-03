import React, {useState, useCallback, useEffect, Component} from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { Drawer, Text, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Dialog from "react-native-dialog";
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import Dimensions from 'react-dimensions'
import ProgressBar from 'react-native-progress/Bar';
import UserProfile from '../compornent/UserProfile.js';

//모달도 컴포넌트로 분리
const MyDialog = (props)=>{
  return <view style={{flex:1}}>
      <Text>{props.title}</Text>
      <Text>{props.subtitle}</Text>
      <Button onPress={props.onOkay}>예</Button>
      <Button onPress={props.onCancel}예></Button>
      {/* {
        props.optinalButton ? <Button onPress={props.onOpital}></Button>
      } */}
  </view>
}

const TodoElement=(props)=>{

    // const [visible_a, setVisible] = useState(false);
    // const [isFightVisible, setFightVisible] = useState(false);

    // const showDialog=()=>{
    //     setVisible(true)
    // }
    // const handleCancel=()=>{
    //     setVisible(false)
    // }
    // const handleDelete=()=>{
    //     setVisible(false);
    //     addHP(-10);
    // }

    // const toggleFightVisible=(visible)=>{
    //     setFightVisible(visible)
    // }

    return(
      <View>
        <ImageBackground
              style={{
                resizeMode:"contain",
                width: 400,
                height: 120,
                zIndex: 1
              }}
              source={require("../../assets/drawable/BG_list.png")}
              imageStyle={{resizeMode:'contain'}}
        >
            <Image
            style={{resizeMode:"contain", width:60, height:60, top:32, left:10, zIndex:4}}
            source={require('../../assets/drawable/Mon_active.png')}
            />
            <Text style={{fontSize: 14, fontWeight:'bold', top:-15, left:100}}>{props.title}</Text>
            <Text style={{fontSize: 12, top:-15, left:100}}>DUE : {props.dueM}.{props.dueD}</Text>
            <TouchableOpacity 
            style={{width: 60, height: 60, left:250,top:-65}}
            /*onPress={showDialog()}*/>
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
            /*onPress={toggleFightVisible(isFightVisible)}*/
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
      </View>
    );
}

TodoElement.PropTypes={
  id:PropTypes.number.isRequired,
  title:PropTypes.string,
  dueM:PropTypes.number.isRequired,
  dueD:PropTypes.number.isRequired,
  Active:PropTypes.bool,
}

const CurrentDate=(props)=>{
  return(
    <View style={{flex:1}}>
      <Text style={{fontSize:30, fontWeight:'bold', color:'white', position:"relative", top:-270, zIndex:4}}>
        {props.date,getMonth}
      </Text>
      <Text style={{fontSize:30, fontWeight:'bold', color:'white', position:"relative", top:-270, zIndex:4}}>
        {props.date.getDate}
      </Text>
    </View>
    
  )
}

const UserState = ()=>{

  return(
    <View style={[styles.User, {zIndex:2}]}>
      <UserProfile hp={hp} exp={exp} coin={coin}/>
    </View>
  );
}

const Combat=()=>{

  const [date, setDate]=useState(new Date());

  useEffect(()=>{
    let timer = setInterval(()=>{
      let CurrentDate = new Date();
      if(CurrentDate.getDay()!=date.getDay())
        setDate(CurrentDate);
      if(date != new Date())
      setDate(new Date());
    })
  })

  return(
    <View style={styles.ImageScreen}>
          <View>
            <UserProfile/>

          </View>
          <Image
            style={{resizeMode:"contain", width:250, height:300, position:"relative", top:0, zIndex:1}}
            source={require('../../assets/drawable/Disign_light.png')}
          />
          <Image
            style={{resizeMode:"contain", width:60, height:60, position:"absolute", top:10, right:10, zIndex:4}}
            source={require('../../assets/drawable/Mon_active.png')}
          />
          <View 
            style={{width:120, height:20, position:"absolute", top:30, right:65, zIndex:2}}
          >
            <ProgressBar progress={1/4} width={120} height={20}
              color="rgba(0, 0, 0, 0.4)" unfilledColor="blue" borderWidth={0}
              borderRadius={20}
            />
          </View>
          <Text style={{fontSize:24, color:'white', position:"absolute", top:23, right:70, zIndex:4}}>3/4</Text>
          <CurrentDate date={new Date()}/>
          <View style={{width:'100%', height:'100%', backgroundColor:'#22215B', top:-200}}/>
          <Image
            style={{width:90, height:175, resizeMode:'contain', position:'absolute', top:75, left:30, zIndex:4}}
            source={require('../../assets/drawable/Player_stand.png')}
          />
          <Image
            style={{width:120, height:175, resizeMode:'contain', position:'absolute', top:70, right:30, zIndex:4}}
            source={require('../../assets/drawable/Monster_stand.png')}
          />
        </View>
  );
}

const ListPage=(props)=>{

  const [visible_a, setVisible] = useState(false);
  const [isFightVisible, setFightVisible] = useState(false);
  const [hp, setHP] = useState(100);
  const [exp, setEXP] = useState(0);
  const [coin, setCoin] = useState(0);

  useEffect( ()=>{
    setDate(new Date());
  }, []);

  const showDialog=()=>{
      setVisible(true);
  }
  const handleCancel=()=>{
    setVisible(false)
  }
  const handleDelete=()=>{
    setVisible(false);
    setHP(hp-10);
  }

  const toggleFightVisible=()=> setFightVisible(!visible)
  

  const addHP=(desc)=>{
    setHP(hp+desc)
  }
  const addExp=(desc)=>{
    setEXP(exp+desc)
  }
  const addCoin=(desc)=>{
    setCoin(coin+desc)
  }


    return(
      <View style={styles.main}>
        <LinearGradient
            //Background Linear Gradient
            colors={['#744EA4', '#2C2673']}
            style={{
              position: 'absolute',
              left:0,
              right:0,
              top:0,
              height:620
            }}
        />
        <Combat/>
        <View style={styles.Lists}>
          <ImageBackground
            style={{
              resizeMode:"contain",
              width: 400,
              height: 120,
              zIndex: 1
            }}
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
              onPress={showDialog}>
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
              onPress={toggleFightVisible(isFightVisible)}
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
  
          <Dialog.Container visible={visible_a}>
            <Dialog.Title>과제를 삭제하시겠습니까?</Dialog.Title>
              <Dialog.Description>
                삭제한 과제는 다시 되돌릴 수 없습니다.
              </Dialog.Description>
            <Dialog.Button label="예" onPress={handleDelete} />
            <Dialog.Button label="아니오" onPress={handleCancel} />
          </Dialog.Container>
  
          <Modal isVisible={isFightVisible}>
            <View style={{width:'100%', height:500, alignItems:'center'}}>
              <ImageBackground
                style={{width:'100%', height:'100%', alignItems:'center'}}
                source={require('../../assets/drawable/popBG_monsterBeating.png')}
                imageStyle={{resizeMode:'contain'}}
              >
                <Text style={{fontSize:30, fontWeight:'bold', top:30}}>몬스터 퇴치</Text>
                <Text style={{fontSize:15, top:25}}>해야 할 일 완료!</Text>
                <Text style={{fontSize:30, fontWeight:'bold', top:70}}>UI/UX 과제하기</Text>
                <Text style={{fontSize:15, top:110, right:130}}>메모</Text>
                <ImageBackground
                  style={{width:'95%', height:'95%', top:-30, left:10}}
                  source={require('../../assets/drawable/Textbox_memo1.png')}
                  imageStyle={{resizeMode:'contain'}}
                >
                  <Text style={{fontSize:20, color:'gray', top:160, left:20}}>간단한 메모를 작성해보세요!</Text>
                </ImageBackground>
  
                
              </ImageBackground>
              <TouchableOpacity onPress={toggleFightVisible(isFightVisible)}
                style={{width:90, height:90, top:-110, left:50}}
              >
                <Image
                  style={{width:'100%', height:'100%', resizeMode:'contain'}}
                  source={require('../../assets/drawable/Button_cancel.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleFightVisible(isFightVisible)}
                style={{width:85, height:85, top:-197, left:130}}
              >
                <Image
                  style={{width:'100%', height:'100%', resizeMode:'contain'}}
                  source={require('../../assets/drawable/Button_check.png')}
                />
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    );
  
}

export default ListPage;

const styles = StyleSheet.create({
    main: {
      marginTop: 24,
      flex: 1,
      backgroundColor: '#534B88',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    User: {
      position:"absolute", 
      top: 0, 
      left: 0
    },
    carendar: {
      position: "absolute",
      top: 130,
      width: 330,
      height: 300,
    },
    listBox: {
      backgroundColor: "transparent",
      position: "absolute",
      top: 470,
      width: 400,
      height: 120
    },
    
    ImageScreen: {
      alignItems: 'center', 
      width:'100%',
      height:'40%', 
      position:"absolute", 
      top:0,
    },
    Lists :{
      backgroundColor:'#F6F6F8', 
      width:"100%", 
      height:'60%',
      alignItems:'center',
      justifyContent:'flex-start'
    }
  });
  
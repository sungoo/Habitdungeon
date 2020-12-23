import React, {useState, useCallback, useEffect, Component} from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { Drawer, Text, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Dialog from "react-native-dialog";
import Modal from 'react-native-modal';
import Dimensions from 'react-dimensions'
import ProgressBar from 'react-native-progress/Bar';
import UserProfile from '../compornent/UserProfile.js';
import Settings from '../compornent/Settings';

const AddTask=(props)=>{

  const toggleVis = ()=>{
    props.setVis(!props.visible);
  }

  const submit=()=>{
    props.setVis(!props.visible);
    props.addTodos();
  }

  const cancle=()=>{
    props.setVis(!props.visible);
    props.setTitle("");
  }

  return(
    <Modal
      isVisible={props.visible}
      onBackdropPress={toggleVis}
    >
      <View
        style={styles.addTask}
      >
        <View name="Title" style={{alignItems:'center'}}>
          <Text style={styles.TitleText}>
            몬스터 추가
          </Text>
          <Text style={styles.subText}>
            습관이나 과제를 추가해주세요.
          </Text>
        </View>
        <View name="Setting" style={{width:300, top:50}}>
          <Text style={styles.elementText}>
            제목
          </Text>
          <View style={[styles.textBox, {width:300}]}>
            <TextInput value={props.title} onChangeText={(text)=>props.setTitle(text)}/>
          </View>
          <Text style={[styles.elementText, {top:20}]}>
            요일 반복
          </Text>
        </View>
        <View name="Buttons" style={{top:270, left:40}}>
          <TouchableOpacity onPress={cancle}
            style={{width:90, height:90,}}
          >
            <Image
              style={{width:'100%', height:'100%', resizeMode:'contain'}}
              source={require('../../assets/drawable/Button_cancel.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={submit}
            style={{width:85, height:85, left:90, position:'absolute'}}
          >
            <Image
              style={{width:'100%', height:'100%', resizeMode:'contain'}}
              source={require('../../assets/drawable/Button_check.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const DeleteTodo=(props)=>{

  const deleteIt = ()=>{
    props.setDialVisible(false);
    props.removeTodo(props.id);
  }

  const cancle = ()=>{
    props.setDialVisible(false);
  }

  return(
    <Dialog.Container visible={props.DialVisible}>
      <Dialog.Title>과제를 삭제하시겠습니까?</Dialog.Title>
        <Dialog.Description>
          삭제한 과제는 다시 되돌릴 수 없습니다.
        </Dialog.Description>
      <Dialog.Button label="예" onPress={deleteIt} />
      <Dialog.Button label="아니오" onPress={cancle} />
    </Dialog.Container>
  );
}

const SucceedTodo=(props)=>{

  const deleteIt = ()=>{
    props.setFightVisible(false);
    props.removeTodo(props.id);
  }

  const cancle = ()=>{
    props.setFightVisible(false);
  }

  return(
    <Modal isVisible={props.isFightVisible}>
            <View style={{width:'100%', height:500, alignItems:'center'}}>
              <ImageBackground
                style={{width:'100%', height:'100%', alignItems:'center'}}
                source={require('../../assets/drawable/popBG_monsterBeating.png')}
                imageStyle={{resizeMode:'contain'}}
              >
                <Text style={{fontSize:30, fontWeight:'bold', top:30}}>몬스터 퇴치</Text>
                <Text style={{fontSize:15, top:25}}>해야 할 일 완료!</Text>
                <Text style={{fontSize:30, fontWeight:'bold', top:70}}>{props.title}</Text>
                <Text style={{fontSize:15, top:110, right:130}}>메모</Text>
                <ImageBackground
                  style={{width:'95%', height:'95%', top:-30, left:10}}
                  source={require('../../assets/drawable/Textbox_memo1.png')}
                  imageStyle={{resizeMode:'contain'}}
                >
                  <Text style={{fontSize:20, color:'gray', top:160, left:20}}>간단한 메모를 작성해보세요!</Text>
                </ImageBackground>
  
                
              </ImageBackground>
              <TouchableOpacity onPress={cancle}
                style={{width:90, height:90, top:-110, left:50}}
              >
                <Image
                  style={{width:'100%', height:'100%', resizeMode:'contain'}}
                  source={require('../../assets/drawable/Button_cancel.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={deleteIt}
                style={{width:85, height:85, top:-197, left:130}}
              >
                <Image
                  style={{width:'100%', height:'100%', resizeMode:'contain'}}
                  source={require('../../assets/drawable/Button_check.png')}
                />
              </TouchableOpacity>
            </View>
          </Modal>
  )
}

const TodoElement=(props)=>{

    const [DialVisible, setDialVisible] = useState(false);
    const [isFightVisible, setFightVisible] = useState(false);

    const showDialog=()=>{
        setDialVisible(true)
    }

    const toggleFightVisible=()=>{
        setFightVisible(true)
    }

    return(
      <TouchableOpacity>
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
            onPress={toggleFightVisible}
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
        <DeleteTodo id={props.id} DialVisible={DialVisible} setDialVisible={setDialVisible} removeTodo={props.removeTodo}/>
        <SucceedTodo id={props.id} isFightVisible={isFightVisible} setFightVisible={setFightVisible} removeTodo={props.removeTodo} title={props.title}/>
      </TouchableOpacity>
    );
}

const User = (props) =>{
  const [hp,setHP] = useState(100);
  const [exp,setEXP] = useState(0);
  const [coin,setCoin] = useState(200);

  console.log("List user",hp,exp,coin);

  return(
      <UserProfile setHP={setHP} setEXP={setEXP} setCoin={setCoin}
                  hp={hp} exp={exp} coin={coin}/>
  );
}

const Mongraph = (props)=>{

  return(
    <View>
      <View 
        style={{width:130, height:20, position:"absolute", top:-3, right:16}}
      >
        <ProgressBar progress={props.clearTaskN/(props.nofTask==0?1:props.nofTask)} width={130} height={20}
          color="rgba(0, 0, 0, 0.4)" unfilledColor="blue" borderWidth={0}
          borderRadius={20}
        />
      </View>
      <Image
        style={{resizeMode:"contain", width:60, height:60, left:90, bottom:20}}
        source={require('../../assets/drawable/Mon_active.png')}
      />
      <Text style={{fontSize:20 , color:"white", bottom:66, left:50}} >{(props.nofTask-props.clearTaskN)}/{props.nofTask}</Text>
    </View>
  )
}

const VS = (props)=>{

  return(
    <View>
      <View style={{right:150}}>
        <User/>
      </View>
      <View style={{left:110}}>
        <Mongraph nofTask={props.nofTask} setN={props.setN} clearTaskN={props.clearTaskN} setClearN={props.setClearN}/>
      </View>
    </View>
  )
}

const Hero=(props)=>{

  return(
    <Image
      style={{width:90, height:175, resizeMode:'contain', position:'absolute',}}
      source={props.heroState}
    />
  );
}

const Monster=(props)=>{

  return(
    <Image
      style={{width:120, height:175, resizeMode:'contain', position:'absolute', top:70, right:30, zIndex:4}}
      source={props.monsterState}
    />
  );
}

const CurrentDate=(props)=>{
  return(
    <View style={{flex:1}}>
      <Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>
        {props.month}
      </Text>
      <Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>
        {props.date}
      </Text>
    </View>
    
  )
}

const NowDate=(props)=>{
  const [month, setMonth]=useState(new Date().getMonth()+1);
  const [date, setDate]=useState(new Date().getDate());

  return(
    <View style={styles.dates}>
      <Image
        style={{resizeMode:"contain", width:250, height:300, position:"absolute"}}
        source={require('../../assets/drawable/Disign_light.png')}
      />
      <View style={{top:30}}>
        <CurrentDate date={date} month={month}/>
      </View>
    </View>
  )
}

const Combat=(props)=>{

  const heroStateList={
    idle: require('../../assets/drawable/gif/player_idle.gif'),
    attack: require('../../assets/drawable/gif/player_attack.gif'),
    hit: require('../../assets/drawable/gif/player_hit.gif')
  }
  const monsterStateList={
    idle: require('../../assets/drawable/gif/monster_idle.gif'),
    attack: require('../../assets/drawable/gif/monster_attack.gif'),
    hit: require('../../assets/drawable/gif/monster_hit.gif'),
    laugh: require('../../assets/drawable/gif/monster_laugh.gif'),
    dead: require('../../assets/drawable/gif/monster_dead.gif'),
  }

  const [heroState, setHero]=useState(heroStateList.idle);
  const [monsterState, setMon]=useState(monsterStateList.idle);

  return(
    <View style={styles.ImageScreen}>
      <View style={{right:150}}>
        <Hero heroState={heroState}/>
      </View>
      <View style={{left:200, bottom:70}}>
        <Monster monsterState={monsterState}/>
      </View>
    </View>
  );
}

const ToDoList=(props)=>{

  return(
    <View style={styles.Lists}>
      <TouchableOpacity onPress={props.toggleVisAdd}>
        <Image
          resizeMode="contain"
          style={{width:400, top:10}}
          source={require('../../assets/drawable/Add_task.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const ListPage = ()=>{

  const [visibleSetting, setVisSetting]=useState(false);
  const toggleVisSetting=()=>{
    setVisSetting(!visibleSetting);
  }

  const [visibleAdd, setVisAdd]=useState(false);
  const toggleVisAdd=()=>{
    setVisAdd(!visibleAdd);
  }

  const [nofTask, setN]=useState(0);
  const [clearTaskN, setClearN]=useState(0);

  const [title, setTitle]=useState("");

  const [todos, setTodos] = useState([]);

  const removeTodo=(id)=>{
    const idx = todos.findIndex((TodoElement)=>TodoElement.props.id === id);
    if(idx==-1) return;
    todos.splice(idx,1);
    setTodos({todos});
  }

  const addTodos = ()=>{
    const newTodo = <TodoElement key={Math.random().toString()}
                                title={title} removeTodo={removeTodo}/>
    setTodos([...todos, newTodo]);
    setN(nofTask+1);
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
          height:620,
          alignItems:'center'
        }}
      >
        <VS nofTask={nofTask} setN={setN} clearTaskN={clearTaskN} setClearN={setClearN}/>
        <TouchableOpacity 
            style={{position:'absolute', top:80, left:350}}
            onPress={toggleVisSetting}
        >
            <Image
                resizeMode='contain'
                style={{width:50, height:50}}
                source={require('../../assets/drawable/Icon_cog_dark.png')}
            />
        </TouchableOpacity>
        <Settings setVis={setVisSetting} visible={visibleSetting}/>
        <NowDate/>
        <View style={{bottom:30, zIndex:1}}>
          <Combat/>
        </View>
        <ToDoList visibleAdd={visibleAdd} setVisAdd={setVisAdd} toggleVisAdd={toggleVisAdd}
                  title={title}/>
        <View style={{position:'absolute', height:300, top:330}}>
          <ScrollView style={{flexDirection:'column',}}>
            {todos}
          </ScrollView>
        </View>
        <AddTask visible={visibleAdd} setVis={setVisAdd}
                title={title} setTitle={setTitle} 
                addTodos={addTodos} setTodos={setTodos} removeTodo={removeTodo}/>
      </LinearGradient>
    </View>
  )
}

export default ListPage;

const styles = StyleSheet.create({
    main: {
      marginTop: 24,
      flex: 1,
      backgroundColor: '#534B88',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    User: {
      position:"absolute", 
      top: 0, 
      left: 0
    },
    listBox: {
      backgroundColor: "transparent",
      position: "absolute",
      top: 470,
      width: 400,
      height: 120
    },
    dates:{
      position:'absolute',
      alignItems:'center',
    },
    ImageScreen: {
      alignItems: 'center', 
      width:'100%',
      height:'15%', 
    },
    Lists :{
      backgroundColor:'#332B79', 
      width:"100%", 
      flex:1,
      alignItems:'center',
      justifyContent:'flex-start'
    },
    addTask:{
      backgroundColor:'#F6F6F8', 
      width:370, 
      height:500, 
      borderRadius:20,
      alignItems:'center',
      justifyContent:'flex-start'
    },
    TitleText:{
      fontSize:30, 
      fontWeight:'bold', 
      top:20,
    },
    subText:{
      color:'gray',
      top:19
    },
    elementText:{
      fontSize:15
    },
    textBox:{
      backgroundColor:'white',
      elevation:4,
      borderRadius:10,
      height:35,
      top:5,
      justifyContent:'center'
    },
  });
  
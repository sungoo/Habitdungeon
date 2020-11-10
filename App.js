import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
//import 'GestureScreen.js' from ''
import { Drawer, Text, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Dialog from "react-native-dialog";
import Modal from 'react-native-modal';
import UserProfile from './src/compornent/UserProfile.js';

function MainPage({navigation}) {
  const moveToInventory=()=>{
    navigation.navigate("Inventory");
  }
  const moveToList=()=>{
    navigation.navigate("List");
  }

  const [active, setActive] = React.useState('');
  return (
    <View style={styles.main}>
      <LinearGradient
          //Background Linear Gradient
          colors={['#654EA4', '#2C2673']}
          style={{
            position: 'absolute',
            left:0,
            right:0,
            top:0,
            height:620
          }}
      />
      <View style={styles.User}>
        <UserProfile/>
      </View>
      <View style={styles.carendar}>
        <Calendar
          current={'2020-11-04'}
          minDate={'2020-11-01'}
          maxDate={'2020-11-30'}
          onDayPress={(day)=>{console.log('selected day', day)}}
          onDayLongPress={(day)=>{console.log('selected day', day)}}
          monthFormat={'MM'}
        />
      </View>
      {/* dungeon enter img */}
      <Image
        style={{resizeMode:"contain", width:25, height:40, position:"absolute", top:210, left:8}}
        source={require("./assets/drawable/Dungeon_Enter.png")}
      />
      <Image
        style={{resizeMode:"contain", width:25, height:40, position:"absolute", top:257, left:8}}
        source={require("./assets/drawable/Dungeon_Enter.png")}
      />
      <Image
        style={{resizeMode:"contain", width:25, height:40, position:"absolute", top:304, left:8}}
        source={require("./assets/drawable/Dungeon_Enter.png")}
      />
      <Image
        style={{resizeMode:"contain", width:25, height:40, position:"absolute", top:351, left:8}}
        source={require("./assets/drawable/Dungeon_Enter.png")}
      />
      <Image
        style={{resizeMode:"contain", width:25, height:40, position:"absolute", top:398, left:8}}
        source={require("./assets/drawable/Dungeon_exit.png")}
      />
      {/* dungeon exit img */}
      <Image
        style={{resizeMode:"contain", width:25, height:40, position:"absolute", top:210, right:8}}
        source={require("./assets/drawable/Dungeon_exit.png")}
      />
      <Image
        style={{resizeMode:"contain", width:25, height:40, position:"absolute", top:257, right:8}}
        source={require("./assets/drawable/Dungeon_exit.png")}
      />
      <Image
        style={{resizeMode:"contain", width:25, height:40, position:"absolute", top:304, right:8}}
        source={require("./assets/drawable/Dungeon_exit.png")}
      />
      <Image
        style={{resizeMode:"contain", width:25, height:40, position:"absolute", top:351, right:8}}
        source={require("./assets/drawable/Dungeon_exit.png")}
      />
      <Image
        style={{resizeMode:"contain", width:25, height:40, position:"absolute", top:398, right:8}}
        source={require("./assets/drawable/Dungeon_exit.png")}
      />
      {/* 오늘의 리스트 */}
      <View style={styles.listBox}>
        <TouchableOpacity onPress={moveToList}>
          <ImageBackground
            style={{
            resizeMode:"contain",
            width: 400,
            height: 120,
            zIndex: 1
            }}
            source={require("./assets/drawable/BG_list.png")}
            imageStyle={{resizeMode:'contain'}}
          >
            <Image
              style={{resizeMode:"contain", width:30, height:30, position:"absolute", top:20, right:20, zIndex:2}}
              source={require("./assets/drawable/Button_search.png")}
            />
            <Text style={{fontSize: 24, color: '#35C4E3', position:'absolute', top: 15, left: 20, zIndex:2}}>24</Text>
            <Text style={{fontSize: 12, position:'absolute', top: 23, left: 70, zIndex:2}}>기한이 얼마 남지 않은 과제 TOP3</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function InventoryPage({navigation}){
  const moveToMain=()=>{
    navigation.navigate("Main");
  }
  const moveToShop=()=>{
    navigation.navigate("Shop")
  }
  return(
    <View style={styles.main}>
      <Text style={{position:"absolute", top:50, color:"#fff", fontSize:20}}>인벤토리</Text>
      <Button onPress={moveToMain} mode="contained">메인으로 이동</Button>
      <Button onPress={moveToShop} mode="contained">상점으로 이동</Button>
    </View>
  );
}

function ShopPage({navigation}){
  const moveToMain=()=>{
    navigation.navigate("Main");
  }
  const moveToInventory=()=>{
    navigation.navigate("Inventory");
  }
  return(
    <View style={styles.main}>
      <Text style={{position:"absolute", top:50, color:"#fff", fontSize:20}}>상점</Text>
      <Button onPress={moveToMain} mode="contained">메인으로 이동</Button>
      <Button onPress={moveToInventory} mode="contained">인벤토리로 이동</Button>
    </View>
  );
}

function ListPage({navigation}){
  const [visible_a, setVisible]=useState(false);
  const [isFightVisible, setFightVisible] = useState(false);

  const showDialog=()=>{
    setVisible(true);
  }
  const handleCancel=()=>{
    setVisible(false);
  }
  const handleDelete=()=>{
    setVisible(false);
  }

  const toggleFightVisible=()=>{
    setFightVisible(!isFightVisible);
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
      <View style={styles.ImageScreen}>
        <View style={[styles.User, {zIndex:2}]}>
          <UserProfile/>
        </View>
        <Image
          style={{resizeMode:"contain", width:250, height:300, position:"relative", top:0, zIndex:1}}
          source={require('./assets/drawable/Disign_light.png')}
        />
        <Image
          style={{resizeMode:"contain", width:60, height:60, position:"absolute", top:10, right:10, zIndex:4}}
          source={require('./assets/drawable/Mon_active.png')}
        />
        <Image
          style={{resizeMode:"contain", width:120, height:25, position:"absolute", top:28, right:55, zIndex:2}}
          source={require('./assets/drawable/Bar_emptyFlipY.png')}
        />
        <Image
          style={{resizeMode:"contain", width:120, height:25, position:"absolute", top:28, right:30, zIndex:3}}
          source={require('./assets/drawable/Bar_TaskLeft.png')}
        />
        <Text style={{fontSize:24, color:'white', position:"absolute", top:23, right:70, zIndex:4}}>3/4</Text>
        <Text style={{fontSize:30, fontWeight:'bold', color:'white', position:"relative", top:-270, zIndex:4}}>
          {"11"}{"\n"}
          {"05"}
        </Text>
        <View style={{width:'100%', height:'100%', backgroundColor:'#22215B', top:-200}}/>
        <Image
          style={{width:90, height:175, resizeMode:'contain', position:'absolute', top:75, left:30, zIndex:4}}
          source={require('./assets/drawable/Player_stand.png')}
        />
        <Image
          style={{width:120, height:175, resizeMode:'contain', position:'absolute', top:70, right:30, zIndex:4}}
          source={require('./assets/drawable/Monster_stand.png')}
        />
      </View>
      <View style={styles.Lists}>
        <ImageBackground
          style={{
            resizeMode:"contain",
            width: 400,
            height: 120,
            zIndex: 1
          }}
          source={require("./assets/drawable/BG_list.png")}
          imageStyle={{resizeMode:'contain'}}
        >
          <Image
            style={{resizeMode:"contain", width:60, height:60, position:"relative", top:32, left:10, zIndex:4}}
            source={require('./assets/drawable/Mon_active.png')}
          />
          <Text style={{fontSize: 14, fontWeight:'bold', position:'relative', top:-15, left:100}}>UI/UX 과제하기</Text>
          <Text style={{fontSize: 12, position:'relative', top:-15, left:100}}>DUE : 11.15</Text>
          <TouchableOpacity 
            style={{width: 60, height: 60, position:"relative", left:250,top:-65}}
            onPress={showDialog}>
            <ImageBackground
              style={{width: 60, height: 60, alignItems:"center"}}
              source={require('./assets/drawable/Button_blue.png')}
              imageStyle={{resizeMode:'contain'}}
            >
              <Image
                style={{width:30, height:30, top:10, resizeMode:'contain'}}
                source={require('./assets/drawable/Icon_run.png')}
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
              source={require('./assets/drawable/Button_pink.png')}
              imageStyle={{resizeMode:'contain'}}
            >
              <Image
                style={{width:30, height:30, top:10, resizeMode:'contain'}}
                source={require('./assets/drawable/Icon_fight.png')}
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
              source={require('./assets/drawable/popBG_monsterBeating.png')}
              imageStyle={{resizeMode:'contain'}}
            >
              <Text style={{fontSize:30, fontWeight:'bold', top:30}}>몬스터 퇴치</Text>
              <Text style={{fontSize:15, top:25}}>해야 할 일 완료!</Text>
              <Text style={{fontSize:30, fontWeight:'bold', top:70}}>UI/UX 과제하기</Text>
              <Text style={{fontSize:15, top:110, right:130}}>메모</Text>
              <ImageBackground
                style={{width:'95%', height:'95%', top:-30, left:10}}
                source={require('./assets/drawable/Textbox_memo1.png')}
                imageStyle={{resizeMode:'contain'}}
              >
                <Text style={{fontSize:20, color:'gray', top:160, left:20}}>간단한 메모를 작성해보세요!</Text>
              </ImageBackground>

              
            </ImageBackground>
            <TouchableOpacity onPress={toggleFightVisible}
              style={{width:90, height:90, top:-110, left:50}}
            >
              <Image
                style={{width:'100%', height:'100%', resizeMode:'contain'}}
                source={require('./assets/drawable/Button_cancel.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleFightVisible}
              style={{width:85, height:85, top:-197, left:130}}
            >
              <Image
                style={{width:'100%', height:'100%', resizeMode:'contain'}}
                source={require('./assets/drawable/Button_check.png')}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

function App() {
  
  return (  
      <NavigationContainer>
        <Bottom.Navigator
          screenOptions={({route})=>({
            tabBarIcon: ({focused, color, size})=>{
              let iconName;

              if(route.name === 'Main'){
                iconName = 'dungeon'
                return<FontAwesome5 name={iconName} size={size} color={color}/>;
              }
              else if(route.name === 'List'){
                iconName = 'emoticon-devil'
                return<MaterialCommunityIcons name={iconName} size={size} color={color}/>;
              }
              else if(route.name === 'Inventory'){
                iconName = 'bag-personal'
                return<MaterialCommunityIcons name={iconName} size={size} color={color}/>;
              }
              else if(route.name === 'Shop'){
                iconName = 'coins'
                return<FontAwesome5 name={iconName} size={size} color={color}/>;
              }
            }
          })
          }
          tabBarOptions={{
            inactiveBackgroundColor: '#332B79',
            activeBackgroundColor: '#332B79',
            activeTintColor: 'white',
            inactiveTintColor: '#9D92B9'
          }}
        >
          <Bottom.Screen name="Main" component={MainPage}/>
          <Bottom.Screen name="List" component={ListPage}/>
          <Bottom.Screen name="Inventory" component={InventoryPage}/>
          <Bottom.Screen name="Shop" component={ShopPage}/>
        </Bottom.Navigator>
      </NavigationContainer>
  );
}

function StackNavigate(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Main" component={MainPage} />
          <Stack.Screen name="Inventory" component={InventoryPage} />
          <Stack.Screen name="Shop" component={ShopPage}/>
          <Stack.Screen name="List" component={ListPage} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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

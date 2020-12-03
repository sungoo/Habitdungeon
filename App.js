import { StatusBar } from 'expo-status-bar';
import React, {useState, useCallback, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Drawer, Text, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import UserProfile from './src/compornent/UserProfile.js';
import ListPage from './src/screens/ListScreen';
import ShopPage from './src/screens/ShopScreen';
import Dimensions from 'react-dimensions'
//import JSTestScreen from  './src/screens/JSTestScreen';
//import TodoElement from './src/compornent/TodoElement.js';

function MainPage({navigation}){
  
  const moveToList=()=>{
    navigation.navigate("List");
  }

  //const [active, setActive] = React.useState('');
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
      <TouchableOpacity>
        <Image
          style={{resizeMode:"contain", width:30, height:30, position:"absolute", top:30, right:30}}
          source={require("./assets/drawable/Icon_cog.png")}
        />
      </TouchableOpacity>
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

const Bottom = createBottomTabNavigator();

function App(){

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

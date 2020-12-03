const ListPage=(props)=>{

    const [visible_a, setVisible] = useState(false);
    const [isFightVisible, setFightVisible] = useState(false);
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [hp, setHP] = useState(100);
    const [exp, setEXP] = useState(0);
    const [coin, setCoin] = useState(0);
  
    const setToday=componentDidMount=()=>{
      var newmonth = new Date().getMonth()+1;
      var newdate = new Date().getDate();
      setMonth(newmonth);
      setDate(newdate);
    }
  
    function showDialog() {
        setVisible(true);
    }
    const handleCancel=()=>{
      setVisible(false)
    }
    const handleDelete=()=>{
      setVisible(false);
      addHP(-10);
    }
  
    const toggleFightVisible=(visible)=>{
      setFightVisible(visible)
    }
  
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
          <View style={styles.ImageScreen}>
            <View style={[styles.User, {zIndex:2}]}>
              <UserProfile hp={hp} exp={exp} coin={coin}/>
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
            <Text style={{fontSize:30, fontWeight:'bold', color:'white', position:"relative", top:-270, zIndex:4}}>
              {month}{"\n"}
              {date}
            </Text>
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
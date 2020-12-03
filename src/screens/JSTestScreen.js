import React, {useState, useCallback, useEffect} from 'react';
import {Dimensions, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated'

const Box=(props)=>{
    // let pos={x:0, y:0};
    // let box={id:'box1', position:{x:0, y:0}};//== new Object()
    // let box2 = {id:'box2', position:{x:0, y:0}};

    // box2.position.x=10;
    // console.log(box===box2);//false
    // console.log(box.position===box2.position);//true

    // let boxstring = JSON.stringify(box);//오브젝트 -> 문자열 변환
    // let anotherbox=JSON.parse(boxstring);//문자열 -> 오브젝트 변환

    // let box3 = JSON.parse(JSON.stringify(box));//이제 box3는 box와 내용은 같으나 주소는 다름(다른 정보)
    // let box4 = {... box, id:'box4', position:{x:0, y:20}};//(...) : spread operator : box에 있는 모든 정보 복사하여 또 다른 개체로 생성
    //                      //shallow copy : box의 주소정보를 복사해서 넣었기에 box4 속성값을 바꾸면 box에 영향을 준다.
    //                      //position:{ } 부분은 새로운 개체를 만들어낸 것이기 때문에 영향 안줌

    // box4.position.x=10;
    // box2.position.x=20;
    // box3.id="box3";

    // let boxes = [ box,box2,box3 ];
    // let anotherboxes = JSON.parse(JSON.stringify(boxes));
    // let shallowboxes = [... boxes, {id:'box5', position:{x:40, y:2}}];

    // shallowboxes[2].position.x=30;
    // shallowboxes[4].position.x=50;

    ////////////////////////////////////

    const x = useSharedValue(0);
    const y = useSharedValue(0);

    const animatedStyle = useAnimatedStyle( ()=> {
        return {
            left:0,
            top:0,
            width:100,
            height:100,
            borderRadius: 5,
            elevation: 10,
            color: "white",
            backgroundColor: props.object.color,
            transform: [ 
                {translateX: x.value },
                {translateY: y.value },
                //{scale: scale.value }
            ]
        }
    });

    const panHandler = useAnimatedGestureHandler( {
        onStart: (_, ctx) => {
            ctx.startX = x.value;
            ctx.startY = y.value;
            ctx.dragged = false;
        },
        onActive: (event, ctx) => {
            if (ctx.dragged == false) {
                ctx.dragged = true;
                /* dragging를 처음 시작하게 된다면 */               
            }
            x.value = ctx.startX + event.translationX;
            y.value = ctx.startY + event.translationY;
        },
        onFinish: (_, ctx) => {
            if (ctx.dragged == true) {
                /* dragging을 했다면 */
            }
        }
    });

    return (
        <PanGestureHandler onGestureEvent={panHandler} >
            <Animated.View style={style.animatedStyle} onLayout={(event)=>{
                console.log("layout: ", event.nativeEvent.layout);
                props.setLayout(props.object.id, event.nativeEvent.layout);
            }}>
                <Text style={}>{props.object.id}</Text>
            </Animated.View>
        </PanGestureHandler>
    
    );

    let anotherboxes = [];
    for(let i=0; i<4; i++){
        anotherboxes.push({id:`box${i*100}`, x:0, y:i*100});
    }
    
}

const JSTestScreen=(props)=>{
    console.log("Dimension", Dimensions.get("screen"));
    const [boxes, setBoxes]=useState([
        {id:"box1", color:'blue'},
        {id:"box2", color:'blue'},
        {id:"box3", color:'blue'},
        {id:"box4", color:'blue'},
    ]);

/////////////////////////////////
    //박스 어레이 만들기
    // //#1
    // let anotherBoxes = [];
    // for(let i=0; i<4; i++){
    //     anotherBoxes.push({id: `box ${i}*100`, x:0, y:i*100});
    // }
    // console.log("another", anotherBoxes);

    // //#2
    // let arr = [1, 3, 5, 7];
    // let result = [];
    // for(let i in arr){//in(index) : 0, 1, 2, 3   /  of(item) : 1, 3, 5, 7
    //     result.push({id:`box ${i}`, x:0, y: i*100});
    // }
    // console.log(result);

    // //#3
    // let mapped = arr.map((item, idx)=>{
    //     return{id: `box ${item}`, x:0, y:i*100};
    // });
    // console.log(mapped);
////////////////////////////////////////////

    const setLayout = (id, layout)=>{
        
        boxes = boxes.map((item)=>item.id == id ? {...item, layout}:item)
        boxes = boxes.map((item)=>{
            if(item.id == id) return item;
            if(intersect(x, y, 100, 100, item.x, item.y, item.width, item.height)){
                return {...item, color:'orange'};
            } else return item;
        })
    }

    const intersect = ( x, y, w, h, x1, y1, w1, h1) => 
        y + h >= y1 && y1 + h1 >= y && x + w >= x1 && x1 + w1 >= x;

    const update=(id, x,y)=>{
        let myBoxes = JSON.parse(JSON.stringify(boxes))
        myBoxes=boxes.map((item)=>{
            return{...item, color:'blue'};
        });
        myboxes=boxes.map((item)=>item.id==id?{...item, x:x, y:y}:item);
        
    }

    //let boxesRender = boxes.map(item=><Box key={item.id} object={item}/>);

    return(
        <View style={[styles.absoluteContainer, styles.wrap]}>
            {
                boxes.map(item=><Box key={item.id} object={item}
                    update={update}
                    setLayout={setLayout}
                />)
            }
            {/* 
            <Box key="box1" object={boxes[0]}/>
            <Box key="box2" object={boxes[1]}/>
            <Box key="box3" object={boxes[2]}/>
            <Box key="box4" object={boxes[3]}/> 
            */}
        </View>
    );
}

export default JSTestScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        marginTop: 24
    },
    absoluteContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    menu: {
        height:30, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    box: {
        position: 'absolute',
        width: 80,
        height: 80,
        backgroundColor: "blue",
    },
    commandText: {
        flex:1,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white'
    },
    wrapRowContainer: {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'flex-start'
    },
    border: {
        borderColor: 'yellow',
        borderWidth: 10,
        borderStyle: 'dashed',
    }
});
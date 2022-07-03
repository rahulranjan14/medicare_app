import React, { useState } from "react";

// import {Text, View, ScrollView, TouchableOpacity} from 'react-native'

import {
  Container,
  Text,
  Heading,
  NativeBaseProvider,
  Center,
  Button,
  Box,
  Input
} from "native-base";
import {
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";
import { Dimensions, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const badhealthimage = require("./../assets/badhealth.png");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const componentwidth = windowWidth > 400 ? "80%" : "95%";

const RorC = windowWidth > 400 ? "row" : "column";
const ForH = windowWidth > 400 ? windowWidth / 2 - 5 : windowWidth - 5;
const globalPadding = windowWidth > 400 ? 50 : 10;
const headerWidth = windowWidth > 400 ? windowWidth - 100 : windowWidth - 20;
const cardwidth = windowWidth > 400 ? 500 : 275;
const imagewidth = windowWidth > 400 ? 500 : 250;
const imageheight = windowWidth > 400 ? 500 : 250;
console.log("width", windowWidth);
console.log("height", windowHeight);
console.log("componentwidth", componentwidth);
console.log("global padding", globalPadding);
console.log("cardwidth", cardwidth)

const scrvheight = windowHeight - 20



const Consult = (props) => {
  const [healthScore, setHealthScore] = useState(0);
  const [counter, setCounter] = useState(0);

  const [messages, setMessages] = useState(["i want a routine checkup", "when can we schedule", "i will come to the clinic", "thanks"])
const [currentMessage, setCurrentMessage] = useState("")

const handlechange = (e) => {
    setCurrentMessage(e)
}

const onsendbutton = () => {
    var msgs = [...messages]
    msgs.push(currentMessage)
    setMessages(msgs)
    setCurrentMessage("")
}


  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: globalPadding,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar backgroundColor="#ffffff" />

      {/* header s */}
      <View
        style={{
          marginVertical: 10,
          width: headerWidth,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth:1,
          borderBottomColor:"black"
        }}
      >
        <View style={{flex:1, alignItems:"flex-start", justifyContent:'center'}}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Homepage")}>
            <Image
              style={{ height: 30, width: 30, }}
              source={require("./../assets/backarrow.png")}
            />
            </TouchableOpacity>
        </View>
        <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
        <Heading
          backgroundColor="red"
          color="emerald.600"
        >
          Your Doctor
        </Heading>
        </View>
        
        <View style={{ flex:1}}>
        
        </View>
      </View>
      {/* header e */}

      <View style={{ display: "flex", marginTop:20, flexDirection: RorC }}>
        <View style={{ width: ForH , display:'flex', alignItems:'center', }}>
          {/* screen default image */}
         
          <Image
              style={{ height: imageheight, width: imagewidth }}
              source={require("./../assets/doctorhome.png")}
            />

          {/* screen some description of the current screen s */}

           

          <Heading pt={1} fontWeight="bold" size="md">
            World Class doctors now accessibile at nominal charges.
          </Heading>

          

         

          {/* screen some description of the current screen s */}
        </View>

        <View style={{ width: ForH, marginTop:20, flex:1, backgroundColor:'#BCFF63', height:scrvheight, borderRadius:10 }}>
            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20}}>Chat Window</Text>
          <ScrollView
            contentContainerStyle={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              alignItems: "center",
              flex:0.8,
              backgroundColor:'#E5FFC1'
            }}
          >
              <View style={{borderWidth:1, borderWidth:2, borderColor:'black', paddingVertical:5,paddingHorizontal:100, borderRadius:10, margin:10, backgroundColor:'#E5FFC1', alignSelf:'flex-end'}}>
                <Text>HI doctor</Text>
            </View>
            <View style={{borderWidth:1, borderWidth:2, borderColor:'black', paddingVertical:5,paddingHorizontal:100, borderRadius:10, margin:10, backgroundColor:'#E5FFC1', alignSelf:'flex-start'}}>
                <Text>Hi rahul</Text>
            </View>
          {messages.map(message => {
            return(
                <View style={{borderWidth:1, borderWidth:2, borderColor:'black', paddingVertical:5,paddingHorizontal:100, borderRadius:10, margin:10, backgroundColor:'#E5FFC1', alignSelf:'flex-end'}}>
                <Text>{message}</Text>
            </View>
            )
          })}
         
          </ScrollView>
          <View style={{flex:0.1, flexDirection:'row', alignItems:'baseline', justifyContent:'space-evenly'}}>
            <View   style={{flex:0.8}}>
          <TextInput
     style={{borderWidth:2}}
        numberOfLines={4}
        onChangeText={(e) => handlechange(e)}
        value={currentMessage}
        placeholder="input"
        // keyboardType="numeric"
      />
      </View>
      <TouchableOpacity style={{paddingHorizontal:30, paddingVertical:5, backgroundColor:'#BDD8FE', flex:0.2, borderRadius:10}} onPress={() => onsendbutton()}>
        <Text>
        send
        </Text>
      </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Consult;

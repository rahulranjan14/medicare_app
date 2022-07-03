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
} from "native-base";
import {
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
  Image,
  Touchable,
} from "react-native";
import { Dimensions } from "react-native";
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
const herowidth =  windowWidth > 400 ? windowWidth - 100 : windowWidth - 20;
console.log("width", windowWidth);
console.log("height", windowHeight);
console.log("componentwidth", componentwidth);
console.log("global padding", globalPadding);
console.log("cardwidth", cardwidth)

const CustomCard = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        paddingHorizontal: 20,
        paddingVertical: 50,
        marginVertical: 1,
        marginHorizontal: 1,
      }}
    >
      <Text>Personal Qustions and answer</Text>
    </View>
  );
};

const Homepage = (props) => {
  const [healthScore, setHealthScore] = useState(0);
  const [counter, setCounter] = useState(0);

  const defaultStatus = () => {
    if (counter != 5) {
      return (
        <>
          <Heading
            style={{
              display: "flex",
              flexDirection:'column',
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ height: imageheight, width: imagewidth }}
              source={require("./../assets/badhealth.png")}
            />
            <Heading pt={3} fontWeight="bold" size="lg"  >
            Medical help accessibile at fingertips
          </Heading>
          </Heading>
          
        </>
      );
    }
  };


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
            <Image
              style={{ height: 30, width: 30, }}
              source={require("./../assets/backarrow.png")}
            />
        </View>
        <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
        <Heading
          backgroundColor="red"
          color="emerald.600"
        >
          Medi Bro
        </Heading>
        </View>
        
        <View style={{ flex:1, alignItems:'flex-end', marginBottom:2}}>
            <TouchableOpacity onPress={() => props.navigation.navigate("ProfilePage")}>
        <Image
              style={{ height: 30, width: 30, }}
              source={require("./../assets/user.png")}
            />
            </TouchableOpacity>
        </View>
      </View>
      {/* header e */}

      <View style={{ display: "flex", marginTop:20, flexDirection:'column' }}>
        <View style={{ width: herowidth , display:'flex', alignItems:'center',justifyContent:'center' }}>
          {/* screen default image */}
         

          {/* screen some description of the current screen s */}

            

          <Heading pt={1} fontWeight="bold" size="md">
           
          </Heading>

          

          {defaultStatus()}

          {/* screen some description of the current screen s */}
        </View>

        <View style={{ width: herowidth, marginTop:20 }}>
          <ScrollView
            contentContainerStyle={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           
           <View>
            <TouchableOpacity style={{paddingHorizontal:2, paddingVertical:2, backgroundColor:'black', marginHorizontal:50,marginVertical:25}} onPress={() => props.navigation.navigate("Recepies")}>
            <ImageBackground
                resizeMode="cover"
                style={{ flex: 1, paddingVertical:50, paddingHorizontal:80 }}
                source={require("./../assets/cardbg.jpg")}
              >
                <Text style={{fontWeight:'bold', fontSize:25}}>Healthy Recipes</Text>
              </ImageBackground>
            </TouchableOpacity>
           </View>

           <View>
           <TouchableOpacity style={{paddingHorizontal:2, paddingVertical:2, backgroundColor:'black', marginHorizontal:50,marginVertical:25}} onPress={() => props.navigation.navigate("ProfilePage")}>
           <ImageBackground
                resizeMode="cover"
                style={{ flex: 1, paddingVertical:50, paddingHorizontal:80 }}
                source={require("./../assets/cardbg.jpg")}
              >
                <Text style={{fontWeight:'bold', fontSize:25}}>Self assessment</Text>
              </ImageBackground>
            </TouchableOpacity>
           </View>

           <View>
           <TouchableOpacity style={{paddingHorizontal:2, paddingVertical:2, backgroundColor:'black', marginHorizontal:50,marginVertical:25}} onPress={() => props.navigation.navigate("Consult")}>
           <ImageBackground
                resizeMode="cover"
                style={{ flex: 1, paddingVertical:50, paddingHorizontal:80 }}
                source={require("./../assets/cardbg.jpg")}
              >
                <Text style={{fontWeight:'bold', fontSize:25}}>Talk to a doctor</Text>
              </ImageBackground>
            </TouchableOpacity>
           </View>

          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Homepage;

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
console.log("width", windowWidth);
console.log("height", windowHeight);
console.log("componentwidth", componentwidth);
console.log("global padding", globalPadding);
console.log("cardwidth", cardwidth);

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

const Recepies = (props) => {
  const [healthScore, setHealthScore] = useState(0);
  const [counter, setCounter] = useState(0);

  const [selectedFoodItemNumber, setSelectedFoodItemNumber] = useState(0)

  const recepiesData = [
    {
      name: "Turmeric Milk",
      url: "./../assets/goodhealth.png",
      ingredients: ["milk", "turmeric", "sugar"],
      instructions: [
        "1. Boil the Milk",
        "2. put some turmeric",
        "3. put some sugar",
        "4. Mix well",
      ],
    },
    {
      name: "Khichdi",
      url: "./../assets/goodhealth.png",
      ingredients: ["rice", "pulses", "salt", "veggies", "turmeric"],
      instructions: [
        "1. put some water in the pan",
        "2. put rice and pulse",
        "3. put salt and turmeric",
        "4. Cook it for 20 minutes",
      ],
    },
    {
      name: "daliya",
      url: "./../assets/goodhealth.png",
      ingredients: ["rice", "pulses", "salt", "veggies", "turmeric"],
      instructions: [
        "1. put some water in the pan",
        "2. put rice and pulse",
        "3. put salt and turmeric",
        "4. Cook it for 20 minutes",
      ],
    },
    {
      name: "juice",
      url: "./../assets/goodhealth.png",
      ingredients: ["rice", "pulses", "salt", "veggies", "turmeric"],
      instructions: [
        "1. put some water in the pan",
        "2. put rice and pulse",
        "3. put salt and turmeric",
        "4. Cook it for 20 minutes",
      ],
    },
    {
      name: "green tea",
      url: "./../assets/badhealth.png",
      ingredients: ["rice", "pulses", "salt", "veggies", "turmeric"],
      instructions: [
        "1. put some water in the pan",
        "2. put rice and pulse",
        "3. put salt and turmeric",
        "4. Cook it for 20 minutes",
      ],
    },
  ];

  const defaultStatus = () => {
    if (counter != 5) {
      return (
        <>
          <Heading
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selectedFoodItemNumber == 0 && (
                <Image
                style={{ height: imageheight, width: imagewidth }}
                source={require("./../assets/food.png")}
              />
            )}

            {selectedFoodItemNumber == 1 && (
                <Image
                style={{ height: imageheight, width: imagewidth, marginTop:10 }}
                source={require("./../assets/tmilk.png")}
              />
            )}

            {selectedFoodItemNumber == 2 && (
                <Image
                style={{ height: imageheight, width: imagewidth, marginTop:10 }}
                source={require("./../assets/khichdi.png")}
              />
            )}

            {selectedFoodItemNumber == 3 && (
                <Image
                style={{ height: imageheight, width: imagewidth, marginTop:10 }}
                source={require("./../assets/daliya.png")}
              />
            )}

            {selectedFoodItemNumber == 4 && (
                <Image
                style={{ height: imageheight, width: imagewidth, marginTop:10 }}
                source={require("./../assets/juice.png")}
              />
            )}
            
          </Heading>
      
            {selectedFoodItemNumber == 0 && (
                    <Heading pt={1} fontWeight="bold" size="lg">
                    Healthy Recipes for your healthy body.
                  </Heading>
            )}

            {selectedFoodItemNumber != 0 && (
                <>
                <Text style={{fontSize:25, marginTop:10}}>Ingredients:</Text>
                <View style={{display:'flex', alignItems:'flex-start'}}>
                {recepiesData[selectedFoodItemNumber-1].ingredients.map((i,key) => {
                    return(
                        <Text>{key+1}.{i}</Text>
                    )
                })}
                </View>

                <Text style={{fontSize:25, marginTop:20}}>Instructions :</Text>

                <View style={{display:'flex', alignItems:'flex-start'}}>
                {recepiesData[selectedFoodItemNumber-1].instructions.map(i => {
                    return(
                        <Text>{i}</Text>
                    )
                })}
                </View>
                </>
            )}

          <Text></Text>
        </>
      );
    }
  };

  const goodStatus = () => {
    if (counter == 5 && healthScore > 3) {
      return (
        <>
          <Heading
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ height: imageheight, width: imagewidth }}
              source={require("./../assets/goodhealth.png")}
            />
          </Heading>
          <Heading pt={1} fontWeight="bold" size="sm">
            You are Doing Good. Keepit up.
          </Heading>
        </>
      );
    }
  };

  const badStatus = () => {
    if (counter == 5 && healthScore < 3) {
      return (
        <>
          <Heading
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ height: imageheight, width: imagewidth }}
              source={require("./../assets/badhealth.png")}
            />
          </Heading>
          <Heading pt={1} fontWeight="bold" size="sm">
            You need to consult your doctor.
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
          borderBottomWidth: 1,
          borderBottomColor: "black",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
             <TouchableOpacity onPress={() => props.navigation.navigate("Homepage")}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("./../assets/backarrow.png")}
          />
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <Heading backgroundColor="red" color="emerald.600">
            Healthy Recepies
          </Heading>
        </View>

        <View style={{ flex: 1 }}></View>
      </View>
      {/* header e */}

      <View style={{ display: "flex", marginTop: 20, flexDirection: RorC }}>
        <View style={{ width: ForH, display: "flex", alignItems: "center" }}>
          {/* screen default image */}

          {/* screen some description of the current screen s */}

          {goodStatus()}
          {badStatus()}

          <Heading pt={1} fontWeight="bold" size="md">
            {selectedFoodItemNumber == 1 && ("Turmeric Milk")}
            {selectedFoodItemNumber == 2 && ("Khichdi")}
            {selectedFoodItemNumber == 3 && ("Daliya")}
            {selectedFoodItemNumber == 4 && ("Juice")}
          </Heading>

          {defaultStatus()}

          {/* screen some description of the current screen s */}
        </View>

        <View style={{ width: ForH, marginTop: 20 }}>
          <ScrollView
            contentContainerStyle={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ margin: 5, padding: 1, backgroundColor: "#0D0D0D" }}>
                <TouchableOpacity onPress={() => setSelectedFoodItemNumber(1)}>
              <ImageBackground
                resizeMode="cover"
                style={{ flex: 1, paddingVertical:50, paddingHorizontal:80 }}
                source={require("./../assets/tmilk.png")}
              >
                <Text style={{fontWeight:'bold', fontSize:45}}>Milk</Text>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={{ margin: 5, padding: 1, backgroundColor: "#0D0D0D" }}>
            <TouchableOpacity onPress={() => setSelectedFoodItemNumber(2)}>
              <ImageBackground
                resizeMode="cover"
                style={{ flex: 1,  paddingVertical:30, paddingHorizontal:48 }}
                source={require("./../assets/khichdi.png")}
              >
                <Text style={{fontWeight:'bold', fontSize:45}}>{recepiesData[1].name}</Text>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={{ margin: 5, padding: 1, backgroundColor: "#0D0D0D" }}>
            <TouchableOpacity onPress={() => setSelectedFoodItemNumber(3)}>
              <ImageBackground
                resizeMode="cover"
                style={{ flex: 1,  paddingVertical:30, paddingHorizontal:65}}
                source={require("./../assets/daliya.png")}
              >
                <Text style={{fontWeight:'bold', fontSize:45, color:'#0D0D0D'}}>{recepiesData[2].name}</Text>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={{ margin: 5, padding: 1, backgroundColor: "#0D0D0D" }}>
            <TouchableOpacity onPress={() => setSelectedFoodItemNumber(4)}>
              <ImageBackground
                resizeMode="cover"
                style={{ flex: 1,  paddingVertical:50, paddingHorizontal:77 }}
                source={require("./../assets/juice.png")}
              >
                <Text style={{fontWeight:'bold', fontSize:45}}>{recepiesData[3].name}</Text>
              </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={{ margin: 5, padding: 1, backgroundColor: "#0D0D0D" }}>
              <ImageBackground
                resizeMode="cover"
                style={{ flex: 1,  paddingVertical:50, paddingHorizontal:77 }}
                source={require("./../assets/juice.png")}
              >
                <Text style={{fontWeight:'bold', fontSize:45}}>{recepiesData[3].name}</Text>
              </ImageBackground>
            </View>

            <View style={{ margin: 5, padding: 1, backgroundColor: "#0D0D0D" }}>
              <ImageBackground
                resizeMode="cover"
                style={{ flex: 1,  paddingVertical:50, paddingHorizontal:77 }}
                source={require("./../assets/juice.png")}
              >
                <Text style={{fontWeight:'bold', fontSize:45}}>{recepiesData[3].name}</Text>
              </ImageBackground>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Recepies;

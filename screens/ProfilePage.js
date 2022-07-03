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
  TouchableOpacity
} from "react-native";
import { Dimensions } from "react-native";

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

const ProfilePage = (props) => {
  const [healthScore, setHealthScore] = useState(0);
  const [counter, setCounter] = useState(0);

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
            <Image
              style={{ height: imageheight, width: imagewidth }}
              source={require("./../assets/badhealth.png")}
            />
          </Heading>
          <Heading pt={1} fontWeight="bold" size="lg" >
            By answering few questions you can determine your health status.
          </Heading>
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
          ProfilePage
        </Heading>
        </View>
        
        <View style={{ flex:1}}>
        
        </View>
      </View>
      {/* header e */}

      <View style={{ display: "flex", marginTop:20, flexDirection: RorC }}>
        <View style={{ width: ForH , display:'flex', alignItems:'center', }}>
          {/* screen default image */}
         

          {/* screen some description of the current screen s */}

            {goodStatus()}
            {badStatus()}

          <Heading pt={1} fontWeight="bold" size="md">
            Current Score : {healthScore}
          </Heading>

          

          {defaultStatus()}

          {/* screen some description of the current screen s */}
        </View>

        <View style={{ width: ForH, marginTop:20 }}>
          <ScrollView
            contentContainerStyle={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 5,
                width: cardwidth,
                backgroundColor: "#fdfcfa",
                borderWidth: 1,
                padding: 5,
                marginVertical: 4,
              }}
            >
              <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
                1. Are you able to breath properly
              </Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  elevation: 20,
                }}
              >
                <Button
                  size="md"
                  colorScheme="secondary"
                  style={{
                    paddingHorizontal: 100,
                    marginVertical: 5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "#120E43",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    setHealthScore(healthScore + 1);
                    setCounter(counter + 1);
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    Yes
                  </Text>
                </Button>

                <Button
                  size="md"
                  colorScheme="green"
                  style={{
                    paddingHorizontal: 100,
                    marginVertical: 5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "#120E43",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    setCounter(counter + 1);
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>No</Text>
                </Button>
              </View>
            </View>

            <View
              style={{
                borderRadius: 5,
                width: cardwidth,
                backgroundColor: "#fdfcfa",
                borderWidth: 1,
                padding: 5,
                marginVertical: 4,
              }}
            >
              <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
                2. Can you continously run for 60 seconds
              </Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  elevation: 20,
                }}
              >
                <Button
                  size="md"
                  colorScheme="secondary"
                  style={{
                    paddingHorizontal: 100,
                    marginVertical: 5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "#120E43",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    setHealthScore(healthScore + 1);
                    setCounter(counter + 1);
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    Yes
                  </Text>
                </Button>

                <Button
                  size="md"
                  colorScheme="green"
                  style={{
                    paddingHorizontal: 100,
                    marginVertical: 5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "#120E43",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    setCounter(counter + 1);
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>No</Text>
                </Button>
              </View>
            </View>

      

            <View
              style={{
                borderRadius: 5,
                width: cardwidth,
                backgroundColor: "#fdfcfa",
                borderWidth: 1,
                padding: 5,
                marginVertical: 4,
              }}
            >
              <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
                3. Is your digestive system working fine?
              </Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  elevation: 20,
                }}
              >
                <Button
                  size="md"
                  colorScheme="secondary"
                  style={{
                    paddingHorizontal: 100,
                    marginVertical: 5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "#120E43",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    setHealthScore(healthScore + 1);
                    setCounter(counter + 1);
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    Yes
                  </Text>
                </Button>

                <Button
                  size="md"
                  colorScheme="green"
                  style={{
                    paddingHorizontal: 100,
                    marginVertical: 5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "#120E43",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    setCounter(counter + 1);
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>No</Text>
                </Button>
              </View>
            </View>

            <View
              style={{
                borderRadius: 5,
                width: cardwidth,
                backgroundColor: "#fdfcfa",
                borderWidth: 1,
                padding: 5,
                marginVertical: 4,
              }}
            >
              <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
                4. Do you take balanced diet?
              </Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  elevation: 20,
                }}
              >
                <Button
                  size="md"
                  colorScheme="secondary"
                  style={{
                    paddingHorizontal: 100,
                    marginVertical: 5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "#120E43",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    setHealthScore(healthScore + 1);
                    setCounter(counter + 1);
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    Yes
                  </Text>
                </Button>

                <Button
                  size="md"
                  colorScheme="green"
                  style={{
                    paddingHorizontal: 100,
                    marginVertical: 5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "#120E43",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    setCounter(counter + 1);
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>No</Text>
                </Button>
              </View>
            </View>

            <View
              style={{
                borderRadius: 5,
                width: cardwidth,
                backgroundColor: "#fdfcfa",
                borderWidth: 1,
                padding: 5,
                marginVertical: 4,
              }}
            >
              <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
                5. Do you avoid junk food?
              </Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  elevation: 20,
                }}
              >
                <Button
                  size="md"
                  colorScheme="secondary"
                  style={{
                    paddingHorizontal: 100,
                    marginVertical: 5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "#120E43",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    setHealthScore(healthScore + 1);
                    setCounter(counter + 1);
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    Yes
                  </Text>
                </Button>

                <Button
                  size="md"
                  colorScheme="green"
                  style={{
                    paddingHorizontal: 100,
                    marginVertical: 5,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "#120E43",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    setCounter(counter + 1);
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "bold" }}>No</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProfilePage;

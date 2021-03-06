import React from "react";
import { View,  StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
    VStack,
    Box,
    FormControl,
    Input,
    Button
  } from "native-base";

const LoginPage = (props) => {



    return <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
            Welcome
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>
  
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={() => props.navigation.navigate("Homepage")}>
              Sign in
            </Button>
            <HStack mt="2" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                or
              </Text>
              
            </HStack>
            <Button mt="2" colorScheme="indigo" onPress={() => props.navigation.navigate("Homepage")}>
              Sign Up
            </Button>
          </VStack>
        </Box>
      </Center>;
  };

  export default LoginPage
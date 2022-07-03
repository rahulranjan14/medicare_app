import React from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'; 
const AuthStack= createStackNavigator();

import Consult from "./screens/Consult";
import Diet from "./screens/Diet";
import Medicines from "./screens/Medicines";

import LoginPage from "./screens/authScreens/LoginPage";
import Homepage from "./screens/Homepage";
import ProfilePage from "./screens/ProfilePage";
import Recepies from "./screens/Recipes";

const Router = () => {
    return(
        

        <AuthStack.Navigator>

<AuthStack.Screen name="LoginPage" component={LoginPage} options={{
            headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }} />


<AuthStack.Screen name="Homepage" component={Homepage} options={{
            headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }} />



<AuthStack.Screen name="Consult" component={Consult} options={{
            headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }} />


<AuthStack.Screen name="Recepies" component={Recepies} options={{
            headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }} />



<AuthStack.Screen name="ProfilePage" component={ProfilePage} options={{
            headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }} />





<AuthStack.Screen name="Medicines" component={Medicines} options={{
            headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }} />

        

        

        
<AuthStack.Screen name="Diet" component={Diet} options={{
            headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }} />

        </AuthStack.Navigator>
    )
}

export default Router;
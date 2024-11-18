import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Auth from '@react-native-firebase/auth'
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Splash from "../screens/Splash";
import Guest from "../screens/Guest";
import Admin from "../screens/Admin";
import Location from "../screens/Location";
import Cattles from "../screens/Cattles";
import Crops from "../screens/Crops";
import fillup from "../screens/Fillup";
import CropDiseaseList from "../screens/CropDiseaseList";
import CropBreedList from "../screens/CropBreedList";
import CattleBreedList from "../screens/CattleBreedList";
import CattleDiseaseList from "../screens/CattleDiseaseList";
import Status from "../screens/Status";
import UpImg from "../screens/UpImg";
import query from "../screens/query";
import colle from "../screens/colle";
import Main from "../screens/Main";
import Setting from "../screens/tabs/Setting";
import Users from "../screens/tabs/Users";
import ChatScreen from "../screens/ChatScreen";
import Applicant from "../screens/Applicant";
import Choose from "../screens/Choose";
import Weather from "../screens/Weather";
//import { onAuthStateChanged } from "@firebase/auth";

const Stack = createStackNavigator()

const AppNavigator = () => {
  Auth().onAuthStateChanged(user => {
    console.log(user);
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Signin'}
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Signup'}
          component={Signup}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name={'Admin'}
          component={Admin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Guest'}
          component={Guest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Location'}
          component={Location}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Cattles'}
          component={Cattles}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Crops'}
          component={Crops}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'fillup'}
          component={fillup}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'CropDiseaseList'}
          component={CropDiseaseList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'CropBreedList'}
          component={CropBreedList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'CattleBreedList'}
          component={CattleBreedList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'CattleDiseaseList'}
          component={CattleDiseaseList}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name={'Status'}
          component={Status}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'UpImg'}
          component={UpImg}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'query'}
          component={query}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'colle'}
          component={colle}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Main'}
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Setting'}
          component={Setting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Users'}
          component={Users}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'ChatScreen'}
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Applicant'}
          component={Applicant}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Choose'}
          component={Choose}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'Weather'}
          component={Weather}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
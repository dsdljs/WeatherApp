import React from "react";
import Loading from "./Loading";
import { Alert} from "react-native";
import * as Location from 'expo-location';


export default class extends React.Component {
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      console.log(respone);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
     }catch (error) {
       Alert.alert("Can't find you.", "So sad");
s
     }
    
  };
  componentDidMount(){
    this.getLocation();
  }

  render() {
    return <Loading />;
  }



  }
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { HomeScreenProps } from '../../constants/Props'
import Ionicons from 'react-native-vector-icons/Ionicons'; 


export default function BackButton({navigation}:HomeScreenProps) {
  return (
    <View style={styles.backButton}>
           <TouchableOpacity onPress={() => {navigation.goBack()}}>
           <Ionicons name="arrow-back" size={30} />
           </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    backButton : {
        backgroundColor:"#fff",
        borderRadius:50,
        padding:2,
        position:"absolute",
        top:10,
        left:10
    }
})
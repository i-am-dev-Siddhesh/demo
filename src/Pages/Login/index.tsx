import { View, Text,StyleSheet, Touchable, TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../components/CustomInput'
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../components/button';

export default function Login({navigation } : any) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const onSubmit = () => {
        if(username === "user" && password == "123456"){
            Alert.alert("Login successfull");
        }else{
            Alert.alert("Login failed");
        }
    }

  return (
    <View style={styles.container}>
    
     <View style={styles.card}>
     <View style={{paddingVertical:10}}>
     <Entypo
     name="user"
     size={70}
     />
     </View>
        <CustomInput
        iconName='user'
        label='Username'
        inputValue={username}
        placeholder='Ex.John'
        name='username'
        keyboardType='numeric'
        handleChange={(val) =>{setUsername(val)}}        
        />
        <CustomInput
        iconName='lock'
        label='Password'
        inputValue={password}
        placeholder='Your Password'
        name='username'
        keyboardType='numeric'
        handleChange={(val) =>{setPassword(val)}}  
        secureTextEntry={true}      
        />
        <CustomButton title='Login' onPress={onSubmit} />
        <CustomButton title='Post Data' onPress={() => navigation.navigate("Home")} />
     </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        padding:10
    },
    card:{
        backgroundColor:"#fff",
        elevation:2,
        padding:10,
        gap:10,
        alignItems:'center',
        borderRadius:10
    },
    button : {
        width:"100%",
        backgroundColor :"#1DBDEC",
        paddingVertical:10,
        borderRadius:5,
        alignItems:"center"
    },
    text:{
        color:"#fff",
        textTransform : "uppercase"
    }
    
})
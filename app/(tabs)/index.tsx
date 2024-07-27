import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';

const index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('loading...');

  const handleLogin = async () => {
    await axios.post(`http://103.163.111.39:3106/auth/login`,{
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    
  }
  return (
    <SafeAreaView>
      <View className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <View className="w-full max-w-lg mx-auto px-5 flex flex-col items-center p-6 border border-gray-200 rounded-3xl">
          <View>
            <Text className="text-center font-bold text-2xl">PMB Online Apps</Text>
            <Text className="text-center">{name}</Text>
            <Text className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, autem.</Text>
          </View>
          <View className="w-full space-y-2">
            <View className="mt-5">
              <TextInput placeholder='Email' value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' className="w-full bg-gray-200 border border-gray-300 rounded-2xl p-2.5 px-4" />
            </View>
            <View className="mt-5">
              <TextInput placeholder='Password' value={password} onChangeText={setPassword} autoCapitalize='none' secureTextEntry={true} className="w-full bg-gray-200 border border-gray-300 rounded-2xl p-2.5 px-4" />
            </View>
            <TouchableOpacity onPress={handleLogin} className="bg-sky-500 p-3 rounded-2xl" activeOpacity={0.8}>
              <Text className="text-center text-white font-medium">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})
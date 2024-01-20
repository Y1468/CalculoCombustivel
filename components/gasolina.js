import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'

export default p=>{
  return(
    <View>
     <Text>Digite o preço da gasolina</Text>
     <TextInput
      style={styles.input}
      keyboardType={'numeric'}
      autoFocus={true}
      onChangeText={p.aoM}
     />
    </View>
  )
}

const styles=StyleSheet.create({
 input:{
   borderWidth:2,
   borderColor:'black',
   borderRadius:8,
   marginTop:10,
   padding:10,
 }
})
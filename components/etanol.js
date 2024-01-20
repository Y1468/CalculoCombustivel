import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'

export default p=>{
  return(
    <View style={styles.viw}>
    <Text>Digite o preço do etanol</Text>
    <TextInput 
     style={styles.input2}
     keyboardType={'numeric'}
     autoFocus={false}
     onChangeText={p.aoM}
    />
    </View>
  )
}
const styles=StyleSheet.create({
  input2:{
    borderWidth:2,
    borderColor:'black',
    borderRadius:8,
    marginTop:10,
    padding:10,
  },
  viw:{
    marginTop:20,
  }
})

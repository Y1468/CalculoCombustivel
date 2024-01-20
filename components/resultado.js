import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default p=>{
 return(
   <View style={styles.res}>
    <Text style={styles.txt2}>Resultado:{p.res}</Text>
   </View>
 )
}
const styles=StyleSheet.create({
  res:{
    alignItems:'center',
    marginTop:8,
  },
  txt2:{
   fontSize:25,
  }
})

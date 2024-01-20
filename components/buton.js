import React from 'react'
import {Button,View,StyleSheet,} from 'react-native'

export default p=>{
  return(
    <View style={styles.txt}>
     <Button
      style={styles.btn}
      title='Calcular'
      onPress={p.aoP}
     />
    </View>
  )
}

const styles=StyleSheet.create({
txt:{
  margin:30,
},
btn:{
  padding:20,
  borderRadius:8,
}
})
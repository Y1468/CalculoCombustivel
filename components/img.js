import React from 'react'
import {View,Button,Image,StyleSheet} from 'react-native'

export default p=>{
	return(
     <View style={styles.div}>
    {
       p.imagem == '' ?
       <Image 
       source={require('../Imagem/img2.jpeg')}
       />
        :
       p.imagem == 'Gasolina' ?
       <Image 
       source={require('../Imagem/img3.jpeg')}
       style={styles.img2}
       />
        :
       <Image 
        source={require('../Imagem/img1.jpeg')}
       />
    }

     </View>
  )
}
const styles=StyleSheet.create({
  div:{
  	alignItems:'center',
  },
  img2:{
  	resizeMode:'stretch'
  	
  }
})

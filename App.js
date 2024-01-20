import React,{useState} from 'react'
import {SafeAreaView,StyleSheet} from 'react-native'
import Gasolina from './components/gasolina'
import Etanol from './components/etanol'
import Buton from './components/buton'
import Resultado from './components/resultado'
import Img from './components/img.js'

export default function App(){
  const [g,setG]=useState(0)
  const [e,setE]=useState(0)
  const [r,setR]=useState(0)

  function calc(){
   if(g==0 || !g){
     alert('Digite o preço da gasolina')
     return
   }
   if(e==0 || !e){
     alert('Digite o preço do etanol')
     return
   }
   let res
   let cauculo=((e/g)*100).toFixed(2)
   if(cauculo>70){
     res='Gasolina'
   }else{
     res='Etanol'
   }
   alert('o etanol esta custando' + cauculo + '% da gasolina.portanto e melho abastecer com ' + res)
   setR(res)
  }
  function limpar(){
    setR('')
  }
  function setGasolina(v){
    limpar()
   setG(v)
  }
  function setEtanol(v){
   limpar()
   setE(v)
  }
  return(
    <SafeAreaView style={styles.safe}>
     <Gasolina aoM={setGasolina}/>
     <Etanol aoM={setEtanol}/>
     <Buton aoP={calc}/>
     <Resultado res={r}/>
     <Img imagem={r}/>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
 safe:{
   padding:15,
 }
})
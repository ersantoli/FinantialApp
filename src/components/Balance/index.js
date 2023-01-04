import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView, MotiText } from 'moti';
export default function Balance({saldo, gastos}) {
 return (
  
  
  
  
  <MotiView
   style={styles.container}
   
   from={{
rotateX:'-100deg',
opacity: 1,

   }}
   animate={{

rotateX:'0deg',
opacity: 1,

   }}
   transition={{
    type: "timing",
    duration: 300,
    delay: 900,
}}

   >

    <View style={styles.item}>
    <Text style={styles.itemTitle}> Saldo </Text>
    <View style={styles.content}>  
    <Text style={styles.currencySymbol}>R$</Text>    
    <Text style={styles.balance}> {saldo} </Text>
    </View>
    </View>
    <View style={styles.item}>
    <Text style={styles.itemTitle}> Gastos </Text>
    <View style={styles.content}>  
    <Text style={styles.currencySymbol}>R$</Text>    
    <Text style={styles.expenses}> {gastos} </Text>
    </View>
    </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
container:{
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingStart:10,
    paddingEnd:10,
    marginTop:-24,
    marginStart:14,
    marginEnd:14,
    borderRadius:6,
    paddingTop:22,
    paddingBottom:22,
    borderWidth: 2,
    borderColor:'aqua',
    zIndex:99,
},
itemTitle:{
    fontSize:20,
    color:'#dadada'

},
content:{
    flexDirection:'row',
    alignItems:'center',
},
currencySymbol:{
    color:'#dadada',
    marginRight:6,

},
balance:{
    fontSize:22,
    color:'#2ecc71',
},
expenses:{
    fontSize:22,
    color:'#e74c3c'
}

})
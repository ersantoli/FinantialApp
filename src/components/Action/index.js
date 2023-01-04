import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
export default function Action() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
           {/**1° icone */}
            <TouchableOpacity style={styles.actionbutton}>

                <View style={styles.areabutton}>

                    <AntDesign name="addfolder" size={26} color="#000" />

                </View>
                <Text style={styles.labelbutton}>
                    Entradas
                </Text>
            </TouchableOpacity>

             {/**2° icone */}
             <TouchableOpacity style={styles.actionbutton}>

<View style={styles.areabutton}>

    <AntDesign name="tagso" size={26} color="#000" />

</View>
<Text style={styles.labelbutton}>
   Compras
</Text>
</TouchableOpacity>

 {/**3° icone */}
 <TouchableOpacity style={styles.actionbutton}>

<View style={styles.areabutton}>

    <AntDesign name="barcode" size={26} color="#000" />

</View>
<Text style={styles.labelbutton}>
    Boletos
</Text>
</TouchableOpacity>

 {/**4° icone */}
 <TouchableOpacity style={styles.actionbutton}>

<View style={styles.areabutton}>

    <AntDesign name="creditcard" size={26} color="#000" />

</View>
<Text style={styles.labelbutton}>
    Carteira
</Text>
</TouchableOpacity>

{/**5° icone */}
<TouchableOpacity style={styles.actionbutton}>

<View style={styles.areabutton}>

    <AntDesign name="setting" size={26} color="#000" />

</View>
<Text style={styles.labelbutton}>
    Conta
</Text>
</TouchableOpacity>
            

 


        </ScrollView>
    );
}
const styles = StyleSheet.create({
container:{
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart :14,
},
actionbutton:{
    alignItems:"center",
    marginRight:32,
},
areabutton:{

    backgroundColor:'#ecf0f1',
    height:60,
    width:60,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
},
labelbutton:{
    
    marginTop:4,
    textAlign:'center',
    fontWeight:'bold'
}
})
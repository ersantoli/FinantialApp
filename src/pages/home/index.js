
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Action from '../../components/Action';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';


const list = [
  {
    id:1,
    label:'boleto conta luz',
    value:'300,00',
    date:'07/09/2022',
    type:0 //despesas
  },
  {
  id:2,
    label:'Pix Cliente x',
    value:'2500,00',
    date:'27/06/2022',
    type:1 //receita/ entrada
  },
  {
    id:3,
      label:'Salario',
      value:'7500,00',
      date:'17/09/2022',
      type:1 //receita/ entrada
    },
]
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Erick Oliveira" />

      <Balance saldo="9.000,25" gastos="-527,75"/>

      <Action/>
      <Text style={styles.title}>Ùltimas Movimentações</Text>

      <FlatList
      style={styles.list} //estilo css
      data={list} //array
      keyExtractor={(item)=> String(item.id)}
      showsHorizontalScrollIndicator={false}
      renderItem={( {item}  ) => <Movements data={item}/> }
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fafafa',
   
    flex:1,
  },
  title:{
  fontSize:18,
  fontWeight:'bold',
  marginLeft:14,
  marginRight:14,
  marginTop:14,

    
  },
  list:{
    marginStart:14,
    marginLeft:14,
  }
});

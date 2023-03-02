import React ,{useState} from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';

const Coffee = (props)=>{
    return(
        <View>
            <Text> Café : {props.name} </Text>
             <Image
                    source={{uri: "https://www.cafequemarca.com.br/wp-content/uploads/2021/03/starbucks-cafe-que-marca.png"}}
                    style={{width: 200, height: 200}}
                  />
        </View>
    )
}

export default function App() {
  return(
         <View style ={styles.container}>
            <Coffee name= 'Americano'/>
            <Coffee name= 'Cappuccino'/>
            <Coffee name= 'Macchiato'/>
         </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center'
  },
});



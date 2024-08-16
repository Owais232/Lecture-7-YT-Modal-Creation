import { useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";



const App=()=>{

  const [modal,setmodal]= useState(false);

  const Openmodal=()=>{
    setmodal(true);
  }

  const closemodal=()=>{
    setmodal(false);
  }

  const handlebutton=()=>{
    console.log("Button clicked")
  }
  const handleimage=()=>{
    console.log("image clicked")
  }

  
  return (
    <View style={{flex:1}}>
     <View style={{flex:1}}>

      <TouchableOpacity onPress={Openmodal}>

      <Image 
      source={require('./img.jpeg')}
      />
      </TouchableOpacity>

      <Modal 
      visible={modal}
      transparent={true}
      animationType="fade"
      onRequestClose={closemodal}>
        <View style={styles.modelcontanier}>
          <TouchableOpacity onPress={closemodal} style={styles.closebutton}>
            <Text style={styles.close}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Image source={require('./img.jpeg')}/>
          </TouchableOpacity>
        </View>

      </Modal>

     </View>
     <View style={{flex:1,justifyContent:'center'}}>

      <Button 
      title="Submit"
      onPress={handlebutton}

      />

     </View>
    </View>
  );
}

const styles=StyleSheet.create({

  modelcontanier:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  closebutton:{
    position:'absolute',
    top:40,
    right:30
  },
  close:{
    color:'#fff',
    fontSize:20
  }

})

export default App;
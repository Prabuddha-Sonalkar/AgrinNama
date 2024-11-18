import React from "react";
import {  View ,StyleSheet,Dimensions,Modal,ActivityIndicator} from "react-native";

const Loader=({visble})=>{
    return(
       <Modal visible={visble} transparent>
         <View style={Styles.modalView}>
            <View style={Styles.mainView}> 
             <ActivityIndicator size={'large'}/> 
                  
            </View>

         </View>
       </Modal>
    )
}

export default Loader;

const Styles=StyleSheet.create({
    modalView:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        backgroundColor:'rgba(0,0,0,.6)',
        justifyContent:'center',
        alignItems:'center'

    },
    mainView:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
})
import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colordark = '#4F565E';
const colorGithub = '#010409';
const imagem= 'https://lh3.googleusercontent.com/a-/AOh14Ggu0TUEqzVb60M2ppd4toMbnWYW0YpkuPGUP5t7=s288-p-rw-no';
const urlToMyGithub= 'https://github.com/Devrafael112';

const App = () => {
    const handlePressGoToGithub = async()=> {
        const res = await Linking.canOpenURL(urlToMyGithub);
        
        if(res){
           await Linking.openURL(urlToMyGithub);
           console.log('teste');
        }
    };
    return (
        <SafeAreaView style = {style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style = {style.content}>
                    <Image style={style.avatar} source={{uri: imagem }} />
                    <Text style={[style.defaultText,style.name]}>Rafael Ferreira</Text>
                    <Text style={[style.defaultText, style.nickname]}>Devrafael112</Text>
                    <Text style={[style.defaultText, style.description]}>Apenas um estudante de ADS </Text>
                    <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Github
                        </Text>
                    </View>
                    </Pressable>
            </View>
        </SafeAreaView>
    
    );
};

export default App;

const style = StyleSheet.create({
    container : {
        //collumn
        backgroundColor: colorGithub,
        flex:1,//expandir para tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
        
    },
    avatar : {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,
    },
    defaultText : {
        color: 'white',
    },
    name :{
        fontSize: 24,
        marginTop: 16,
    },
    nickname : {
        fontSize: 18,
        marginTop: 8,
        color: colordark,
    },
    description : {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
    },
    button:{
        backgroundColor : colordark,
        borderRadius: 10,
        padding: 20,
        marginTop:25,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize:20,
        color: "white",
    },
});
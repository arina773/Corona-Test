import React, { Component } from 'react';
import { View, Text,StyleSheet, Button,Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const width_ = Dimensions.get('window').width;
const height_ = Dimensions.get('window').height;

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Image style={styles.logo} source={require('./assets/Corona_test_logo.png')} />
          <Icon style={styles.barsIcon} name="bars" size={25} />
        </View>
        <ScrollView>

          <View style={styles.userInfo}>
            <View style={styles.avatarContainer}>
              <Image source={require('./assets/avatar.png')} style={styles.avatar}/>
            </View>

            <Text style={styles.name}>User Name and Surname</Text>
            <Text style={styles.TestDate}>Test date 12.11.22</Text>
            <Text style={styles.Companyname}>Test done by <Text style={{fontSize:12, fontWeight: '500'}}>Copmany name</Text></Text>
            
            <View>
              <Image source={require('./assets/QRcode.png')} style={styles.QRcode}/>
              <Text style={styles.TestDate}>Scan QR code to see the results in site of</Text>
              <Text style={{fontSize:12, fontWeight: '500', alignSelf: 'center', marginTop: 10}}>National ehealth Operator</Text>
            </View>
          </View> 

          <View style={styles.test_information}>
            <Text style={{fontSize:16, fontWeight: '500',marginTop:25,}}>Test Information</Text>
            <View style={{marginTop:10}}>
              <Text style={{fontSize:12, fontWeight: '500'}}>Parameter</Text>
              <Text style={{fontSize:14, fontWeight: '100',marginTop:3}}>nCoc-2019 RNA detection (RT PCR)</Text>
            </View>

            <View style={{marginTop:10}}>
              <Text style={{fontSize:12, fontWeight: '500'}}>Sample</Text>
              <Text style={{fontSize:14, fontWeight: '100',marginTop:3}}>Nasopharyngeal swab</Text>
            </View>

            <View style={{marginTop:10}}>
              <Text style={{fontSize:12, fontWeight: '500'}}>Result</Text>
              <Text style={{textAlign: 'center', fontSize:14, fontWeight: '100', width: width_ * 0.8, backgroundColor: '#E1F9F4', marginTop:3,}}>NEGATIVE</Text>
            </View>
          </View>

          <View style={styles.test_information}>
            <Text style={{fontSize:16, fontWeight: '500',marginTop:25}}>User Information</Text>
            <View style={{flexDirection:'row', width: width_ * 0.8, justifyContent: 'space-between', alignItems:'flex-start'}}>
              <View style={{marginTop:10 }}>
                <Text style={{fontSize:12, fontWeight: '500'}}>Passport</Text>
                <Text style={{fontSize:14, fontWeight: '100',marginTop:3}}>AA12345612</Text>
              </View>

              <View style={{marginTop:10}}>
                <Text style={{fontSize:12, fontWeight: '500'}}>Date of birthday</Text>
                <Text style={{fontSize:14, fontWeight: '100',marginTop:3}}>12/12/99</Text>
              </View>
            </View>

            <View style={{marginTop:10}}>
              <Text style={{fontSize:12, fontWeight: '500'}}>Phone</Text>
              <Text style={{fontSize:14, fontWeight: '100',marginTop:3}}>(099) 12-23-12</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff'
  },
  header:{
    height: height_ * 0.09,
    flexDirection: 'row',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomColor:'#EBECF4',
    shadowColor:'#E6E6E6',
    borderBottomWidth:1.2,
    shadowOffset:{height:15},
  },
  userInfo: {
    marginTop:25,
    alignItems:'center'
  },
  test_information: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginHorizontal:  width_ * 0.1
  },
  barsIcon: {
    alignSelf: 'flex-end', 
    marginRight: 20,
    marginBottom: 10
  },
  logo: {
    alignSelf: 'flex-start',
    resizeMode: 'contain', 
    width: '40%', 
    height: '90%'
  },
  avatarContainer:{
    width:80,
    height:80,
    borderRadius:40,
  },
  avatar:{
    width: 80,
    height:80,
    borderRadius:40
  },
  QRcode:{
    alignSelf: 'center',
    marginTop: 25,
    width: width_ * 0.5,
    height: width_ * 0.5
  },
  name:{
    marginTop:8,
    fontSize:16,
    fontWeight:'500'
  },
  Companyname: {
    marginTop:2,
    fontSize:12,
    fontWeight: '100'
  },
  TestDate: {
    marginTop:10,
    fontSize:12,
    fontWeight: '100'
  },    
})
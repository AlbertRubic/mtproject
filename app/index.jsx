import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function index() {
  return (
    <LinearGradient
      colors={['#8BD68E', '#28D039']}
      style={styles.container}
    >
      <View style={{
        gap:12
      }}>
        <Text>KUMON nahLEDGE</Text>
        <View style={{
          height: 70,
          width: 70,
          backgroundColor: 'red'
        }}/>
        <Text>Learn Math Today</Text>
      </View>

      <View style={{
        marginTop: 26
      }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'semibold',
          textAlign: 'center'
        }}>Sign In To Your 
        Account</Text>


        <View style={{gap:12, marginTop: 12}}>
          <View style={{gap:6}}>
            <Text>Email Address</Text>
            <TextInput
              style={{
                padding: 10,
                borderRadius: 50,
                backgroundColor: '#fff'
              }}
              placeholder='learnmath221@gmail.com'
            />
          </View>

          <View style={{gap:6}}>
            <Text>Email Address</Text>
            <TextInput
              style={{
                padding: 10,
                borderRadius: 50,
                backgroundColor: '#fff'
              }}
              placeholder='learnmath221@gmail.com'
            />
          </View>
        </View>

        <Text>
          hjmjm
        </Text>
      </View>

      
    </LinearGradient>

  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 24
  }
})
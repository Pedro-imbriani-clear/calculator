import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import Button from './src/components/Button'


const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.buttons}>
          <Button label='/'  />
          <Button label='7' />
          <Button label='8' />
          <Button label='9' />
          <Button label='*'  />
          <Button label='4' />
          <Button label='5' />
          <Button label='6' />
          <Button label='-'  />
          <Button label='1' />
          <Button label='2' />
          <Button label='3' />
          <Button label='+'  />
          <Button label='0'  />
          <Button label='.' />
          <Button label='='  />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
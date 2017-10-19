import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Platform } from 'react-native'

export default class UselessTextInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Search GitHub Repos…"
          style={styles.searchBox}
          onChangeText={this.props.onChange}
          value={this.props.value}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'ghostwhite',
    padding: 8,
    paddingTop: Platform.select({
      android: 8,
      ios: 28
    })
  },
  searchBox: {
    padding: 8,
    backgroundColor: Platform.select({ android: null, ios: 'white' }),
    borderRadius: 4
  }
})

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import SearchBox from '../components/SearchBox'
import SearchResultsRepoList from './SearchResultsRepoList'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

type Props = {}

type State = {
  searchTerm: string
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  handleSearchTermChange = (text: string) => {
    this.setState({ searchTerm: text })
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBox
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
        <SearchResultsRepoList searchTerm={this.state.searchTerm} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

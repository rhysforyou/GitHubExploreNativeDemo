/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import SearchBox from '../components/SearchBox'
import SearchResultsRepoList from './SearchResultsRepoList'

type Props = {}

type State = {
  searchTerm: string
}

export default class SearchScreen extends Component<Props, State> {
  static navigationOptions = {
    title: 'Search Repos'
  }

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

// @flow
import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Repo from './Repo'

type RepoItem = {
  html_url: string,
  full_name: string,
  language: string,
  description: string,
  topics: ?(string[]),
  homepage: string
}

type Props = {
  repos: Array<RepoItem>
}

export default class RepoList extends Component<Props> {
  render() {
    return (
      <FlatList
        style={{ padding: 16 }}
        data={this.props.repos}
        keyExtractor={item => item.full_name}
        renderItem={({ item }) => (
          <Repo
            name={item.full_name}
            url={item.html_url}
            language={item.language}
            description={item.description}
            topics={item.topics}
            homepage={item.homepage}
          />
        )}
      />
    )
  }
}

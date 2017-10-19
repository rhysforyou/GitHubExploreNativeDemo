// @flow
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  name: string,
  url: string,
  language: string,
  description: string,
  topics: ?(string[]),
  homepage: string
}

class Repo extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.language}>{this.props.language}</Text>
        </View>
        <Text style={styles.description}>{this.props.description}</Text>
        <View style={styles.topics}>
          {this.props.topics &&
            this.props.topics.map(topic => (
              <Text key={topic} style={styles.topic}>
                {topic}
              </Text>
            ))}
        </View>
        <Text style={styles.homepage}>{this.props.homepage}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282c34',
    marginBottom: 16,
    padding: 16,
    borderRadius: 4,

    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 24,
    color: '#61dafb',
    fontWeight: '600'
  },
  language: {
    color: 'white',
    opacity: 0.8
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8
  },
  topics: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },
  topic: {
    fontSize: 14,
    backgroundColor: '#61dafb',
    marginRight: 8,
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4
  },
  homepage: {
    color: '#61dafb'
  }
})

export default Repo

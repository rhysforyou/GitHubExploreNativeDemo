import React from 'react'
import { Text } from 'react-native'
import RepoList from '../components/RepoList'
import Spinner from '../components/Spinner'
import debounce from '../util/debounce'

const STATE_LOADING = 'loading'
const STATE_LOADED = 'loaded'
const STATE_ERROR = 'error'

const defaultResults = [
  {
    html_url: 'https://github.com/facebook/react',
    full_name: 'facebook/react',
    language: 'JavaScript',
    description:
      'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    topics: ['javascript', 'react', 'declarative', 'ui', 'library'],
    homepage: 'https://reactjs.org/'
  },
  {
    html_url: 'https://github.com/rails/rails',
    full_name: 'rails/rails',
    language: 'Ruby',
    description: 'Ruby on Rails',
    topics: ['rails', 'mvc', 'html', 'activerecord', 'activejob', 'ruby'],
    homepage: 'http://rubyonrails.org'
  },
  {
    html_url: 'https://github.com/django/django',
    full_name: 'django/django',
    language: 'Python',
    description: 'The Web framework for perfectionists with deadlines',
    topics: [
      'python',
      'django',
      'web',
      'framework',
      'orm',
      'templates',
      'models',
      'views',
      'apps'
    ],
    homepage: 'https://www.djangoproject.com/'
  }
]

/**
 * A container component that renders search results from the GitHub API based
 * on its `searchTerm` prop.
 *
 * @param {Object} props the React component's props
 * @param {string} props.searchTerm the search term to display results for
 */
export default class SearchResultsRepoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loadingState: STATE_LOADED,
      repos: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.searchTerm !== this.props.searchTerm &&
      nextProps.searchTerm != null
    ) {
      this.setState({ loadingState: STATE_LOADING })
      this.fetchRepos(nextProps.searchTerm)
    }
  }

  fetchRepos = debounce(async searchTerm => {
    try {
      const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(
        searchTerm
      )}`

      const res = await fetch(url)
      const json = await res.json()

      if (searchTerm !== this.props.searchTerm) {
        return
      }

      this.setState((state, props) => {
        if (this.props.searchTerm === searchTerm) {
          return {
            ...state,
            repos: json.items,
            loadingState: STATE_LOADED
          }
        } else {
          return state
        }
      })
    } catch (error) {
      console.error(error)
      if (searchTerm !== this.props.searchTerm) {
        return
      }

      this.setState({
        repos: [],
        loadingState: STATE_ERROR
      })
    }
  }, 300)

  render() {
    if (this.props.searchTerm == null || this.props.searchTerm.length === 0) {
      return <RepoList repos={defaultResults} />
    } else if (this.state.loadingState === STATE_LOADED) {
      return <RepoList repos={this.state.repos} />
    } else if (this.state.loadingState === STATE_ERROR) {
      return <Text>Error loading repos</Text>
    } else {
      return <Spinner />
    }
  }
}

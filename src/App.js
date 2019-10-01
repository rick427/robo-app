import React,{Component} from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = e => {
      this.setState({searchField: e.target.value});
    }

    render(){
        const {robots, searchField} = this.state;
        const filtered = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(!robots.length){
            return <h1 className="tc" style={{color: '#fff'}}>Loading...</h1>
        }
        else{

            return (
                <div className="tc">
                    <h1 className="f1" style={{color: '#ddd'}}>RoboFriends</h1>
                    <SearchBox search={this.onSearchChange}/>
                    <Scroll>
                      <ErrorBoundary>
                        <CardList robots={filtered}/>
                      </ErrorBoundary>
                    </Scroll>  
                </div>
            )
        }
    }
}
export default App;

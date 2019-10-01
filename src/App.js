import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setSearchField} from './actions';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({robots: users}))
    }

    render(){
        //console.log(this.props.store)
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
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
                    <SearchBox search={onSearchChange}/>
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
const mapStateToProps = state => ({
 searchField: state.searchField
});

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { fetchData } from './api'


import { Cards, Chart, CountryPicker } from './components';
import s from './App.module.css';

class App extends React.Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    render() {
        const { data } = this.state;
        return (
            <div className={s.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;
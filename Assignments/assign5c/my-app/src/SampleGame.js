import React from "react";
import axios from 'axios';
import { Board } from './Board';

export class SampleGame extends React.Component {
    state = {
        rows: [],
    }

    componentDidMount() {
        axios.get('https://threeinarowpuzzle.herokuapp.com/sample')
            .then(response => {
                const rows = response.rows;
                this.setState({ rows });
            })
    }

    render() {
        return (
            <div>
                <h2>Sample Game</h2>
                <button>Reload</button>
            </div>
        );
    }

}
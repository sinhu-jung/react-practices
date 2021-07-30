import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor() {
        super(...arguments);
        //this.no
        this.state = {
            no : 10,
            no2 : 20,
        }
    }
    onClickHeader(e) {
        this.setState({
            no: ++this.state.no ,
            no3: 30
        });
        console.log('TitelBar01 click!!!', this.state.no);
    }

    render() {
        return (
            <h1 onClick={ this.onClickHeader.bind(this) }
                style={ {
                    cursor: 'pointer'
                } }>
                ex03 - Functional Event Handler(Class Component) {this.state.no} {this.state.no2} {this.state.no3}
            </h1>
        );
    }
}
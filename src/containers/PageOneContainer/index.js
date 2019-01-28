import React, {Component} from 'react';
import PageOne from '../../components/PageOne';

export default class PageOneContainer extends Component {
    static navigationOptions = {
        title: 'Page One',
    };
    render() {
        return(<PageOne {...this.props} />);
    }
}

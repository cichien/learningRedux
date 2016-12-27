import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/subredit';


 class Async extends Component {
    componentDidMount () {
        const { dispatch } = this.props;
        dispatch(fetchPosts('reactjs'));
    }

    render() {
        const {list} = this.props;
        const {isFetching} = list.reactjs || false;
        const {items} = list.reactjs || [];
        return (
            <div>
                {isFetching &&
                    <h2>Loading...</h2>
                }
                {items &&
                    <ul> {
                            items.map(item =>
                                <li key={item.id}>{item.permalink}</li>
                            )
                        }
                    </ul>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { async } = state;
    return {list: async};
}

export default connect(mapStateToProps)(Async);

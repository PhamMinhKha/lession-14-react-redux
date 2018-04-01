import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import * as Message from './../constants/Message';
import MessageComponent from './../components/Message';
class MessageContainer extends Component {
    render() {
        var { MessageThis } = this.props;
        return (
            <MessageComponent>
                {MessageThis}
            </MessageComponent>
        );
    }
    
}


const mapStateToProps = state =>{
    return {
        MessageThis : state.message
    }
}
export default connect(mapStateToProps, null)(MessageContainer);

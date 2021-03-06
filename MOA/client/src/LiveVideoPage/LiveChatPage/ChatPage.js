import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { EnterOutlined } from '@ant-design/icons';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import moment from 'moment';
import { getChats, afterPostMessage } from '../../_actions/chat_actions';
import ChatCard from './Sections/ChatCard';

class ChatPage extends Component {
    
    state = {
        chatMessage: "",
    }

    componentDidMount() {
        let server = 'http://localhost:5000';
        this.props.dispatch(getChats());

        this.socket = io(server)
        this.socket.on("Output Chat Message", messageFromBackend => {
            console.log(messageFromBackend)
            this.props.dispatch(afterPostMessage(messageFromBackend));
        })
    }

    handleSearchChange = (e) => {
        this.setState({
            chatMessage: e.target.value
        })
    }

    renderCards = () => 
        this.props.chats.chats &&
            this.props.chats.chats.map((chat) => (
                <ChatCard key={chat._id} {...chat} />        
            ))
        

    submitChatMessage = (e) => {
        e.preventDefault();
        
        let chatMessage = this.state.chatMessage;
        let userId = this.props.user.userData._id;
        let userName = this.props.user.userData.name;
        let userImage = this.props.user.userData.image;
        let nowTime = moment();
        let type = "Text";

        this.socket.emit('Input Chat Message', {
            chatMessage,
            userId,
            userName,
            userImage,
            nowTime,
            type
        });

        this.setState({
            chatMessage: ""
        })
    }

    render() {
        return (
            <div>
                
                
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <div className='infinite-container'>
                        {this.props.chats && (
                            <div>{this.renderCards()}</div>
                        )}
                        {/* <div    
                            ref={el => {
                                this.messageEnd = el;
                            }}
                            style={{ float: 'left', clear: 'both' }}
                        /> */}
                    </div>

                    <Row>
                        <Form style={{ width: '100%' }} layout='inline' onSubmit={this.submitChatMessage}>
                            <Col span={18}>
                                <Input
                                    id="message"
                                    prefix={<MessageOutlined style={{ color: 'rgba(0,0,0,.25)'}} />}
                                    placeholder="Let's start talking"
                                    type="text"
                                    value={this.state.chatMessage}
                                    onChange={this.handleSearchChange}
                                />
                            </Col>
                            <Col span={2}>
    
                            </Col>
                            <Col span={4}>
                                <Button type="primary" style={{ width: '100%', background: '#48bcec' }} htmlType='submit' onClick={this.submitChatMessage}>
                                    <EnterOutlined />
                                </Button>
                            </Col>
                        </Form>
                    </Row>

                    
                
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        chats: state.chat
    }
}

export default connect(mapStateToProps)(ChatPage);

// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import userReducer from './reducers/user_reducer';
import channelListReducer from './reducers/channel_list_reducer';

const reducers = combineReducers({
  messages: messagesReducer,
  user: userReducer,
  selectedChannel: selectedChannelReducer,
  channelList: channelListReducer
});

const username = prompt("Username ?");

const initialState = {
  messages: [],
  channelList: ['good channel', 'bad channel'],
  selectedChannel: 'good channel',
  user: username || 'toto'
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

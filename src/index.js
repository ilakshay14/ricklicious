import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';
import App from './App';
import GlobalStyle from './theme/globalStyles';


ReactDOM.render(
    <>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>

    </>,
    document.getElementById('root')
);
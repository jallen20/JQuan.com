import {Provider} from "react-redux";
import store, { history } from './store/configureStore';
import {ConnectedRouter} from "connected-react-router";
import Routes from "./Routes";
import styled from "styled-components";

const AppContent = styled.div`
    width: 100vw;
    height: 100vh;
`;

export default (
    <Provider store={store as any}>
        <ConnectedRouter history={history as any}>
            <AppContent>
                <Routes/>
            </AppContent>
        </ConnectedRouter>
    </Provider>
   
  );

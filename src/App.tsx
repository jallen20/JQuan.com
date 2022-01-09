import './App.css';
import {fetchSirvToken} from "./service/ImageService";
import {Provider} from "react-redux";
import store, { history } from './store/configureStore';
import BackgroundOverlay from "./components/background-overlay/BackgroundOverlay";

export default (
    <Provider store={store as any}>
        <div className="App">
            <BackgroundOverlay/>
        </div>
    </Provider>
   
  );

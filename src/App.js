import './App.css';
import {BrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home.page";

function App() {
    return (
        <>
            <BrowserRouter>
                <HomePage/>
            </BrowserRouter>
        </>
    );
}

export default App;

import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import AddTasks from "./components";


const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AddTasks/>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
import './App.css';
import Form from "./RFCC";
import React from "react";
import Create from "./Create";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Read} from "./Read";
import Update from "./Edit";

function App() {

    return (
        <div className="App">
            {/*<Form />*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<Read/>}/>
                    <Route path="/Create" element={<Create/>}/>
                    <Route path="/Update/:id" element={<Update/>}/>
                </Routes>
            </BrowserRouter>
            {/*<Create />*/}
        </div>
    );
}

export default App;

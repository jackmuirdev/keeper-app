import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes"
import createNote from "./createNote"

function App() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                {notes.map(createNote)}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;

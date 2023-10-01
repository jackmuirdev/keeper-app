import React from "react";
import ReactDOM from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

ReactDOM.render(
    <div>
        <div>
            <Header />
        </div>
        <div>
            <Note />
        </div>
        <div>
            <Footer />
        </div>
    </div>,
    document.getElementById("root")
);
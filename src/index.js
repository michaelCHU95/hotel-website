import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { RoomProvider } from "./context.js"
import App from "./App.js"

ReactDOM.render(

    <RoomProvider>

        <Router>

            <App />

        </Router>

    </RoomProvider>,

    document.getElementById('root')
)
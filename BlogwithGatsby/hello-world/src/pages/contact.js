import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <Header headerText="Here is how to contact me"></Header>
            <p>Send us a message!</p>
        </div>
    )

}
import React from "react";
import Sider from "./sider";
import About from "../about";
import Professinol from './professional';
import Service from "../service";
import Client from './client';
import Contact from '../contact';
const Home = ()=>{
    return (
        <div>
            <Sider />
            <About />
            <Professinol />
            <Service />
            <Client />
            <Contact />
        </div>
    )
}

export default Home
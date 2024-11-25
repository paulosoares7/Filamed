import { Navigate } from "../Components/Navigate";

import '../App.css'
import { Header } from "../Components/Header";
import { Information } from "../Components/Information";
import { Services } from "../Components/Services";
import { FAQS } from "../Components/FAQS";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/Footer";
import { Map } from "../Components/Map";

export function Home (){
    return (
        <>
            <Navigate/>
            <Header/> 
            <Information/>
            <Map/>
            <Services/>
            <FAQS/>
            <Contact/>
            <Footer/>
        </>

    )
}
import './App.css'
import { Header } from "./components/header/Header";
import { BackgroundPicture } from "./components/header/BackgroundPicture";
import { DataContext } from './components/contexts/DataContext'
import { useFetch } from './components/customHook/useFetch';
import { Service } from './components/Service'
import { Footer } from './components/footer/Footer';
import { useState } from 'react';


function App() {
    const data = useFetch()

    let [itemsInCartCounter, setCounter] = useState(0)
    const getIndex=(items) =>{
        setCounter(items.length)
    }

    return (
        <DataContext.Provider value={data}>
            <Header itemsInCartCounter={itemsInCartCounter}/>
            <BackgroundPicture />
            <Service getIndex={getIndex}/>
            <Footer />
        </DataContext.Provider>
    );
}

export default App;

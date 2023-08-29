import React, {useEffect, useState} from 'react';

import './App.css';
import Counter from "./Counter";
import {CounterSettings} from "./CounterSetting";

function App() {


    const [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem("max value") || "0"))
    const [minValue, setMinValue] = useState<number>(JSON.parse(localStorage.getItem("min value") || "0"))
    const [counter, setCounter] = useState<number>(JSON.parse(localStorage.getItem("counter") || "0"))
    const [settings, setSetting] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem("counter", JSON.stringify(counter))
    }, [counter])
    useEffect(() => {
        localStorage.setItem("min value", JSON.stringify(minValue))
    }, [minValue])
    useEffect(() => {
        localStorage.setItem("max value", JSON.stringify(maxValue))
    }, [maxValue])

    const clearHandler = () => localStorage.clear()

    return (
        <div className="App">
            {settings
                ? <CounterSettings setMaxValue={setMaxValue}
                                   setMinValue={setMinValue}
                                   counter={counter}
                                   setCounter={setCounter}
                                   maxValue={maxValue}
                                   minValue={minValue}
                                   settings={settings}
                                   setSetting={setSetting}/>
                : <Counter
                    counter={counter}
                    setCounter={setCounter}
                    maxValue={maxValue}
                    minValue={minValue}
                    settings={settings}
                    setSetting={setSetting}
                />}


            <button onClick={clearHandler}>clearLocalStorage</button>
        </div>

    );
}

export default App;

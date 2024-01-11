import { useState } from "react";
import Temperature from "./Temperature";
import CheckWeather from "./CheckWeather";

function Weather() {

    const [weather, setWeather] = useState('Sunny')
    const [tempCelcius, setTempCelcius] = useState(27)

    const handleWeatherChange = (newWeather, newTemp) => {
        setWeather(newWeather)
        setTempCelcius(newTemp)
    }

    return (
        <div className="Weather componentBox">
            <h2>Today's Weather</h2>
            <div>
                <strong>{weather}</strong> with a temp of
                <Temperature temp={tempCelcius} units="C" />
            </div>
            <CheckWeather onWeatherChange={handleWeatherChange} />
        </div>
    )
}

export default Weather
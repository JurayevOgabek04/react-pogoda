import { useEffect, useState } from "react"

import bg from '../../Img/back-img.jpg'
import "./pogoda.css"

export const Pogoda = () => {
    const [data, setData] = useState({})
    const [value, setValue] = useState('buxoro')


    const hendalInputValue = (evt) => {
        if (evt.code === "Enter") {
            let valueInp = evt.target.value
            setValue(valueInp)
            evt.target.value = null

        }
    }
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=30072de0dbf6d894472a6225c53d405f`)
            .then((res) => res.json(res))
            .then((data) => setData(data))
            .catch(error => console.log("error"))


    }, [value])

    if (!data) return

    return (
        <div style={{ "backgroundImage": `url(${bg})` }} className="weter__body">
            <div className="weter__section">
                <input className="form__input" type="text" onKeyUp={hendalInputValue} placeholder="typing..." />
                <div className="weter__wrap">
                    <div className="weter">
                        <h2 className="weter__name">{data.name}</h2>
                        {/* <p className="weter__country">country</p> */}
                        <p className="weter__temper">{data.name} temp: {data.main?.temp}</p>
                        <p className="weter__temper">{data.name} humidity: {data.main?.humidity}</p>
                        <p className="weter__speed">{data.name} speed: {data.wind?.speed}</p>
                    </div>
                    {
                        data.weather && <img className="weter__img" src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Icon pagoda" />
                    }
                </div>

            </div>
        </div>
    )

}
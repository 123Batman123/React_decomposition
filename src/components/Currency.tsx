import { FC } from "react"

/*
    Компонент отовечающий за отображение отдельной валюты
*/

export type PropsCurrency = {
    currencyName: string
    rate: string
    changeRate: string
}

export const Currency: FC<PropsCurrency> = ({currencyName, rate, changeRate}) => {
    return (
        <div className="currency-card">
            <h4>{currencyName}</h4>
            <p>{rate}</p>
            <p>{changeRate}</p>
        </div>
    )
}
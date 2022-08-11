import { useState } from 'react'
import styled from '@emotion/styled'


const Label = styled.label`
    display:block;
    color: #091540;
    font-family:'Open Sans', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select= styled.select`
    width: 100%;
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px

`

const useCurrencySelector = (label, options) => {

    const [state, setState] = useState('')

    const CurrencySelector = () => {
        
     return (   
        <>
        <Label>{label}</Label>
        <Select
            value={state}
            onChange={ e => setState(e.target.value)}
        >
            <option 
            key='1'
            value=""
            >Select</option>
            {options.map(option => {
                return (
                <>
                    <option
                        key={option.id}
                        value={option.id}
                    >
                        {option.currency}
                    </option>
                </>)
            })}
        </Select>
        </>
     )
    }

    return [ state, CurrencySelector ]
}

export default useCurrencySelector
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import useCurrencySelector from '../hooks/useCurrencySelector'
import coins from '../data/coins'

const Error = styled.div`
    font-family:'Open Sans', sans-serif;
    text-align: center;
    width: 100%;
    height: 100px;
    margin-top: 20px;
    font-size: 25px;
    font-weight: 700;
    color: #CA030A;
`

const InputSubmit = styled.input`
    background-color: #4f5776;
    font-size: 20px;
    font-weight: 700;
    border:none;
    width: 100%;
    padding: 12px 10px;
    color: #f8f7f9;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 20px;

    &:hover{
        background-color: #091540;
        cursor: pointer;

    }
`

const Form = ({ setCoins }) => {

    const [crypto, setCrypto] = useState([])
    const [formError, setFormError] = useState(false)

    const [coin, SelectCoin ] = useCurrencySelector('Select your currency', coins)
    const [cryptoCoin, SelectCryptoCoin ] = useCurrencySelector('Select your crypto currency', crypto)
    

    useEffect (() => {
        const apiCall = async () => {
            console.log('toma la api')
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const response = await fetch(url)
            const result = await response.json()
            const cryptoArr = result.Data.map ( crypto => {
                
                const obj = {
                    id: crypto.CoinInfo.Name,
                    currency: crypto.CoinInfo.FullName 
                }

                return obj
            })

            setCrypto(cryptoArr)
        }
        apiCall()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if([coin, cryptoCoin].includes('')) {
            setFormError(true)    
            return 
        }

        setFormError(false)
        setCoins({coin, cryptoCoin})

    }

  return (
    <form
        onSubmit={handleSubmit}
    >

        <SelectCoin />
        <SelectCryptoCoin />
        

        <InputSubmit 
            type="submit" 
            value='Quote'
        />
        {formError && (
        <Error>
            You have to choose a coin and a crypto
        </Error>)}
    </form>
  )
}

export default Form
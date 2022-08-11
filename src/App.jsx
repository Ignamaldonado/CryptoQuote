import { useState, useEffect } from 'react'
import blockchain from './assets/blockchain.png'
import styled from '@emotion/styled'
import Form from './components/Form'
import Result from './components/Result'
import Spinner from './components/Spinner'

const Container= styled.div`
  max-width: 900px;
  margin: 0 auto;
  width:90%;
  @media (min-width: 992px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 90%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family:'Open Sans', sans-serif;
  text-align: center;
  font-weight: 700;
  color: #091540;
  margin: 80px 0 50px 0;
  font-size: 34px;

  &::after {
    content:'';
    width: 300px;
    height: 6px;
    background-color: #4f5776;
    display:block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  
  const [coins, setCoins] = useState({})
  const [result, setResult] = useState({})
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const {coin, cryptoCoin} = coins
    if(Object.keys(coins).length > 0) {
      setLoader(true)
      setResult(false)
      const quote = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`
        const response = await fetch(url)
        const result = await response.json()
        setResult(result.DISPLAY[cryptoCoin][coin])
        setLoader(false)
      }
      quote()
    }
  }, [coins])

  return (
    <>
      <Container>
      <Image 
        src={result.IMAGEURL ? `https://cryptocompare.com/${result.IMAGEURL}` : blockchain}
        alt='blockchain'
      />
      <div>
      <Heading>Quote top currency in a flash!</Heading>
      <Form setCoins={setCoins}/>
      </div>
      {loader && <Spinner />}
      {result.PRICE && <Result result={result} />}
      </Container>
    </>
  )
}

export default App

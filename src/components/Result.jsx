import styled from '@emotion/styled'

const Text = styled.p`
    display: inline-block;
    margin: 5px 15px;
    color: #091540;
    font-family:'Open Sans', sans-serif;
    font-size: 20px;
`

const Price = styled.p`
        display: inline-block;
    margin: 5px 15px;
    color: #091540;
    font-family:'Open Sans', sans-serif;
    font-size: 24px;
`

const Span = styled.span`
    display: block;
    font-weight: 700;
`

const Image = styled.img`
    
`

const Result = ({ result }) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result
    

  return (
    <>
    <Price>The prize is: <Span>{PRICE}</Span></Price>
    <Text>Last update: <Span>{LASTUPDATE}</Span></Text>
    <Text>Highest price in the day was: <Span>{HIGHDAY}</Span></Text>
    <Text>Last 24hr variation is: <Span>{CHANGEPCT24HOUR}</Span></Text>
    <Text>Lowest price in the day was: <Span>{LOWDAY}</Span></Text>
    </>
  )
}

export default Result
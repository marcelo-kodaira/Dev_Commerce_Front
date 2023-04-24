import { Link } from 'react-router-dom'
import  './styles.css'
import { ErrorContainer, ErrorFour, ErrorText, ErrorTitle, ErrorZero, LinkContainer, ScreenReader } from './styles'

const NotFound = () => {
  return (
    <>
      <ErrorTitle>404 Error</ErrorTitle>
      <ErrorText><b>Oops</b> parece que você está perdido </ErrorText>
      <ErrorContainer>
        <ErrorFour><ScreenReader>4</ScreenReader></ErrorFour>
        <ErrorZero><ScreenReader>0</ScreenReader></ErrorZero>
        <ErrorFour><ScreenReader>4</ScreenReader></ErrorFour>
      </ErrorContainer>
      <LinkContainer>
        <Link to={"/"} className="more-link">Página principal</Link>
      </LinkContainer>
    </>
  )
}

export default NotFound
import MainContent from './pages/MainContent/MainContent'
import Messages from './pages/Messages/Messages'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family:'poppins';
  } 
  * {
    box-sizing: border-box;
  }
  li{
    list-style-type:none;
  }
  #root{
    max-width:1440px;
    margin:0 auto;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContent />
      {/* <Messages /> */}
    </>
  )
}

export default App

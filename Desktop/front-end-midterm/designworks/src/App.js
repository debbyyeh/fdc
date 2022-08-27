import styled from 'styled-components'
import SideBar from './pages/SideBar/SideBar'
import MainContent from './pages/MainContent/MainContent'
import { createGlobalStyle } from 'styled-components'

// const Wrapper = styled.div`
//   max-width: 1440px;
// `
// const MainWrapper = styled.div`
//   padding: 72px 64px;
//   max-width: 1012px;
// `
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
    </>
  )
}

export default App

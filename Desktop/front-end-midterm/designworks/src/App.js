import SideBar from './pages/SideBar/SideBar'
import MainContent from './pages/MainContent/MainContent'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  li{
    list-style-type:none;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <SideBar />
      <MainContent />
    </>
  )
}

export default App

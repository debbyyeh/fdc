import styled from 'styled-components'

const SideBarBg = styled.div`
  background-color: #f44336;
  font-family: poppins;
  width: 300px;
  height: 800px;
  position: fixed;
  top: 0;
  left: 0;
`
const SideBarTitle = styled.h3`
  font-size: 24px;
  line-height: 36px;
  color: white;
  font-weight: 700;

  padding: 94px 48px;

  width: 204px;
`
const SideBarLists = styled.ul`
  color: white;
  display: flex;
  flex-direction: column;
`
const SideBarList = styled.a`
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;

  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;

  &:hover {
    opacity: 50%;
  }
`

function SideBar() {
  return (
    <SideBarBg>
      <SideBarTitle>DesignWorks</SideBarTitle>
      <SideBarLists>
        {['Home', 'Showcase', 'Services', 'Contact'].map((list, index) => {
          return <SideBarList key={index}>{list}</SideBarList>
        })}
      </SideBarLists>
    </SideBarBg>
  )
}
export default SideBar

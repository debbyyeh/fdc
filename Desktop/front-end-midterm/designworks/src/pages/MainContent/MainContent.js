import styled from 'styled-components'
import React, { useState, useEffect, useRef } from 'react'
import bedroom from './bedroom 1.png'
import diningroom from './diningroom 1.png'
import livingroomA from './livingroom 1.png'
import livingroomB from './livingroom2 1.png'
import Line from './Vector.png'
import Close from './close.png'

const Wrapper = styled.div`
  max-width: 1140px;
  padding: 72px 64px;
  position: relative;
  @media (max-width: 1280px) {
    max-width: 980px;
  }
  @media (max-width: 993px) {
    padding: 12px 16px 72px 16px;
  }
`
const ContentWrapper = styled.div`
  @media screen and (max-width: 993px) {
    padding-top: 16px;
  }
`
//sidebar
const PhoneSideBar = styled.div`
  background-color: #f44336;
  height: 68px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  ${(props) => props.hideOnDesktop && 'display: none;'}
  @media screen and (max-width: 993px) {
    display: block;
    display: flex;
    align-items: center;
    padding: 26px 32px;
  }
`
const SideBarBg = styled.div`
  background-color: #f44336;
  font-family: poppins;
  width: 300px;
  height: 800px;
  position: fixed;
  top: 0;
  left: 0;
  padding-right: 48px;
  padding-left: 48px;
  transition: all 0.3s;

  @media screen and (max-width: 992px) {
    ${(props) => props.hideOnMobile && 'display: none;'}
    height:100%;
  }
`
const SideBarBgPhone = styled(SideBarBg)`
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`
const SideBarTitle = styled.h3`
  font-size: 24px;
  line-height: 36px;
  color: white;
  font-weight: 700;

  padding-top: 94px;
  width: 204px;
  @media screen and (max-width: 993px) {
    padding-top: 31px;
  }
`
const PhoneTitle = styled(SideBarTitle)`
  padding: 0px;
  text-align: center;
  width: 204px;
  line-height: 24px;
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
const Bar = styled.div`
  background-image: url(${Line});
  width: 17px;
  height: 16px;
  cursor: pointer;
`
const CloseBtn = styled.div`
  background-image: url(${Close});
  width: 14px;
  height: 14px;
  margin-top: 27px;
  margin-left: auto;

  cursor: pointer;
  display: none;
  @media screen and (max-width: 992px) {
    display: block;
  }
`
const Divide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`
const MainTitle = styled.h1`
  font-size: 64px;
  line-height: 96px;
  font-weight: 700;
`
const SubTitle = styled.h2`
  font-size: 48px;
  line-height: 72px;
  font-weight: 500;
  color: #f44336;

  margin-bottom: 16px;
`
const MainImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 72px;
  @media screen and (max-width: 993px) {
    flex-direction: column;
  }
`

const MainImageA = styled.div`
  border: 1px solid black;
  width: 498px;
  height: 277px;
  background-image: url(${bedroom});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 16px;
  margin-right: 8px;
  @media screen and (max-width: 1281px) {
    width: 418px;
    height: 232px;
  }
  @media screen and (max-width: 993px) {
    width: 100%;
    height: 212px;
    margin-right: 0;
  }
`
const MainImageB = styled.div`
  background-image: url(${diningroom});
  border: 1px solid black;
  width: 498px;
  height: 277px;
  margin-bottom: 16px;
  margin-left: 8px;
  @media screen and (max-width: 1281px) {
    width: 418px;
    height: 232px;
  }
  @media screen and (max-width: 993px) {
    width: 100%;
    height: 212px;
    margin-left: 0;
  }
`
const MainImageC = styled.div`
  background-image: url(${livingroomA});
  border: 1px solid black;
  width: 498px;
  height: 277px;
  margin-bottom: 16px;
  margin-right: 8px;
  @media screen and (max-width: 1281px) {
    width: 418px;
    height: 232px;
    margin-right: 0;
  }
  @media screen and (max-width: 993px) {
    width: 100%;
    height: 212px;
  }
`
const MainImageD = styled.div`
  background-image: url(${livingroomB});
  border: 1px solid black;
  width: 498px;
  height: 277px;
  margin-bottom: 16px;
  margin-left: 8px;
  @media screen and (max-width: 1281px) {
    width: 418px;
    height: 232px;
  }
  @media screen and (max-width: 993px) {
    width: 100%;
    height: 212px;
    margin-left: 0;
    margin-bottom: 0;
  }
`
const Para = styled.div`
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 72px;
  width: 852px;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`
const Highlight = styled(Para)`
  margin-bottom: 12px;
`

const Label = styled.label`
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  width: 104px;
  @media (max-width: 993px) {
    width: 100%;
  }
`
const InputText = styled.input`
  width: 100%;
  border: 1px solid #cccccc;
  height: 40px;
  margin-bottom: 16px;
  @media (max-width: 1281px) {
    width: 748px;
  }
  @media (max-width: 993px) {
    width: 100%;
  }
`
const SendBtn = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  padding: 8px;

  color: white;
  line-height: 24px;
  background-color: #f44336;

  width: 852px;
  @media screen and (max-width: 993px) {
    width: 100%;
  }
`

function MainContent() {
  const [open, setOpen] = useState(true)
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  function showSide() {
    console.log(123)
    setOpen(true)
  }
  function closeSlide() {
    setOpen(false)
  }
  async function messageSend() {
    if (
      nameRef.current.value === '' ||
      emailRef.current.value === '' ||
      messageRef.current.value === ''
    ) {
      alert('資料未填完整')
    } else {
      const today = Math.round(new Date().getTime() / 1000)
      let messageInfo = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
        timestamp: today,
      }
      console.log(messageInfo)
      const res = await fetch(`http://localhost:3000/messages`, {
        body: JSON.stringify(messageInfo),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        method: 'POST',
      })
      if (res.status === 201) {
        alert('送出成功')
        nameRef.current.value = ''
        emailRef.current.value = ''
        messageRef.current.value = ''
        return await res.json()
      }
    }
  }
  return (
    <>
      <Wrapper>
        <PhoneSideBar hideOnDesktop>
          <Bar onClick={showSide}></Bar>
          <PhoneTitle>DesignWorks</PhoneTitle>
        </PhoneSideBar>

        <SideBarBg hideOnMobile>
          <SideBarTitle>DesignWorks</SideBarTitle>
          <SideBarLists>
            {['Home', 'Showcase', 'Services', 'Contact'].map((list, index) => {
              return <SideBarList key={index}>{list}</SideBarList>
            })}
          </SideBarLists>
        </SideBarBg>
        {open && (
          <SideBarBgPhone>
            <SideBarBg>
              <CloseBtn onClick={closeSlide}></CloseBtn>
              <SideBarTitle>DesignWorks</SideBarTitle>
              <SideBarLists>
                {['Home', 'Showcase', 'Services', 'Contact'].map(
                  (list, index) => {
                    return <SideBarList key={index}>{list}</SideBarList>
                  },
                )}
              </SideBarLists>
            </SideBarBg>
          </SideBarBgPhone>
        )}
        <ContentWrapper>
          <MainTitle>Interior Design</MainTitle>
          <SubTitle>Showcase.</SubTitle>
          <MainImageWrapper>
            <MainImageA></MainImageA>
            <MainImageB />
            <MainImageC />
            <MainImageD />
          </MainImageWrapper>
          <SubTitle>Services.</SubTitle>
          <Para>
            <Highlight>
              We are a interior design service that focus on what's best for
              your
            </Highlight>
            home and what's best for you! Some text about our services - what we
            do and what we offer. We are lorem ipsum consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Para>
          <SubTitle>Contact.</SubTitle>
          <Divide>
            <Label>Name</Label>
            <InputText type="text" ref={nameRef} />
          </Divide>
          <Divide>
            <Label>Email</Label>
            <InputText type="email" ref={emailRef} />
          </Divide>
          <Divide>
            <Label>Message</Label>
            <InputText type="text" ref={messageRef} />
          </Divide>
          <SendBtn onClick={messageSend}>Send Message</SendBtn>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export default MainContent

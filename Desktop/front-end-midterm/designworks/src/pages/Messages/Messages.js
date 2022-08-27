import styled from 'styled-components'
import React, { useState, useEffect, useRef, useContext } from 'react'
import ApiContext from '../../contexts/ApiContext'

const ReceiveInfo = styled.div`
  width: 500px;
  margin: 0 auto;
`
function Messages() {
  const { showMessageInfo } = useContext(ApiContext)
  console.log(showMessageInfo)
  return (
    <>
      <ReceiveInfo>
        <div>{showMessageInfo}</div>
      </ReceiveInfo>
    </>
  )
}
export default Messages

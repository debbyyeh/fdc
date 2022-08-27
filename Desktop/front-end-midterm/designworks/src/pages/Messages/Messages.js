import styled from 'styled-components'
import React, { useState, useEffect, useRef, useContext } from 'react'

const ReceiveInfo = styled.div`
  width: 500px;
  margin: 0 auto;
`
const Admin = styled.button`
  cursor: pointer;
`

const TableInfo = styled.table`
  border: 1px solid black;
`
const MessageContent = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
`
const CommentName = styled.p`
  font-size: 18px;
  margin-bottom: 6px;
`
const CommentEmail = styled(CommentName)``
const CommentMessage = styled(CommentName)``
const CommentTime = styled(CommentName)``

function Messages() {
  const [messageList, setMessageList] = useState([])
  // useEffect(() => {
  //   getMessageInfo()
  // }, [])

  async function getMessageInfo() {
    const res = await fetch(`http://localhost:3000/messages`)
    // console.log(await res.json())
    const data = await res.json()
    setMessageList(data)
    return await res.json()
  }

  console.log(messageList)
  return (
    <>
      <Admin onClick={getMessageInfo}>click me</Admin>
      <ReceiveInfo>
        {messageList &&
          messageList.map((content, key) => {
            return (
              <TableInfo key={key} id={content.id}>
                <MessageContent>
                  <CommentName>{content.name}</CommentName>
                  <CommentEmail>{content.email}</CommentEmail>
                  <CommentMessage>{content.message}</CommentMessage>
                  <CommentTime>{content.timestamp}</CommentTime>
                </MessageContent>
              </TableInfo>
            )
          })}
      </ReceiveInfo>
    </>
  )
}
export default Messages

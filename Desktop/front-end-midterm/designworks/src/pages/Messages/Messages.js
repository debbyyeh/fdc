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
  width: 100%;
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
  line-height: 18px;
  margin-bottom: 6px;
`
const CommentEmail = styled(CommentName)``
const CommentMessage = styled(CommentName)``
const CommentTime = styled(CommentName)``
const DeleteBtn = styled.button`
  border: 1px solid black;
  padding: 6px;
  width: 200px;
  margin: 0 auto;
`

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
    // return await res.json()
  }

  async function deleteTag(key) {
    alert('資料即將刪除')
    let newMessageList = messageList.filter((item, index) => index !== key)
    setMessageList([...newMessageList])
    const response = await fetch(`http://localhost:3000/messages/:${key}`, {
      body: JSON.stringify(messageList),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
    if (response.status === 200) {
      const newData = await response.json()
      setMessageList(newData)
    } else {
      alert('未成功刪除')
    }
  }

  return (
    <>
      <Admin onClick={getMessageInfo}>click me</Admin>
      <ReceiveInfo>
        {messageList &&
          messageList.map((content, index) => {
            return (
              <TableInfo key={index} id={content.id}>
                <MessageContent>
                  <CommentName>Name：{content.name}</CommentName>
                  <CommentEmail>Email：{content.email}</CommentEmail>
                  <CommentMessage>Message：{content.message}</CommentMessage>
                  <CommentTime>Time：{content.timestamp}</CommentTime>
                  <DeleteBtn onClick={() => deleteTag(index)}>
                    刪除訊息
                  </DeleteBtn>
                </MessageContent>
              </TableInfo>
            )
          })}
      </ReceiveInfo>
    </>
  )
}
export default Messages

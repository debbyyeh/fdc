const api = {
  async sendMessage(messageInfo) {
    const res = await fetch(`http://localhost:3000/messages`, {
      body: JSON.stringify(messageInfo),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'POST',
    })
    console.log(res.json())
    // return await res.json()
  },
}

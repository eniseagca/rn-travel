const url = 'https://reqres.in/api/login'

async function Request (mail, password) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: mail,
        password: password
      })
    })
    return res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default Request

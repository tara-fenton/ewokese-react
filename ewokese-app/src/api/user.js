const createUser = data => {
  return fetch(`http://localhost:3000/api/user/new`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => { return response.json() })
}

const login = data => {
  return fetch(`http://localhost:3000/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => { return response.json() })
}

export {
  createUser,
  login
};

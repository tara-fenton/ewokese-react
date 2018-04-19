const createUser = data => {
  return fetch(`/api/user/new`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => { return response.json() })
}

const login = data => {
  return fetch(`/login`, {
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

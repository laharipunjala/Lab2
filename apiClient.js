const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
  const response = await fetch(BASE_URL);
  return response.json();
}

async function fetchUserById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
}

async function createUser(user) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return response.json();
}

async function updateUser(id, user) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return response.json();
}

async function deleteUser(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
  return response.json();
}

module.exports = {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser
};

const ROOT_URL = "http://localhost:3001";

export const getTodos = () => {
  return fetch(`${ROOT_URL}/todos`).then(res => res.json());
};

export const createTodo = name => {
  return fetch(`${ROOT_URL}/todos`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name, isComplete: false })
  }).then(res => res.json());
};

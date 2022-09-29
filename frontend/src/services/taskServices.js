import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
  return axios.get(apiUrl);
}

export function addTask(task) {
  return axios.post(apiUrl + "/create", { task });
}

/* CREATE 'PUT' FUNCTIONS */
export function updateTask(task){
  return axios.put(apiUrl + "/update:id", { task })
}

export function deleteTask(task){
  return axios.put(apiUrl + "/delete:id", { task })
}

import api from "../axios/api";

export async function getAllTasks() {
    try {
        const tasks = await api.get('api/tasks')
        console.log(tasks)
        return tasks
    } catch (error) {
        console.error(error.message)
    }
}
import api from "../axios/api";
import routes from "./routes";

export async function getAllTasks({ request }) {
   
    const url = new URL(request.url)

    const status = url.searchParams.get("status")
    const priority = url.searchParams.get("priority")
    const title = url.searchParams.get("title")

    const params = new URLSearchParams()

    if (status) params.append("status", status)
    if (priority) params.append("priority", priority)
    if (title) params.append("title", title)
        
    try{
        const tasks = await api.get(routes.apiTasks + '?'+ params.toString())
        console.log(tasks)
        return tasks
    } catch (error) {
        console.error(error.message)
    }
}

export async function getDashboardData() {
    try {
        const response = await api.get(routes.apiDashboard)
        return response.data
    } catch (error) {
        console.error(error.message)
    }
}

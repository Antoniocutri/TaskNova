import { useLoaderData } from "react-router-dom";
import Header from "../components/DashboardComponents/Header";

function Homepage() {

    const data = useLoaderData()
    console.log(data)
    
    return(
        <>
            <header className="m-5">
                <Header stats={data?.data} />
            </header>
        </>
    )
}

export default Homepage;
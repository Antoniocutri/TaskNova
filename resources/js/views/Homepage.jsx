import { useLoaderData } from "react-router-dom";
import Header from "../components/DashboardComponents/Header";
import PieChart from "../components/DashboardComponents/PieChart";
import { FaChartPie } from "react-icons/fa6";

function Homepage() {

    const data = useLoaderData()
    console.log(data)
    
    return(
        <>
            <header className="m-5">
                <Header stats={data?.data} />
            </header>

            <div className="w-2/4 mx-auto my-8 text-center text-3xl">
                <h2 className=" font-semibold mb-4 flex items-center justify-center gap-2">
                    <FaChartPie className="text-primary" />
                    Distribuzione dei task
                </h2>
                <PieChart percentage={data?.data.percentages}/>
            </div>
        </>
    )
}

export default Homepage;
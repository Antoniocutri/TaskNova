import { useLoaderData } from "react-router-dom";
import Header from "../components/DashboardComponents/Header";
import PieChart from "../components/DashboardComponents/PieChart";
import { FaChartPie, FaClock } from "react-icons/fa6";
import DueSoonTasks from "../components/DashboardComponents/DueSoonTasks";

function Homepage() {

    const data = useLoaderData()
    console.log(data)
    
    return(
        <>
            <header className="m-5">
                <Header stats={data?.data} />
            </header>
           
           <div className="card bg-base-100 shadow m-5 mb-10">
                <div className="card-body">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">

                        <div className="text-center">
                            <h2 className="font-semibold mb-4 flex items-center justify-center gap-2 text-2xl">
                                <FaChartPie className="text-primary" />
                                Distribuzione dei task
                            </h2>

                            <PieChart percentage={data?.data?.percentages}/>
                        </div>

                        <div className="text-center">
                            <h2 className="font-semibold mb-4 flex items-center justify-center gap-2 text-2xl">
                                <FaClock className="text-warning" /> Task in scadenza a breve
                            </h2>

                            <DueSoonTasks tasks={data?.data?.due_soon}/>
                        </div>

                    </div> 

                </div>
           </div> 
        </>
    )
}

export default Homepage;
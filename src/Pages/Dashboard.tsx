import LineCharts from "../Components/LineCharts";
import Sidebar from "../Components/Sidebar";
import { useQuery } from "react-query";
import Map from "../Components/Map";
import CasesTable from "../Components/CasesTable";

const Dashboard = () => {
    const CASES_API_URL = process.env.REACT_APP_COVID_CASES_API_URL
    const COUNTRY_API_URL = process.env.REACT_APP_COUNTRY_BASED_CASES_API_URL
    const WORLD_API_URL = process.env.REACT_APP_WORLD_WIDE_CASES_API_URL

    // Fetching cases data from API
    const { data, error, isLoading } = useQuery("cases", async () => {
        if (CASES_API_URL) {
            const response = await fetch(CASES_API_URL);
            return response.json();
        }
    }, {
        staleTime: 60000
    });

    // Fetching country based data from API
    const { data: mapData, error: mapError, isLoading: isMapLoading } = useQuery("countryCases", async () => {
        if (COUNTRY_API_URL) {
            const response = await fetch(COUNTRY_API_URL);
            return response.json();
        }
    }, {
        staleTime: 60000
    });

    // Fetching world wide cases data from API
    const { data: allCasesData, error: allCasesError, isLoading: allCasesLoading } = useQuery("allCases", async () => {
        if (WORLD_API_URL) {
            const response = await fetch(WORLD_API_URL);
            return response.json();
        }
    }, {
        staleTime: 60000
    });

    error && console.log(error.toString())
    mapError && console.log(mapError.toString())

    return (
        <section className="bg-[#282c34] h-full min-h-[100vh] md:flex text-white ">
            <div className="md:w-3/12 ">
                <Sidebar />
            </div>
            <div className="md:w-9/12 px-10 py-10">
                {allCasesLoading ?
                    <div className="text-sky-500">Loading...</div>
                    : allCasesError ?
                        <div className="text-red-800 text-sm">Chart failed to load. Try again later.</div>
                        :
                        <CasesTable data={allCasesData} />
                }
                <h2 className="font-bold uppercase text-l my-3">Cases fluctuation over Time</h2>
                {isLoading ?
                    <div className="text-sky-500">Loading chart...</div>
                    : error ?
                        <div className="text-red-800 text-sm">Chart failed to load. Try again later.</div>
                        :
                        <LineCharts data={data} />
                }
                <h2 className="font-bold uppercase text-l my-3">Country specific overview of cases</h2>
                {isMapLoading ?
                    <div className="text-sky-500">Loading map...</div>
                    : mapError ?
                        <div className="text-red-800 text-sm">Map failed to load. Try again later.</div>
                        :
                        <Map data={mapData} />
                }
            </div>
        </section>
    );
};

export default Dashboard;

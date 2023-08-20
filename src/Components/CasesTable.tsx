const CasesTable = ({ data }: any) => {
    console.log(data)
    return (
        <div>
            <div className="table-fixed w-full mt-3 mb-6">
               
                    <ul className="flex flex-wrap w-full">
                        <li className="border border-[#666] py-1 px-3 w-1/5  max-md:w-1/2" >
                            Total cases: <p className="text-sky-500">{data?.cases}</p>
                        </li>
                        <li className="border border-[#666] py-1 px-3 w-1/5 max-md:w-1/2" >
                            Total Active cases: <p className="text-sky-500">{data?.active}</p>
                        </li>
                        <li className="border border-[#666] py-1 px-3 w-1/5 max-md:w-1/2" >
                            Deaths: <p className="text-sky-500">{data?.deaths}</p>
                        </li>
                        <li className="border border-[#666] py-1 px-3 w-1/5 max-md:w-1/2" >
                            Recovered: <p className="text-sky-500">{data?.recovered}</p>
                        </li>
                        <li className="border border-[#666] py-1 px-3 w-1/5 max-md:w-1/2" >
                            Affected countries: <p className="text-sky-500">{data?.affectedCountries}</p>
                        </li>
                    
                        <li className="border border-[#666] py-1 px-3 w-1/3  max-md:w-1/2">
                            Today cases: <p className="text-sky-500">{data?.todayCases}</p>
                        </li>
                        <li className="border border-[#666] py-1 px-3 w-1/3  max-md:w-1/2" >
                            Today deaths: <p className="text-sky-500">{data?.todayDeaths}</p>
                        </li>
                        <li className="border border-[#666] py-1 px-3 w-1/3  max-md:w-1/2">
                            Today Recovered: <p className="text-sky-500">{data?.todayRecovered}</p>
                        </li>
                    </ul>
                
            </div>
        </div>
    )
}
export default CasesTable
const CasesTable = ({ data }: any) => {
    console.log(data)
    return (
        <div>
            <table className="table-fixed w-full mt-3 mb-6">
                <tbody>
                    <tr>
                        <td className="border border-[#666] py-1 px-3" colSpan={2}>
                            Total cases: <p className="text-sky-500">{data?.cases}</p>
                        </td>
                        <td className="border border-[#666] py-1 px-3" colSpan={2}>
                            Total Active cases: <p className="text-sky-500">{data?.active}</p>
                        </td>
                        <td className="border border-[#666] py-1 px-3" colSpan={2}>
                            Deaths: <p className="text-sky-500">{data?.deaths}</p>
                        </td>
                        <td className="border border-[#666] py-1 px-3" colSpan={2}>
                            Recovered: <p className="text-sky-500">{data?.recovered}</p>
                        </td>
                        <td className="border border-[#666] py-1 px-3" colSpan={2}>
                            Affected countries: <p className="text-sky-500">{data?.affectedCountries}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-[#666] py-1 px-3 " colSpan={3}>
                            Today cases: <p className="text-sky-500">{data?.todayCases}</p>
                        </td>
                        <td className="border border-[#666] py-1 px-3"  colSpan={4}>
                            Today deaths: <p className="text-sky-500">{data?.todayDeaths}</p>
                        </td>
                        <td className="border border-[#666] py-1 px-3" colSpan={3}>
                            Today Recovered: <p className="text-sky-500">{data?.todayRecovered}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CasesTable
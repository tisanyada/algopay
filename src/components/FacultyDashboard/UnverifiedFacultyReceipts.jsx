import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import MetaLoader from "components/Loader/MetaLoader"
import { getUnverifiedFacultyReceipts } from "state/actions/facultyActions"


const UnverifiedFacultyReceipts = () => {
    const dispatch = useDispatch()

    const receiptsState = useSelector(state => state.unverifiedFacultyReceipts)
    const { loading, unverifiedfacultyreceipts } = receiptsState

    useEffect(() => {
        dispatch(getUnverifiedFacultyReceipts())
    }, [dispatch])

    return (
        <>
            <div className="table-responsive">
                {loading && <MetaLoader />}
                <table className="table table-centered table-nowrap mb-0 rounded">
                    <thead className="thead-light">
                        <tr>
                            <th className="border-0">Transaction Id</th>
                            <th className="border-0">Matriculation Number</th>
                            <th className="border-0">Faculty</th>
                            <th className="border-0">Payment Type</th>
                            <th className="border-0">Amount</th>
                            <th className="border-0">Verified</th>
                        </tr>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {unverifiedfacultyreceipts && unverifiedfacultyreceipts.length > 0 && unverifiedfacultyreceipts.map(receipt => (
                            <tr key={receipt._id}>
                                <td className="border-0 fw-bold">
                                    {receipt.paymentId.slice(0, 12)}....
                                </td>
                                <td className="border-0 fw-bold">
                                    {receipt.matriculationNumber.toUpperCase()}
                                </td>
                                <td className="border-0 fw-bold">{receipt.paymentFaculty}</td>
                                <td className="border-0 fw-bold">
                                    {receipt.paymentType}
                                </td>
                                <td className="border-0">
                                    {receipt.amount / 1000000} Algo | &#8358;45,000
                                </td>
                                <td className="border-0 fw-bold text-success">
                                    <Link
                                        to={`/faculty/receipts/fr-verify/${receipt._id}`}
                                        // target={"_blank"}
                                        className="btn btn-danger btn-sm text-white"
                                    >
                                        verify
                                    </Link>
                                </td>

                            </tr>
                        ))}
                        {/* : (
                            <tr className="border-2 fw-bold mt-4">
                                <td className="text-info">unverified receipts will go here</td>
                            </tr>
                        )} */}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UnverifiedFacultyReceipts

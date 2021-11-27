import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getVerifiedSchoolReceipts } from "state/actions/facultyActions"
import Loader from "components/Loader/Loader"



const VerifiedSchoolReceipts = () => {
    const dispatch = useDispatch()

    const receiptsState = useSelector(state => state.verifiedSchoolReceipts)
    const { loading, verifiedschoolreceipts } = receiptsState

    useEffect(() => {
        dispatch(getVerifiedSchoolReceipts())
    }, [dispatch])


    return (
        <>
            <div className="table-responsive">
                {loading && <Loader />}
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
                    </thead>
                    <tbody>
                        {verifiedschoolreceipts && verifiedschoolreceipts.length > 0 && verifiedschoolreceipts.map(receipt => (
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
                                <td className="border-0 fw-bold bg-success text-white text-center">
                                    {receipt.verified ? 'true' : null}
                                </td>
                            </tr>
                        ))}
                        {/* : (
                        <tr className="border-2 fw-bold mt-4">
                            <td className="text-success">verified receipts will go here</td>
                        </tr>
                        )} */}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default VerifiedSchoolReceipts

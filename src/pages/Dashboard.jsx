/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import TopNavbar from "components/Dashboard/TopNavbar"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logoutStudent } from "state/actions/studentActions"
import NavbarToggler from "components/Dashboard/NavbarToggler"
import RowoneContent from "components/Dashboard/RowoneContent"
import RowtwoContent from "components/Dashboard/RowtwoContent"
import SidebarNav from "components/Dashboard/SidebarNav"
import Createprofile from "components/Dashboard/Createprofile/Createprofile"



const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const authState = useSelector(state => state.auth)
    const { student } = authState
    const profileState = useSelector(state => state.profile)
    const { studentprofile } = profileState

    useEffect(() => {
        if (!student) navigate('/signin', { replace: true })
    }, [student, navigate])

   
    return (
        <>
            <header>
                <NavbarToggler />
                <SidebarNav />
            </header>
            <main className="content">
                <TopNavbar />

                {studentprofile ? (
                    <>
                        <RowoneContent
                            studentprofile={studentprofile}
                        />
                        <RowtwoContent
                            studentprofile={studentprofile}
                        />
                    </>
                ) : (
                    <Createprofile />
                )}
            </main>
        </>
    )
}

export default Dashboard

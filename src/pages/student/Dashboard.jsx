import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import TopNavbar from "components/StudentDashboard/TopNavbar"
import NavbarToggler from "components/StudentDashboard/NavbarToggler"
import RowoneContent from "components/StudentDashboard/RowoneContent"
import RowtwoContent from "components/StudentDashboard/RowtwoContent"
import SidebarNav from "components/StudentDashboard/SidebarNav"
import { getProfile } from "state/actions/studentActions"



const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const authState = useSelector(state => state.auth)
    const { student } = authState
    const profileState = useSelector(state => state.profile)
    const { studentprofile } = profileState


    useEffect(() => {
        if (!student) navigate('/signin', { replace: true })
        return () => {
            dispatch(getProfile())
        }
    }, [student, navigate, dispatch])

    useEffect(() => {
        if (!studentprofile) navigate('/dashboard/createprofile', { replace: true })
    }, [studentprofile, navigate])


    return (
        <>
            <header>
                <NavbarToggler />
                <SidebarNav />
            </header>
            <main className="content">
                <TopNavbar />
                
                {studentprofile && (
                    <>
                        <RowoneContent
                            studentprofile={studentprofile}
                        />
                        <RowtwoContent
                            studentprofile={studentprofile}
                        />
                    </>
                )}
            </main>
        </>
    )
}

export default Dashboard

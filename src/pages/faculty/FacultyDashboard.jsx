import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import NavbarToggler from "components/FacultyDashboard/NavbarToggler"
import TopNavbar from "components/FacultyDashboard/TopNavbar"
import SidebarNav from "components/FacultyDashboard/SidebarNav"
import RowoneContent from "components/FacultyDashboard/RowoneContent"
import RowtwoContent from "components/FacultyDashboard/RowtwoContent"
import MetaLoader from "components/Loader/MetaLoader"



const FacultyDashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const authState = useSelector(state => state.facultyAuth)
    const { loading, faculty } = authState

    useEffect(() => {
        if (faculty) return navigate('/faculty/dashboard', { replace: true })
        if (!faculty) return navigate('/faculty/signin', { replace: true })
    }, [faculty, navigate, dispatch])


    return (
        <>
            <header>
                <NavbarToggler />
                <SidebarNav />
            </header>
            <main className="content">
                <TopNavbar />
                {loading ? <MetaLoader /> : faculty && (
                    <>
                        <RowoneContent
                            facultyprofile={faculty}
                        />
                        <RowtwoContent
                            facultyprofile={faculty}
                        />
                    </>
                )}
            </main>
        </>
    )
}

export default FacultyDashboard

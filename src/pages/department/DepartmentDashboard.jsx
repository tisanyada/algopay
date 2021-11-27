import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import NavbarToggler from "components/DepartmentDashboard/NavbarToggler"
import TopNavbar from "components/DepartmentDashboard/TopNavbar"
import SidebarNav from "components/DepartmentDashboard/SidebarNav"
import RowoneContent from "components/DepartmentDashboard/RowoneContent"
import RowtwoContent from "components/DepartmentDashboard/RowtwoContent"
import MetaLoader from "components/Loader/MetaLoader"



const DepartmentDashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const authState = useSelector(state => state.departmentAuth)
    const { loading, department } = authState

    useEffect(() => {
        if (department) return navigate('/department/dashboard', { replace: true })
        if (!department) return navigate('/department/signin', { replace: true })
    }, [department, navigate, dispatch])


    return (
        <>
            <header>
                <NavbarToggler />
                <SidebarNav />
            </header>
            <main className="content">
                <TopNavbar />
                {loading ? <MetaLoader /> : department && (
                    <>
                        <RowoneContent
                            departmentprofile={department}
                        />
                        <RowtwoContent
                            departmentprofile={department}
                        />
                    </>
                )}
            </main>
        </>
    )
}

export default DepartmentDashboard

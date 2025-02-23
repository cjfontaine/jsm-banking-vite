import { Outlet } from "react-router"

const RootLayout = () => {
    return (
        <main>
            SIDEBAR
            <Outlet/>
        </main>
    )
}

export default RootLayout;
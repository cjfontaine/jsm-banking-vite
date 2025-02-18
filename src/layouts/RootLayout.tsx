import { Outlet } from "react-router"

const RootLayout = () => {
    return (
        <main>
            ROOT_LAYOUT
            SIDEBAR
            <Outlet/>
        </main>
    )
}

export default RootLayout;
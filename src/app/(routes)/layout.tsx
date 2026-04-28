import Footer from "@/layouts/Footer"
import Header from "@/layouts/Header"
import React from "react"

interface RoutesLayoutProps {
    children: React.ReactNode
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default RoutesLayout
import React, { useState, useEffect } from 'react'

function NavBar() {
    // function Clock() {
    //     setInterval(() => {
    //         const date = new Date();
    //         setClock(date.toLocaleTimeString())
    //     }, 1000)
    // }

    // useEffect(() => {
    //     Clock()
    // }, [])

    return (
        <>
            <div className="NavBar">
                <div className="LeftSideNavBar">
                    <div className='Title'>
                        <h1 className='DashBoardTitle'>REIP</h1>
                        <p className='DashBoardTitleSmall'>Realestate Dashboard</p>
                    </div>
                    <div className="CenterNavBar">
                        <a href="">Home</a>
                        <a href="">Dash</a>
                        <a href="">News</a>
                    </div>
                    <div className="RightSideNavBar">
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
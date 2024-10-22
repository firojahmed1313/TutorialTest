import AddUser from '@/components/userComp/AddUser'
import DisplayUser from '@/components/userComp/DisplayUser'
import React from 'react'

const page = () => {
    return (
        <>

            <div className="container m-10">
                <AddUser />
                <DisplayUser />
            </div>

        </>
    )
}

export default page
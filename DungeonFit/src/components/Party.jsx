import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import axios from 'axios'
import Header from './Header'
import { DateRangePicker } from "react-date-range"
// import UserList from './UserList'

export default function Party() {
   const [userData, setUserData] = useState([])

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }

//    useEffect(() => {
//     async function getData() {
//         try {
//             const response = await axios.get('/api/getUserData')
//         }
//     }
//    })


    const handleSelect = (ranges) => {
        console.log(ranges)
    }

    return (
        <div className="Party">
            {/* map function to show everyone added to your group? */}
            <div className="members">
                <h4>Members:</h4>
                {/* {error ? (
                    <p>Error: {error}</p>
                ) : (
                    <UserList users={users} />
                )} */}

                <button className="add-members"><Link to="/invite">Invite</Link></button>

            </div>
            <h3>Setup Party Challenge</h3>
            <form className="challenge">
                {/* <label 
                htmlFor="challenge-name">Pick a Name for Challenge:</label>
                <input 
                type="text" 
                id="challenge"
                className="challenge-name" 
                placeholder="Name of challenge..."
                value={''}
                onChange={handleChange}
                />

                <label 
                htmlFor="challenge-description">Challenge Description</label>
                <input 
                type="text" 
                id="description"
                className="challenge-description"
                placeholder="description" 
                value={''} 
                onChange={handleChange}
                /> */}

                <label htmlFor="challenge-duration">Select a Duration:</label>
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                />
            </form>
        </div>
    )
}

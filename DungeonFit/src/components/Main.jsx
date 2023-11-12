import { Route, Routes } from 'react-router-dom'

import Home from "./Home"
import Achievements from "./Achievements"
import Character from "./Character"
import Login from "./Login"
import CreateAccount from "./CreateAccount"
import Party from "./Party"
import Activities from './Activities'
import Checkin from './Checkin'
import Invite from './Invite'
import ActivityDetails from '../details/ActivityDetails'

const Main = (props) => {
    
    return (
        <div className="routes-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/achievements" element={<Achievements achievements={props.achievements}/>} />
                <Route path="/character" element={<Character character={props.character}/>} />
                <Route path="/login" element={<Login login={props.login}/>} />
                <Route path="/createaccount" element={<CreateAccount createAccount={props.createAccount}/>} />
                <Route path="/party" element={<Party party={props.party}/>} />
                <Route path="/activities" element={<Activities activities={props.activities}/>} />
                <Route path="/activities/:id" element={<ActivityDetails />} />
                <Route path="/checkin" element={<Checkin checkin={props.checkin}/>} />
                <Route path="/invite" element={<Invite invite={props.invite}/>} />
            </Routes>
        </div>

    )
}

export default Main
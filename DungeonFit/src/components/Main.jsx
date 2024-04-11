import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Achievements from "./characterPage/Achievements";
import Character from "./characterPage/Character";
import Login from "./loginSignup/Login";
import CreateAccount from "./loginSignup/CreateAccount";
import Party from "./groupPage/Party";
import Activities from "./activityPage/Activities";
import Checkin from "./checkinPage/Checkin";
import Invite from "./groupPage/Invite";
import ActivityDetails from "../details/ActivityDetails";

const Main = (props) => {
  return (
    <div className='routes-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/achievements'
          element={<Achievements achievements={props.achievements} />}
        />
        <Route
          path='/character'
          element={<Character character={props.character} />}
        />
        <Route path='/login' element={<Login login={props.login} />} />
        <Route
          path='/createaccount'
          element={<CreateAccount createAccount={props.createAccount} />}
        />
        <Route path='/party' element={<Party party={props.party} />} />
        <Route
          path='/activities'
          element={<Activities activities={props.activities} />}
        />
        <Route
          path='/activities/:id'
          element={<ActivityDetails activities={props.activities} />}
        />
        <Route path='/checkin' element={<Checkin checkin={props.checkin} />} />
        <Route path='/invite' element={<Invite invite={props.invite} />} />
      </Routes>
    </div>
  );
};

export default Main;

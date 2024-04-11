import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";
import NavMobile from "./mobileComponents/NavMobile";

export default function Footer() {
  return (
    <div className='Footer'>
      <NavMobile />
    </div>
  );
}

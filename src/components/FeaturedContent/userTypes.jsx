import React from "react";
import { MdSchool, MdFlight, MdHome,} from 'react-icons/md';
export const userTypes = [
    { icon: <MdSchool className="text-3xl" />, title: 'Student', path: '/student' },
    { icon: <MdFlight className="text-3xl" />, title: 'Traveller', path: '/traveller' },
    { icon: <MdHome className="text-3xl" />, title: 'New Resident', path: '/new-resident' },
  ];
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
      title: 'Home',
      path: '/home',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Announcement',
        path: '/comment',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Feed',
        path: '/feed',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    }
];
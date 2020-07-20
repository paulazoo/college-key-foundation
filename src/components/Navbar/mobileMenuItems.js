import React from 'react';
// Icons
import FeedbackIcon from '@material-ui/icons/Feedback';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SubjectIcon from '@material-ui/icons/Subject';

import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';

import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import TocIcon from '@material-ui/icons/Toc';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import ReceiptIcon from '@material-ui/icons/Receipt';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import ListAltIcon from '@material-ui/icons/ListAlt';

export const loggedOutMenuItems = [
  {
    text: 'Home',
    link: '/',
    icon: <FeedbackIcon />,
  },
  {
    text: 'About Us',
    link: '/about-us',
    icon: <ListAltIcon />,
  },
  {
    text: 'Fellowship Program',
    link: '/fellowship-program',
    icon: <ViewQuiltIcon />,
  },
  {
    text: 'Events',
    link: '/events',
    icon: <ViewQuiltIcon />,
  },
  {
    text: 'Apply',
    link: '/apply',
    icon: <VerticalSplitIcon />,
  },
];

export const loggedInMenuItems = [
  {
    text: 'Dashboard',
    link: '/dashboard',
    icon: <FeedbackIcon />,
  },
  {
    text: 'Profile',
    link: '/profile',
    icon: <ListAltIcon />,
  },
];

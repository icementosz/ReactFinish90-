import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Roots of Equations',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Bisection',
                path: '/rootsofequation/bisection',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'False-Position',
                path: '/rootsofequation/falseposition',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'One-Point Iteration',
                path: 'rootsofequation/onepoint',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Linear Algebra',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Cramer\'s Rule',
                path: '/linearalgebra/cramerrule',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Test Cramer\'s Rule',
                path: '/linearalgebra/testcramerrule',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Products',
        path: '/products',
        icons: <FaIcons.FaCartPlus />
    }
];

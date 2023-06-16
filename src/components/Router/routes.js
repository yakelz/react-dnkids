import ParentTasks from "../Screens/Parent/Tasks/ParentTasks";
import ParentBank from "../Screens/Parent/Bank/ParentBank";
import Course from "../Screens/Course/Course";
import ParentProfile from "../Screens/Parent/Profile/ParentProfile";
import ChildTasks from "../Screens/Child/Tasks/ChildTasks";
import ChildBank from "../Screens/Child/Bank/ChildBank";
import ChildProfile from "../Screens/Child/Profile/ChildProfile";
import LoginPage from "../Screens/Login/LoginPage/LoginPage";
import SignUpPage from "../Screens/SignUp/SignUpPage/SignUpPage";

import React from "react";
import EditProfile from "../Screens/Parent/Profile/EditProfile/EditProfile";
import Subscription from "../Screens/Parent/Profile/Subscription/Subscription";
import Topic from "../Screens/Course/Topic/Topic";

export const publicRoutes = [
    {path: '/login', element: <LoginPage/>},
    {path: '/signup', element: <SignUpPage/>},
]

export const courseRoutes = [
    { path: "/course", element: <Course />, title: 'Курс' },
    { path: "/course/:topicId/", element: <Topic />},
    { path: "/course/:topicId/:lessonId", element: <Topic />}
];

export const parentRoutes = [
    { path: "bank", element: <ParentBank />, title: 'Управление Банком' },
    { path: "tasks", element: <ParentTasks />, title: 'Задания' },
    { path: "profile", element: <ParentProfile />, title: 'Профиль' },
    { path: "profile/add", element: <SignUpPage />, title: 'Добавление профиля' },
    { path: "profile/edit", element: <EditProfile isParentProfile={true}/>, title: 'Редактировать профиль' },
    { path: "profile/edit/child/:id", element: <EditProfile isParentProfile={false}/>, title: 'Редактировать профиль' },
    { path: "profile/subscription", element: <Subscription />, title: 'Управление подпиской' },
];

export const childRoutes = [
    { path: "bank", element: <ChildBank />, title: 'Управление Банком' },
    { path: "tasks", element: <ChildTasks />, title: 'Задания'},
    { path: "profile", element: <ChildProfile />, title: 'Профиль'},
];
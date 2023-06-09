import { useSelector, useDispatch } from "react-redux";
import ContainerUsers from "../../../Components/ContainerUsers/ContainerUsers";
import { useEffect, useState } from "react";
import { getUsers } from "../../../Redux/Slicers/AdminDashboard";


export default function ActiveUsersInfo() {
    const dispatch = useDispatch();
    let activeUsers = useSelector((state) => state.dashBoardAdmin.GoodUsers);


    useEffect(() => {
        dispatch(getUsers());
        return () =>{
            activeUsers = []
        }
    }, [dispatch]);

    return (

        <ContainerUsers data={activeUsers} ></ContainerUsers>

    )
}

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {useNavigate} from "react-router"; // Update the path as needed

const withoutAuth = (WrappedComponent: React.ComponentType) => {
    const GuestOnlyComponent = (props: any) => {
        const user = useSelector((state: RootState) => state.auth.user);
        const navigate = useNavigate();

        useEffect(() => {
            if (user) {
                navigate("/");
            }
        }, [user, navigate]);

        if (user) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    return GuestOnlyComponent;
};

export default withoutAuth;
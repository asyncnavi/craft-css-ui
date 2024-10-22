import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {useNavigate} from "react-router"; // Update the path as needed

const withAuth = (WrappedComponent: React.ComponentType) => {
    const AuthenticatedComponent = (props: any) => {
        const user = useSelector((state: RootState) => state.auth.user);
        const navigate = useNavigate();

        useEffect(() => {
            if (!user) {
                navigate("/login");
            }
        }, [user, navigate]);

        if (!user) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuth;
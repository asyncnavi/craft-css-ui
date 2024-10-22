import {Fragment, useEffect} from "react";
import {RouterProvider, useNavigate} from "react-router";
import router from "./route";
import {useAppDispatch} from "./store";
import {auth} from "./firebase";
import {clearState, setUser} from "./slice/auth.ts";
import {UserInfo} from "firebase/auth";


function App() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: UserInfo | null) => {
            if (user) {
                dispatch(setUser(user));
            } else {
                dispatch(clearState());
            }

        });

        return () => unsubscribe();
    }, [dispatch]);

    return (
        <Fragment>
            <RouterProvider router={router}/>
        </Fragment>
    );
}

export default App;

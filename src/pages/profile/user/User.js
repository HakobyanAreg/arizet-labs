import './User.scss'
import Cookies from "js-cookie";

export const User = ({setToken}) => {

    const logOut = () => {
        Cookies.remove('access-token')
        setToken(null)
    }

    return (
        <div className="user text-center">
            <div className="log-out">
                <button onClick={logOut}>
                    Log Out
                </button>
            </div>
            <h1>Coming soon!!!</h1>
        </div>
    )
}

import './Login.scss'
import pic from '../../../assets/images/pic.png'
import couplePic from '../../../assets/images/couple.png'
import smallHeart from  '../../../assets/images/heart.svg'
import bigHeart from  '../../../assets/images/heartBig.svg'
import {useCallback, useState} from "react";
import loginApi from "../../../api/auth";
import Cookies from "js-cookie";

export const Login = ({setToken}) => {
    const form = {
        username: null,
        password: null
    }
    const formError = {
        username: null,
        password: null
    }

    const [formState, setFormState] = useState(form);
    const [error, setError] = useState(formError);

    const handleUsernameChange = useCallback((e) => {
        setFormState({...formState, username: e.target.value})
        setError({...error, username: null})
    }, [formState, error])

    const handlePasswordChange = useCallback((e) => {
        setFormState({...formState, password: e.target.value})
        setError({...error, password: null})
    }, [formState, error])

    const login = useCallback((e) => {
        e.preventDefault()

        if (!formState.username) {
            return setError({...error, username: 'Username is required'})
        }
        if (!formState.password) {
            return setError({...error, password: 'Password is required'})
        }

        loginApi(formState).then(res => {
            const token = res.data.Data.access_token
            Cookies.set("access-token", token);
            setToken(token)
        }).catch(e => {
            if (e.response.data.Error.code === 117) {
                return setError({...error, username: e.response.data.Error.message})
            } else {
                return setError({...error, password: e.response.data.Error.message})
            }
        })
    },[formState, error, setToken])



    return (
        <div className="login">
            <div className="form-wrapper w-50 h-100">
                <div className="form">
                    <h2 className="form-title">
                        GET LOVELY CUTIES IN YOUR AREA!
                    </h2>
                    <form onSubmit={login}>
                        <div className="username-wrapper w-100">
                            <label htmlFor="username">
                                UserName:
                            </label>
                            <input id="username" type="text" name="username" placeholder="Username" className={`${error.username && 'input-error'}`} required
                                   onChange={handleUsernameChange}/>
                        </div>
                        {error.username &&
                            <div className="error">
                                <span>
                                    {error.username}
                                </span>
                            </div>
                        }
                        <div className="password-wrapper w-100">
                            <label htmlFor="password">
                                Password:
                            </label>
                            <input id="password" type="password" name="password" placeholder="Password" className={`${error.password && 'input-error'}`} required
                                   onChange={handlePasswordChange}/>
                        </div>
                        {error.password &&
                        <div className="error">
                                <span>
                                    {error.password}
                                </span>
                        </div>
                        }
                        <div className="login-btn-wrapper w-100">
                            <button className="login-btn" onClick={login}>
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="login-image-wrapper w-50">
                <img src={pic} alt="Login" className="login-img w-100 h-100"/>
            </div>
            <div className="hearts-wrapper w-100">
                <img src={smallHeart} alt="Heart" className="login-img"/>
                <img src={bigHeart} alt="Heart" className="login-img"/>
            </div>
            <div className="login-image-couple-wrapper w-100">
                <img src={couplePic} alt="Login" className="login-img w-100 h-100"/>
            </div>
        </div>
    )
}

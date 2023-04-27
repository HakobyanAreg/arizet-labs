import Cookies from "js-cookie";
import {Header} from "./components/layout/header/Header";
import {Login} from "./pages/auth";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {User} from "./pages/profile";
import {Footer} from "./components/layout/footer/Footer";
import {useState} from "react";

function App() {

    const [token, setToken] = useState(Cookies.get('access-token'));

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    {!token ?
                        <>
                            <Route path="/login" element={<Login setToken={setToken}/>}/>
                            <Route path="*" element={<Navigate to="/login" replace/>}/>
                        </>
                        :
                        <>
                            <Route path="/user" element={<User setToken={setToken} />}/>
                            <Route path="*" element={<Navigate to="/user" replace/>}/>
                        </>
                    }
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

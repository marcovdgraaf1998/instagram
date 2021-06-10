import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = emailAddress === '' || password === '';

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
            history.push(ROUTES.DASHBOARD)
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };

    useEffect(() => {
        document.title = 'Login - Instagram'
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img className="max-w-full" src="/images/iphone-with-profile.jpg" alt="Iphone with Instagram"/>
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
                    <h1 className="flex justify-center w-full">
                        <img className="mt-2 w-6/12 mb-4" src="/images/logo.png" alt="Instagram"/>
                    </h1>
                    
                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
                
                    <form onSubmit={handleLogin} method="POST">
                        <input 
                            className="text-sm text-gray-500 w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" 
                            aria-label="Enter your email address" 
                            type="text" 
                            placeholder="Email address"
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <input 
                            className="text-sm text-gray-500 w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" 
                            aria-label="Enter your email password" 
                            type="password" 
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <button disabled={isInvalid} type="submit" className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && 'opacity-50'}`}> 
                        Log in 
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary rounded">
                    <p className="text-sm">Don't have a account? {``} <Link className="font-bold text-blue-medium" to={ROUTES.SIGN_UP}>Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;

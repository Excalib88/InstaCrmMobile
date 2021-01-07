import {useEffect, useState} from 'react';
import CreateTokenProvider from './CreateTokenProvider';

export const CreateAuthProvider = () => {

    const tokenProvider = CreateTokenProvider();

    const login: typeof tokenProvider.setToken = (newTokens) => {
        tokenProvider.setToken(newTokens);
    };
    
    const logout = () => {
        tokenProvider.setToken(null);
    };

    const authFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
        const token = await tokenProvider.getToken();
    
        init = init || {};

        init.headers = {
            ...init.headers,
            Authorization: `Bearer ${token}`,
        };
    
        return fetch(input, init);
    };

    const useAuth = () => {
        const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());
    
        useEffect(() => {
            const listener = (newIsLogged: boolean) => {
                setIsLogged(newIsLogged);
            };
    
            tokenProvider.subscribe(listener);
            return () => {
                tokenProvider.unsubscribe(listener);
            };
        }, []);
    
        return [isLogged] as [typeof isLogged];
    };

    return {
        useAuth,
        authFetch,
        login,
        logout
    }
};
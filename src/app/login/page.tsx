import React from 'react'
import { FC } from 'react';
import { StyleSheet } from '../../types';


interface LoginProps {
    props: any
}

const Login: FC<LoginProps> = (props) => {
    return(
        <>
            <span style={styles.textStyling} className="p-5 text-blue-500">Hey, this is my new NextJS routed page!</span>
        </>
    )
};

export default Login;

const styles: StyleSheet = {
    textStyling: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: '0.5rem'
    }
}
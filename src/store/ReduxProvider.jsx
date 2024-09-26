"use client"; // This line is crucial for Next.js app router

import { Provider } from 'react-redux';
import store from '../store/store'; // Adjust the path according to your file structure

const ReduxProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
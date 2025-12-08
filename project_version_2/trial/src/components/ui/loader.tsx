import { Helix } from 'ldrs/react';
import React from "react";
import 'ldrs/react/Helix.css';




type LoaderProps = {
    isLoading: boolean;
};


const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
    if (!isLoading) return null;
    return (
        <div className="loader-container">
            <Helix
                size="45"
                speed="2.5"
                color="black"
            />
        </div>
    );
};


export default Loader;
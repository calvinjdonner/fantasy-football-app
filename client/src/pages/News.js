import React, { useState } from "react";
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className="news">
            <Link to ="/news">Go to current news</Link>
        </div>
    );
};

export default News;
import React from 'react';
import { Outlet } from 'react-router-dom';

function Guest() {
    return (
        <div>
            Guest
            <Outlet />
        </div>
    );
}

export default Guest;

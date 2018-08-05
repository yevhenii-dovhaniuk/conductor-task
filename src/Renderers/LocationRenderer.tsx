import React from 'react';

export const renderLocation = (location: string) => {
    return <div>From {location ? location : 'Nowhere'}</div>
};
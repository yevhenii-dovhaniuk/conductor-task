import React from 'react';

export const renderHireable = (hireableData: string | boolean) => {
    if (!hireableData) {
        return null;
    }
    const hireable = JSON.parse('' + hireableData);
    if (hireable) {
        return <div className="hireable">Hireable</div>;
    }
    return <div className="not-hireable">Not hireable</div>;
};

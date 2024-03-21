// 'use client'

import Header from "../modules/Header/Header";
// 


const layout = (children) => {
    console.log('123')
    return (
        <>
            <img src="http://127.0.0.1:5000/img" width={200} />
            <Header>{children}</Header>
        </>
    );
};

export default layout;

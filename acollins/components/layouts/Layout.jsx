import Header from '../modules/Header/Header';

const layout = (children) => {
    return (
        <>
            <Header>
                {children}
            </Header>
        </>
    );
};

export default layout;
export const Button = ({ children, moreClass, type }) => {
    return (
        <button className={moreClass} type={type}>
            {children}
        </button>
    );
};

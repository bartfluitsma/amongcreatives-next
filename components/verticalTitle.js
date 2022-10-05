const VerticalTitle = ({ children }) => {
    return (
        <>
            <h1 className="[writing-mode:vertical-lr] [-webkit-writing-mode: vertical-lr] [-ms-writing-mode: vertical-lr] rotate-180 text-center">
                {children}
            </h1>
        </>
    );
}

export default VerticalTitle;
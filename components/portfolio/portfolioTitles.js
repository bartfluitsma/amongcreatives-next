const PortfolioTitles = ( {category} ) => {
    return ( 
        <>
            {category && category.data.map((category, idx) => {
                    return (
                        <div key={idx}>{category.attributes.Category}</div>
                    )
                })}
        </>
     );
}
 
export default PortfolioTitles;
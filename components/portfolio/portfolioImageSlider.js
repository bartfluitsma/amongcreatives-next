const PortfolioImageSlider = ({ portfolioImages }) => {
    console.log('CATEGORYIMAGE', portfolioImages)
    return (
        <>
            <div>
                {portfolioImages && portfolioImages.data.map((image, idx) =>
                    image.attributes.DesktopImage.data.map((portfolioImage) => {
                        return (
                                <img key={idx} src={`${process.env.NEXT_PUBLIC_STRAPI_URL_BASE}${portfolioImage.attributes.url}`} alt={portfolioImage.attributes.alternativeText} />
                        )
                    })
                )}
            </div>
        </>
    );
}

export default PortfolioImageSlider
const PortfolioImagesGridCard = ({ classCard, data }) => {
  return (
    <>
      <img
        className={classCard}
        src={`${data.attributes.url}`}
        alt={data.attributes.alternativeText}
        width="100%"
        height="100%"
      />
    </>
  );
};

export default PortfolioImagesGridCard;

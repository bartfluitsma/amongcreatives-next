const BaseInfoPackages = () => {
  return (
    <>
      <div className="max-w-2xl md:m-auto mt-10 mx-4 md:mt-20">
        <h2 className="text-3xl">All packages include:</h2>
        <ul className="list-disc pl-4 text-base">
          <li>Moodboard</li>
          <li>High-quality resolution images</li>
          <li>
            Photos styled with backgrounds and props to suit your brand
            aesthetic*
          </li>
          <li>
            Pre- and post-production services include discovery call (optional),
            retouching/editing, mood board/shoot plan overview, retouching and
            editing
          </li>
          <li>
            Digital delivery via a link emailed to you at the conclusion of the
            shoot
          </li>
        </ul>
        <p className="text-sm">
          *If you require very specific props for your images eg. flowers,
          fruits or vegetables, particular backdrops etc. an additional prop fee
          will be added to your final invoice. This price will be determined
          when booking prior to the photoshoot.
        </p>
      </div>
    </>
  );
};

export default BaseInfoPackages;

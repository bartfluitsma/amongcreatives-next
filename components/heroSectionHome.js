import PrimaryButton from '../components/primaryButton'

const HeroSectionHome = () => {
    return (
        <>
            <div className="bg-blend-overlay bg-[#00000030] md:bg-[#00000015] bg-[url('/homepage/Women-reading-a-book-against-a-white-wall-portrait.jpg')] md:bg-[url('/homepage/Women-reading-a-book-against-a-white-wall.jpg')] min-h-[86vh] w-full bg-cover bg-center bg-no-repeat pt-[40vh] text-center grid place-items-center md:pr-[50vw] md:pt-0">
                <div className='max-w-xs m-auto md:max-w-lg md:top-[25vh] md:bottom-auto md:left-[10vw]'>
                    <h1 className="text-white">Fashion &amp; Product photography</h1>
                    <p className="text-white text-Forum pb-2">Sustainable &amp; ethical Brands</p>
                    <PrimaryButton link="/book">
                        Book a shoot
                    </PrimaryButton>
                </div>
            </div>

        </>
    );
}

export default HeroSectionHome;
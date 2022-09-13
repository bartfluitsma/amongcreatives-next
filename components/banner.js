const Banner = ({children}) => {
    return ( 
        <>
        <div className="bg-[url('/dried-flower-background.png')] bg-cover bg-center">
            <p className="text-[1.8em] lg:text-[2.2em] leading-8 lg:leading-10 px-4 py-20 lg:py-24 text-center max-w-5xl m-auto text-white font-Cormorant">{children}</p>
        </div>
        </>
     );
}
 
export default Banner;
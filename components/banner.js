const Banner = ({children}) => {
    return ( 
        <>
        <div className="bg-[url('/dried-flower-background.png')] bg-cover bg-center">
            <p className="text-[2.8em] lg:text-[3.2em] leading-8 px-4 py-20 text-center max-w-4xl m-auto text-white font-Cormorant">{children}</p>
        </div>
        </>
     );
}
 
export default Banner;
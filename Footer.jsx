function Footer() {
    return (
        <footer className="bg-red-500 p-4 sm:p-6 text-center">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-white text-lg sm:text-xl mb-2">
                    &copy; 2025 FitSync Pro. All rights reserved.
                </h1>
                <h1 className="text-white text-lg sm:text-xl">
                    Designed with 
                    <span className="inline-block mx-1 text-red-600 text-2xl sm:text-3xl">
                        <span 
                            className="inline-block hover:animate-heartbeat"
                            style={{
                                animationDuration: '1s',
                                animationTimingFunction: 'ease-in-out'
                            }}
                        >
                            &hearts;
                        </span>
                    </span> 
                    by Allah Rakha
                </h1>
            </div>
        </footer>
    );
}

export default Footer;
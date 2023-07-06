import React, { useEffect } from 'react';
import EarthImage from '../images/earth-hubble-mobile.jpg';
import HubbleImage from '../images/hubble-hero-2.jpg';

const Home = () => {
    useEffect(() => {
        const image = document.querySelector('.img-zoom');

        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            image.style.transform = `translateY(${scrollY}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home-container">
            <div className="image-container">
                <img src={EarthImage} alt="Earth" className="img-zoom" />
            </div>
            <div className="text-container p-3 text-center">
                <h1 className="mt-1 mb-4">The Hubble Space Telescope...</h1>
                <p>
                    ...is one of NASA’s most successful and long-lasting science missions.
                    It has beamed hundreds of thousands of images back to Earth, 
                    shedding light on many of the great mysteries of astronomy.
                    Among its many discoveries, Hubble has revealed the age of the universe 
                    to be about 13.8 billion years, much more accurate than the old range of 
                    anywhere from 10 to 20 billion years.
                </p>
                <p>
                    Hubble played a key role in the discovery of dark energy,
                    a mysterious force that causes the expansion of the universe to accelerate.
                    Hubble has shown scientists galaxies in all stages of evolution,
                    including galaxies that were around when the universe was still young, 
                    helping them understand how galaxies form.
                </p>
                <p>
                    It found protoplanetary disks, clumps of gas and dust around young stars 
                    that likely function as birthing grounds for new planets.
                    It discovered that gamma-ray bursts — strange, incredibly powerful explosions of 
                    energy — can occur in far-distant galaxies when massive stars collapse.
                </p>
                <p>
                    These are only a handful of its many continuing contributions to astronomy.
                </p>
            </div>
            <div id="vid">
                <iframe src="https://www.youtube.com/embed/qDXUsLnYhxU" title="Hubble three decades of discovery"
                    allowfullscreen></iframe>
            </div>
            <img src={HubbleImage} className="hubble-image"
                alt="hubble telescope floating above the earth"></img>
        </div>
    );
};

export default Home;
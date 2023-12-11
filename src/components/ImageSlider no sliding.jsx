import { useCallback, useEffect, useRef, useState } from "react"

const ImageSlider = ( {galletas } ) => {

    const timeRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
    };

    const slideStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${galletas[currentIndex].foto})`,
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#00A693',
        zIndex: 1,
        cursor: 'pointer'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#00A693',
        zIndex: 1,
        cursor: 'pointer'
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? galletas.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === galletas.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, galletas]);

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        transform: 'translate(0, -100%)',
    };

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '15px',
        color: '#00A693',
        transform: 'translate(0, -100%)',
    };

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    };

    useEffect(() => {
        if (timeRef.current) {
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(() => {
            goToNext();
        }, 2000);

        return () => clearTimeout(timeRef.current)
    }, [goToNext]);

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}> ❮ </div>
            <div style={rightArrowStyles} onClick={goToNext}> ❯ </div>

            <div style={slideStyle}></div>
            
            <div style={dotsContainerStyles}>
                {galletas.map((slide, slideIndex) => (
                   <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>⬤</div> 
                )
                )}
            </div>
        </div>
    )
}

export default ImageSlider
import { useCallback, useEffect, useRef, useState } from "react"

// credit to monsterlessonsacademy (GitHub Account) with the ImageSlider

const ImageSlider = ({ galletas_strudel, parentWidth }) => {

    const timeRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
        width: '100%' // 805
    };

    const slidesContainerStyles = {
        display: 'flex',
        height: '100%',
        transition: 'transform ease-out 0.6s',
    }

    const getSlidesContainerStylesWithWidth = () => ({
        ...slidesContainerStyles,
        width: parentWidth * galletas_strudel.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)`
    })

    const getSlidesStylesWithBackground = (slideIndex) => ({
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${galletas_strudel[slideIndex]})`,
    });

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#C30F16',
        zIndex: 1,
        cursor: 'pointer'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#C30F16',
        zIndex: 1,
        cursor: 'pointer'
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? galletas_strudel.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === galletas_strudel.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, galletas_strudel]);

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        transform: 'translate(0, -100%)',
    };

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '15px',
        color: '#C30F16',
        transform: 'translate(0, -100%)',
    };

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    };

    const slidesContainerOverflowStyles = {
        overflow: 'hidden',
        height: '100%'
    }

    useEffect(() => {
        if (timeRef.current) {
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(() => {
            goToNext();
        }, 4000);

        return () => clearTimeout(timeRef.current)
    }, [goToNext]);

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}> ❮ </div>
            <div style={rightArrowStyles} onClick={goToNext}> ❯ </div>

            <div style={slidesContainerOverflowStyles}>

            <div style={getSlidesContainerStylesWithWidth()}>
                {galletas_strudel.map((_, slideIndex) => (
                    <div key={slideIndex} style={getSlidesStylesWithBackground(slideIndex)}> </div>
                ))}
            </div>
            
            <div style={dotsContainerStyles}>
                {galletas_strudel.map((slide, slideIndex) => (
                   <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>⬤</div> 
                )
                )}
            </div>

            </div>
        </div>
    )
}

export default ImageSlider
"use client";
import {useCallback, useEffect, useState} from 'react'
import {Transition} from 'react-transition-group'
import Pagination from './pagination.js';
import ImageWrapper from "./image.js";

// В react-transition-group є компоненти Transition, CSSTransition, SwitchTransition,
// TransitionGroup. Ми почнемо з першого. Компонент Transition дозволяє описувати перехід
// компоненту з одного стану в інший за допомогою простого декларативного синтаксису.
// Зазвичай він використовується для анімації монтажу/розмонтажу компонентів.
const DURATION = 500;

const defaultStyle = {
    /* Apply to all changed properties */
    transition: `all ${DURATION}ms ease-in-out`,
};

// Існує 4 основних стани переходу:
// entering
// entered
// exiting
// exited
const transitionStyles = {
    entering: {transform: 'scale(0.9)'},
    entered: {transform: 'scale(1)'},
    exiting: {transform: 'scale(0.9)'},
    exited: {transform: 'scale(1)'},
};

export default function ImagesGallery() {
    const [images, setImages] = useState([]);
    const [isFetching, setFetching] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const onNextClick = useCallback(() => {
        setCurrentPage(currentPage + 1);
        setFetching(true);
    }, [currentPage])

    const onPreviousClick = useCallback(() => {
        setCurrentPage(currentPage - 1);
        setFetching(true);
    }, [currentPage])


    useEffect(() => {
        try {
            setFetching(true);
            fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=6`)
                .then((response) => response.json())
                .then((images) => {
                    setImages(images)
                    setFetching(false)
                })
        } catch (error) {
            throw new Error(error);
        } finally {
            setFetching(false);
        }
    }, [currentPage]);
// Ці стани переключаються за допомогою пропа in, коли значення пропа рівно true, починається входження компонента
// на цій стадії компонент переходить в стан entering, а після завершення в стан entered
// в стані entering компонент буде стильки, скільки вказано в пропі timeout

// при значенні пропа in рівному false, відбувається те ж саме, тільки стан міняється від exiting до exited
    return (
        <>
            <Transition in={isFetching} timeout={DURATION}>
                {(state) => (
                    <div
                        className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center p-5"
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}
                    >
                        {
                            images.map((image) => {
                                return (
                                    <ImageWrapper
                                        image={image}
                                        key={image.id}
                                    />
                                );
                            })
                        }
                    </div>
                )}
            </Transition>
            <Pagination
                currentPage={currentPage}
                onPreviousClick={onPreviousClick}
                onNextClick={onNextClick}
            />
        </>
    )
}

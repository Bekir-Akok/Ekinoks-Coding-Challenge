import React from 'react';
import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { removeToFav } from '@redux/actions/action';
import './closer.scss';

const Closer = ({ pokemon, closer }) => {

    const dispatch = useDispatch()

    const clickHandler = (pokemon) => {
        dispatch(removeToFav(pokemon))
    }

    return (
        <>
            {
                closer
                    ? <div
                        className="closer"
                        title="Remove to favorites"
                        onClick={() => clickHandler(pokemon)}>
                        <GrClose />
                    </div>
                    : null
            }
        </>
    )
}

export default Closer

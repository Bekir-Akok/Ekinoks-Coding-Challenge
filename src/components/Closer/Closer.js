import React from 'react';
import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { removeToFav, removeToCatch } from '@redux/actions/action';
import './closer.scss';
import { useParams } from 'react-router';

const Closer = ({ pokemon, closer }) => {

    const dispatch = useDispatch();
    const params = useParams()

    const clickHandler = (pokemon) => {
        params.name === "fav"
            ? dispatch(removeToFav(pokemon))
            : dispatch(removeToCatch(pokemon))
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

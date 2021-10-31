import React from 'react';
import { useLocation } from 'react-router-dom';
import GameBoard from '@components/GameBoard';
import Layout from '@layout';
import './game.scss';

const Game = () => {

    const location = useLocation();

    return (
        <Layout>
            <GameBoard location={location} />
        </Layout>
    )
}

export default Game

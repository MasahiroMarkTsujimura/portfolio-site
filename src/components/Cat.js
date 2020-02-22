import React from 'react';
import Helmet from 'react-helmet';

const Cat = ({ className }) =>
    <div className={className}>
        <Helmet>
            <script src='https://unpkg.com/@lottiefiles/lottie-player@0.2.0/dist/lottie-player.js'></script>
        </Helmet>
        <lottie-player
            src='https://assets4.lottiefiles.com/packages/lf20_OT15QW.json'
            background='transparent'
            speed='1'
            style={{ width: '150px', height: '150px' }}
            loop
            autoplay
        >
        </lottie-player>
    </div>;

export default Cat;
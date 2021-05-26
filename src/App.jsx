import React, { useState } from 'react';

import Ad from './components/Ad';
import CreateAd from './components/CreateAd';

export default () => {

    const [list, setList] = useState([]);
    const onSetList = (ad) => {
        setList([...list, ad]);
    };

    return (
        <div>
            <Ad title="TITLE" description="DESCRIPTION" />
            <CreateAd onCreatedAd={onSetList} />
        </div>
    );
}
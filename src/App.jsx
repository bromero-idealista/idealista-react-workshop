import React, { useState } from 'react';

import Ad from './components/Ad';
import CreateAd from './components/CreateAd';
import fixtures from './fixtures/ads';
import ids from './libs/id';

const adsData = fixtures();

// usar efecto para cambiar document.title {useEffect}

export default () => {

    const [list, setList] = useState(adsData);
    const onSetList = (ad) => {
        ad = { ...ad, id: ids.next().value }
        setList([...list, ad]);
    };

    const onFavorited = id => {
        const newAdList = list.map(a => {
            if (a.id === id) {
                return { ...a, isFav: !a.isFav };
            }
            return a;
        })
        setList(newAdList);
    };

    const onDiscarded = id => {
        const newAdList = list.filter(a => a.id !== id);
        setList(newAdList);
    };

    return (
        <div>
            <CreateAd onCreatedAd={onSetList} />
            {
                list.map((ad) =>
                    <Ad id={ad.id} key={ad.id} title={ad.title} description={ad.description} isFav={ad.isFav} onFavorited={onFavorited} onDiscarded={onDiscarded} />
                )
            }
        </div>
    );
}
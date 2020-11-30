import React from 'react';
import './Ads.scss';

// FAKE DATA
import { ads } from '../../data';

function Ads() {
    return (
        <section className="ads-section">
            {
                ads.map(ad =>
                    <div key={ad.id} className="ad-card">
                        <h4>{ad.title}</h4>
                        <img src={ad.src} alt={ad.alt}/>
                        <p>{ad.desc}</p>
                    </div>
                )
            }
        </section>
    );
}

export default Ads;
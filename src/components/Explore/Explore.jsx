import React, { Suspense, lazy } from 'react';
import './Explore.scss';

// FAKE POSTS
import cards from '../../data/cards';

const ExploreCard = lazy(() => import('./ExploreCard'));

function Explore() {
    return (
        <div>
            <h1 className="section-title">Explore</h1>
            <div className="explore-carousel">
                {
                    cards.map(card => 
                        <Suspense key={card.id} fallback={`Loading Post ${card.id}...`}>
                            <ExploreCard
                                key={card.id}
                                src={card.src}
                                description={card.description}
                                alt={card.alt}
                            />
                        </Suspense>
                    )
                }
            </div>
        </div>
    );
}

export default Explore;

import { useMemo } from 'react';
import { getHeroesByPubliser } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publiser }) => {
  
  const heroes = useMemo(() => getHeroesByPubliser( publiser ), [ publiser ] ); 

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            
            {

            heroes.map(
                
                    (
                        (hero) => (
                        <div key={ hero.id }> 
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        </div>
                        )
                    )
                
            )

            }

        </div>
    )
}

import React from "react";
import Event from "./Event";
const Container = () => {
    return(
        <div className="container">
        <Event  name ='Moerlein Lager House' type='Gastropub' source = '/moerlein.jpg' location='https://www.moerleinlagerhouse.com/'/>
        <Event  name ='Sotto' type='Italian, European' source = '/sotto-cincinnati-oh.jpg' location='https://www.sottocincinnati.com/'/>
        <Event  name ="Rosie's Italian" type='Italian, Bar' source = '/rosie-italian.jpg' location='https://rosiesitaliankitchen.com/'/>
        <Event  name ='Subito' type='Italian, Steakhouse' source = '/subito.jpg' location='https://www.subitoatlytlepark.com/'/>
        <Event  name ='Five on Vine' type='American' source = '/fiveonvine.jpg' location='https://fiveonvine.com/'/>
        <Event  name ="Jeff Ruby's Precinct" type='American, Steakhouse' source = '/the-precinct-by-jeff.jpg' location='https://www.jeffruby.com/precinct'/>
        <Event  name ='Boca' type='Italian, French' source = '/boca.jpg' location='https://www.bocacincinnati.com/'/>
        <Event  name ='The Melting Pot' type='American' source = '/meltingpot.jpg' location='https://www.meltingpot.com/cincinnati-oh/'/>
        <Event  name ='Nada' type='Mexican, Southwestern' source = '/nada.jpg' location='https://www.eatdrinknada.com/location/cincinnati/'/>
        <Event  name =' Artemis Mediterranean Bistro' type='Mediterranean, Turkish' source = '/artemis-mediterranean.jpg' location='https://artemisbistro.com/'/>
        </div>
    )
}
export default Container;
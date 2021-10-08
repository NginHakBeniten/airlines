import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import { fetchAirlines } from '../reducks/airlines/operations';
import { getAirlines } from '../reducks/airlines/selectors';

export default function Home() {
    const dispatch = useDispatch();

    const selector = useSelector((state) => state);
    const airlines = getAirlines(selector);

    console.log(airlines);

    useEffect(() => {
        // dispatch(fetchAirlines());
        // eslint-disable-next-line
    }, []);

    const [filter, setFilter] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    };

    return (
        <>
            <Header />
            <section className="content">
                <div className="headline">Airlines</div>
                <div className="font-weight-bold">Filter by Alliancews</div>
                <form>
                    <div className="checkbox-container">
                        <input id="oneworld" type="checkbox" />
                        <label htmlFor="oneworld">Oneworld</label>

                        <input id="sky-team" type="checkbox" />
                        <label htmlFor="sky-team">Sky Team</label>

                        <input id="star-alliance" type="checkbox" />
                        <label htmlFor="star-alliance">Star Alliance</label>
                    </div>
                </form>

                <div className="grid-container">
                    {
                        airlines.map(item => {
                            return (
                                <div className="grid-item">
                                    <img src={"http://kayak.com" + item.logoURL}></img>
                                    <div className="grid-item-info">
                                        <span className="font-weight-bold">{item.name}</span>
                                        <span>{item.phone}</span>
                                        <span>{item.site}</span>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </>
    )
}

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import { fetchAirlines } from '../reducks/airlines/operations';

export default function Home() {
    const dispatch = useDispatch();

    const selector = useSelector((state) => state);

    useEffect(() => {
		dispatch(fetchAirlines());
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
                    <div className="grid-item">

                    </div>
                    <div className="grid-item">

                    </div>
                    <div className="grid-item">

                    </div>
                    <div className="grid-item">

                    </div>
                </div>
            </section>
        </>
    )
}

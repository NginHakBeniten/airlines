import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import { fetchAirlinesAction } from '../reducks/airlines/actions';
import { fetchAirlines } from '../reducks/airlines/operations';
import { getAirlines } from '../reducks/airlines/selectors';

export default function Home() {
    const dispatch = useDispatch();

    const selector = useSelector((state) => state);
    const airlines = getAirlines(selector);

    useEffect(() => {
        dispatch(fetchAirlinesAction(airlines, filter));
        // eslint-disable-next-line
    }, []);

    let options = [];
    options['ST'] = false;
    options['OW'] = false;
    options['SA'] = false;

    const [filter, setFilter] = useState(options);

    const onChange = (e) => {
        const { name, checked } = e.target;
        setFilter({
            ...filter,
            [name]: checked
        });
    }

    const asArray = Object.entries(airlines);
    let Arrairlines = asArray.filter(item => {
        let isReturn = false;
        let filtered = [];
        Object.entries(filter).map(item => {
            if (item[1]) {
                filtered.push(item[0])
            }
        });

        if (filtered.includes(item[1].alliance)) {
            isReturn = true
        }

        if (!filter['ST'] && !filter['SA'] && !filter['OW']) {
            isReturn = true;
        }
        return isReturn;
    })

    return (
        <>
            <Header />
            <section className="content">
                <div className="headline">Airlines</div>
                <div className="font-weight-bold">Filter by Alliancews</div>
                <form>
                    <div className="checkbox-container">
                        <input id="oneworld" name="OW" checked={filter['OW']} type="checkbox" onChange={onChange} />
                        <label htmlFor="oneworld">Oneworld</label>

                        <input id="sky-team" type="checkbox" name="ST" checked={filter['ST']} onChange={onChange} />
                        <label htmlFor="sky-team">Sky Team</label>

                        <input id="star-alliance" type="checkbox" name="SA" checked={filter['SA']} onChange={onChange} />
                        <label htmlFor="star-alliance">Star Alliance</label>
                    </div>
                </form>

                <div className="grid-container">
                    {
                        Arrairlines.map(item => {
                            return (
                                <div className="grid-item" key={item[1].code}>
                                    <img src={"http://kayak.com" + item[1].logoURL} alt="company logo"></img>
                                    <div className="grid-item-info">
                                        <span className="font-weight-bold">{item[1].name}</span>
                                        <span>{item[1].phone}</span>
                                        <span>{item[1].site}</span>
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

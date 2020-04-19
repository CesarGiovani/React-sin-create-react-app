import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';

const API = process.env.API

const List = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');

    const getData = async (movie) => {
        // const res = await fetch('../../assets/data.json');
        const res = await fetch(`${API}&s=${movie}`);
        const resJSON = await res.json();
        return resJSON;
    }
    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault()
            setError('')
            if (search.trim() === '') {
                setError('Campo Vacio');
                return null;
            }
            const data = await getData(search);
            if ((data.Search) && (data.Response === 'True')) {
                setData(data.Search);
            } else {
                setError('No se encontraron coincidencias');   
            }
        } catch (error) {
            setError('Algo salio mal :c');
        }
    }
    
    useEffect(() => {
        const getInitialData = async () => {
            const data = await getData('Batman');
            setData(data.Search);
        }
        getInitialData();
    }, []);
    return (
        <>
            <div className="row">
                <div className="col-md-4 offset-md-4 p-4">
                    <form onSubmit={handleOnSubmit} autoComplete={false}>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="form-control"
                            onChange={(e) => setSearch(e.target.value)}
                            autoFocus
                        />
                    </form>
                    {error.trim() !== '' && <p className="text-white">{error}</p>}
                </div>
            </div>
            <div className='row'>
                {data.map((it) => (
                    <Card key={it.imdbID} {...it} />
                ))}
            </div>
        </>
    )
};

export default List;

import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/fetchData';
import Loading from '../../components/loading/Loading';
import FilterSideBar from '../../components/filterSideBar/FilterSideBar';
import FilterContextProvider from '../../context/FilterContext';



function Hotels() {
    const { City } = useParams();
    const url = `/hotels/city/${City}`;
    const { data, loading, error } = useFetch(url);
    if (!data && loading) {
        return (
            <div style={{marginTop: "15vh"}}>
                <Loading />
            </div>
        )
    }

    return (
        <FilterContextProvider hotels={data} url={url} >
            <FilterSideBar City={City} />
        </FilterContextProvider>
    )
}

export default Hotels
import React from 'react'
import Loading from '../loading/Loading';

function SearchResult({ Searching_result }) {
    const { data, loading, error } = Searching_result
    console.log(data, loading, error);
    
    return 
    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: 40 }} >SearchResult:</h2>
            {loading ?
                <Loading />
                :
                <>
                    {data?.map(hotel => (
                        <>
                            {hotel?.map(room =>
                                <>
                                    <p>name : {room.name}</p>
                                    <p>price : {room.price}</p>
                                    {room.room_numbers.map(room => {
                                        <p>name : {room.number}</p>
                                        room.unavailableDates.map(date => {
                                            <p>{date.number}</p>
                                        })
                                    })

                                    }
                                </>
                            )

                            }
                        </>
                    ))

                    }
                </>

            }

        </div>
    )
}

export default SearchResult
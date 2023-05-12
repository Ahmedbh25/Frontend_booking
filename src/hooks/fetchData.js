import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  

  return { data, loading, error, reFetch };
};

export default useFetch;


/*import { useEffect, useState } from "react";

import axios from "axios";
import { FETCH_ACTIONS, FetchDataState } from "../context/FetchDataContext";

// The useEffect hook in useFetch is being used inside a custom React Hook, which is a valid use case for this hook.
// in general the function must beggin with use key word.

const useFetch = (url) => {
    //const {fetchState, fetchDispatch } = FetchDataState();
    //console.log(fetchState)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            //fetchDispatch({ type: FETCH_ACTIONS.START });
            setLoading(true)
            try {
                const responcy = await axios.get(url);
                setData(responcy.data)
                //console.log(responcy)
                //fetchDispatch({ type: FETCH_ACTIONS.SUCCESS, payload : responcy.data });
            } catch (error) {
                setError(error.response)
                //fetchDispatch({ type: FETCH_ACTIONS.ERROR, payload : error.response });
            }
            setLoading(false)
        }
        getData();
    }, [url]);
    return {data, loading, error};
}

export default useFetch;*/
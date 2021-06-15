import {useState, useEffect} from 'react';


const useInitialState = (API) => {

    const [videos, setVideos] = useState({
        mylist: [], 
        trends: [],
        originals: []
    })

    useEffect( () => {
        fetch(API)
        .then( response => response.json() )
        .then( data => setVideos(data))
        .catch( error => {
            console.log(error);
        })
    }, [])

    return videos
}

export default useInitialState

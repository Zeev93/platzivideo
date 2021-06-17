import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../assets/styles/components/Player.scss'
import {getVideoSource} from '../actions'
import NotFound from '../containers/NotFound'


const Player = (props) => {
    const history = useHistory()
    const { id } = props.match.params
    const [ loading, setLoading ] = useState(true)
    const hasPlaying = Object.keys(props.playing).length > 0

    useEffect( () => {
        props.getVideoSource(id)
        setLoading(false)
    }, [])

    if (loading) return null

    return hasPlaying ? ( 
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={ () => history.goBack()}>Regresar</button>
            </div>
        </div>
     ) :

     <NotFound/>
}
 
const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
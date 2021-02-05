import React from "react"


const Song = props => {
    const  {id, title, artist, genre, rating} = props.song;
    return (
        <tr>
            <td className="song">{title} </td>
            <td className="song">{artist} </td>
            <td className="song">{genre} </td>
            <td className="song">{rating} </td>
            <td className ="delete"><button className = "deletebtn" onClick = {() => props.deleteSong(id)}>x</button></td>
        </tr>
    )
}

export default Song
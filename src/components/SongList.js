import React from "react";
import Song from "./Song.js";

const SongList = props => {
    const deleteSong = props.deleteSong;
    return (
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Delete</th>
                </tr>
                {props.songs.map(item => <Song song={item} key={item.id} deleteSong={deleteSong} />)}
                <tr className="sort-buttons">
                    <td><button onClick={() => props.sortByTitle()}>Sort by Title</button></td>
                    <td><button onClick={() => props.sortByArtist()}>Sort by Artist</button></td>
                    <td><button onClick={() => props.sortByGenre()}>Sort by Genre</button></td>
                    <td><button onClick={() => props.sortByRating()}>Sort by Rating</button></td>
                    <td><button onClick={() => props.deleteAll()}>Empty List</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default SongList;
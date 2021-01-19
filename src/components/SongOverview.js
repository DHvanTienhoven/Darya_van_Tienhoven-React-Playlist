import React, {Component} from "react";
import SongForm from "./SongForm.js";
import SongList from "./SongList.js";
import {v4 as uuid} from 'uuid';

class SongOverview extends Component {

    constructor() {
        super()
        this.state =
        {
            songs: [    
            {id: uuid(), artist: "Nico", title: "The Fairest of the Seasons", genre: "Indie", rating: 3},
            {id: uuid(), artist: "Theo Katzman", title: "Hardly ever rains", genre: "Indie", rating: 4},
            {id: uuid(), artist: "Yentl en De Boer", title: "Ik heb een man gekend", genre: "Kleinkunst", rating: 5},
            {id: uuid(), artist: "God help the Girl", title: "Dress up in You", genre: "Indie", rating: 4},
            {id: uuid(), artist: "David Bowie", title: "Rock n Roll Suicide", genre: "Rock", rating: 3},
            {id: uuid(), artist: "The Tallest Man on Earth", title: "Love is All", genre: "Folk", rating: 2},
            {id: uuid(), artist: "The Kinks", title: "Strangers", genre: "Rock", rating: 1},
            {id: uuid(), artist: "Leonard Cohen", title: "First we take Manhattan", genre: "Folk", rating: 3},
            {id: uuid(), artist: "Kenny B", title: "Parijs", genre: "Reggae", rating: 4},
            {id: uuid(), artist: "George Ezra", title: "Shotgun", genre: "Pop rock", rating: 3},
            {id: uuid(), artist: "Passenger", title: "The Long Road", genre: "Folk", rating: 4},
            {id: uuid(), artist: "Sabrina Starke", title: "In the Morning", genre: "Soul", rating: 5},
            {id: uuid(), artist: "Nathalie Merchant", title: "Motherland", genre: "Folk", rating: 4},
            {id: uuid(), artist: "Adam Beattie", title: "There is no Postcard for this Town", genre: "Folk", rating: 3},
            {id: uuid(), artist: "Oi Va Voi", title: "Refugee", genre: "Klezmer", rating: 5},
            {id: uuid(), artist: "Stephanie Grace", title: "Nickel", genre: "Folk", rating: 3},
            {id: uuid(), artist: "Amos Lee", title: "Supply and Demand", genre: "Soul", rating: 4},
            {id: uuid(), artist: "Boudewijn de Groot", title: "De Eeuwige Soldaat", genre: "Nederpop", rating: 3},
            {id: uuid(), artist: "Paul Simon", title: "Me and Julio down by the Schoolyard", genre: "Rock", rating: 2}]
        }
    }

    addSong = song => {
            this.setState({
                songs: [...this.state.songs].concat([song])
            })
    }

    deleteSong = id =>{
        let adjustedSongs = this.state.songs.filter(item => item.id !== id);
        this.setState({songs: adjustedSongs})
    }

    sortByTitle = () =>{
        let songs = [...this.state.songs]
        let sortedSongs = songs.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase()? 1: -1)
        this.setState({
            songs: sortedSongs
        })
    }

    sortByArtist = () =>{
        let songs = [...this.state.songs]
        let sortedSongs = songs.sort((a,b) =>  a.artist.toLowerCase() > b.artist.toLowerCase()? 1: -1)
        this.setState({
            songs: sortedSongs
        })
    }

    sortByGenre = () =>{
        let songs = [...this.state.songs]
        let sortedSongs = songs.sort((a,b) => a.genre.toLowerCase() > b.genre.toLowerCase()? 1:-1)
        this.setState({
            songs: sortedSongs
        })
    }

    sortByRating = () =>{
        let songs = [...this.state.songs]
        let sortedSongs = songs.sort((a,b) => b.rating - a.rating)
        this.setState({
            songs: sortedSongs
        })
    }

    deleteAll = () =>{
        this.setState({songs: []})
    }

    render() {
        return (
            <div className = "songoverview">
                <SongForm addSong={this.addSong} />
                <SongList 
                songs={this.state.songs} 
                deleteSong = {this.deleteSong} 
                sortByTitle = {this.sortByTitle}
                sortByArtist ={this.sortByArtist}
                sortByGenre ={this.sortByGenre}
                sortByRating = {this.sortByRating}
                deleteAll ={this.deleteAll}/>
            </div>
        );
    }
}

export default SongOverview;
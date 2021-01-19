import React, {Component} from "react";
import {v4 as uuid} from 'uuid';


class SongForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            newTitle: "",
            newArtist: "",
            newGenre: "",
            newRating: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        const {value, name} = event.target
        this.setState({ [name]: value})
    }
    handleClick(event){
        event.preventDefault()
        const newSong = {id: uuid(), artist: this.state.newArtist, title: this.state.newTitle,
                        genre: this.state.newGenre, rating: this.state.newRating}
        this.props.addSong(newSong)
        this.setState({newTitle: "", newArtist: "", newGenre: "", newRating: ""})
    }


    render(){
    return(
        <div>
            <form>
                <input 
                    type="text"
                    placeholder="Title"
                    name="newTitle"
                    value={this.state.newTitle}
                    onChange={this.handleChange}
                    >
                </input>
                <input 
                    type="text"
                    placeholder="Artist"
                    name="newArtist"
                    value={this.state.newArtist}
                    onChange={this.handleChange}
                    >
                </input>
                <input 
                    type="text"
                    placeholder="Genre"
                    name="newGenre"
                    value={this.state.newGenre}
                    onChange={this.handleChange}
                    >
                </input>
                <label htmlFor="Rating">Rating:</label>
                <select id="Rating" name="newRating" size="1" onChange={this.handleChange} value={this.state.newRating} multiple={false}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.handleClick}>Add Song</button>
            </form>
        </div>
    )
}}


export default SongForm;

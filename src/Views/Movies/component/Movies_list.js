import React, { Component } from 'react';
import { ListDeFilm } from '../data/ListDeFilm';
import Film from './Film';

class Movies_list extends Component {
    state = {
        films:ListDeFilm,
        radios: [
            {id: 1, value: "Action"},
            {id: 2, value: "SF"},
            {id: 3, value: "Animation"},
            {id: 4, value: "Romance"},
            {id: 5, value: "Comedy"},
            {id: 6, value: "Thriller"}
        ],
        selectedRadio: 'Action'
    };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio});
    }
    render() {
        let {films, radios, selectedRadio} = this.state;
        
        return (
            
                

            <div>
                <ul className='radio-container'>
                        {
                            radios.map((radio) => {
                                return(
                                    <li key={radio.id}>
                                        <input 
                                        type="radio" 
                                        name="radio" 
                                        // checked={radio.value ===selectedRadio}
                                        value={radio.value}
                                        onChange={this.handleRadio}
                                        ></input>
                                        <label htmlFor={radio.value}>{radio.value}</label>
                                    </li>
                                )
                            }
                        )}
                    </ul>
                <div className='movies'>
                    
                    {
                        films
                        .filter(item =>item.genre_ids.includes(selectedRadio))
                        .map(item => {
                            return(
                                <Film
                                key={item.id}
                                item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
           
        );
    }
}

export default Movies_list;
import React, { Component } from 'react';

class Film extends Component {
    state = {
        show_info: false
    }


    handle_info = () => {
        this.setState({
            show_info: !this.state.show_info
        })
    }
    render() {

        let {poster_path, adult, overview, release_date, original_title, original_language, popularity, vote_count, video, vote_average} = this.props.item;

        return (

            
            <div className='film-container'>
                
                {this.state.show_info && (
                        <div className='modal-container'>

                            

                            <div className='img_info_container'>

                                <div className='img-container'>
                                    <h3>{original_title}</h3>
                                    <img src={poster_path}></img>     
                                </div>

                                <div className='info-container'>
                                    <div className='date_language'>
                                        <p>{release_date}</p>
                                        <p>{original_language}</p>
                                    </div>
                                    <h4>Overview : </h4>
                                    <p>{overview}</p>  

                                    <div className='vote-container'>
                                        <p>{vote_average + " / 10"} </p>  
                                        <p>{"LIKE"} </p>  
                                        
                                    </div> 

                                    <div className='button return' onClick={this.handle_info}>
                                        Retourner sur la page
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }
                <div className='movie-card'>
                    <img src={poster_path} onClick={this.handle_info}></img>        
                    <h3>{original_title}</h3>
                </div>
            </div>
        );
    }
}

export default Film;
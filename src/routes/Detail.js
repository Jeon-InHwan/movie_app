import React from "react";
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() { 
        console.log(this.props);
        const {location} = this.props;
        if(location.state) {
            return (
                <div className="div_detail">
                    <img className="img_poster" src={location.state.poster} alt={location.state.title}/>
                    <h2 className="h2_title">{location.state.title}</h2>
                    <ul className="ul_genres">
                        {location.state.genres.map((genre, index) => {
                            return (
                                <li key={index} className="li_genre">
                                    {genre}  
                                </li>
                            );
                        })}
                    </ul>
                    <p className="p_summary">
                        {location.state.summary}
                    </p>
                </div>
            );
        } else {
            return null;
        }
        
    }
}

export default Detail;
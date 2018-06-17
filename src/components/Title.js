import React from 'react';
import style from './Title.css';

const Title = props => {
    return(
            <div className={style.Title}>
				<h1>{props.title}</h1>
                <h2>Number of added tasks: {props.number}</h2>
			</div>
    );
}

export default Title;
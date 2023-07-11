import './Card.css';

// Wrapper component, props.children gets everything defined inside the tags of the spot where its implemented.
function Card(props){
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;
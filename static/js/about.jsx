class About extends React.Component {
    render(){
        return (
            <div>   
                <p>This is a great site for viewing trading cards!</p>
                <a href ="/cards">Click here to view trading cards.</a><br/>
                <img src="/static/img/balloonicorn.jpg" />
            </div> 
        );
    }
}

ReactDOM.render(<About />, document.getElementById('app'));
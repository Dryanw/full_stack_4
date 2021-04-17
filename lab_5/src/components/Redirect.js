const Redirect = (props) => {
    const handleRedirectClick = () => {
        const {history} = props;
        history?history.push('/'):console.log('history not found in props');
    };

    return (
        <div>
            <button onClick={handleRedirectClick}>Redirect</button>
        </div>
    );
};

export default Redirect;
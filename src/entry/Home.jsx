function Home() {
    const token = localStorage.getItem('parameters');

    return (
        <div>
            <p>Your token:</p>
            <pre style={{whiteSpace: 'pre-wrap'}}>{JSON.stringify(token?.split(','), null, 2)}</pre>
            <button onClick={() => localStorage.removeItem('parameters')}>Clear token</button>
            <hr />
            <a href="http://localhost:8082/auth/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/resolve">Google</a>
            <hr />
            <a href="http://localhost:8082/auth/oauth2/authorize/facebook?redirect_uri=http://localhost:3000/oauth2/resolve">Facebook</a>
            <hr />
            <a href="http://localhost:8082/auth/oauth2/authorize/github?redirect_uri=http://localhost:3000/oauth2/resolve">Github</a>
        </div>
    )
}

export default Home;
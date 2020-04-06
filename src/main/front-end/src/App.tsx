import React from 'react';
import logo from './logo.svg';
import './App.css';
import proxy from 'http-proxy-middleware'

class App extends React.Component<any, any> {
    constructor() {
        super(App.prototype);
        this.state = {

        };

        this.hello = this.hello.bind(this)
    }

    componentDidMount(): void {
        setInterval(this.hello, 250)
    }

    hello() {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message})
            })
    }

    test() {
        return {
            __html: this.state.message
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <div>
                        {this.state.message}
                    </div>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}

export default App;

export const proxyConfig = (app:any) => {
    app.use(
        proxy.createProxyMiddleware('/api/hello')
    )
};
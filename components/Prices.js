class Prices extends React.Component {

    state = {
        currency: ''
    }

    render(){
        let list = '';
        if(this.state.currency === 'USD') {
            list = <li>
                        BitCoin Rate for {this.props.data.bpi.USD.description}:
                        <span>{this.props.data.bpi.USD.code}</span>
                        <strong>{this.props.data.bpi.USD.rate}</strong>
                    </li>
        } else if(this.state.currency === 'GBP') {
            list = <li>
                        BitCoin Rate for {this.props.data.bpi.GBP.description}:
                        <span>{this.props.data.bpi.GBP.code}</span>
                        <strong>{this.props.data.bpi.GBP.rate}</strong>
                    </li>
        } else if(this.state.currency === 'EUR') {
            list = <li>
                        BitCoin Rate for {this.props.data.bpi.EUR.description}:
                        <span>{this.props.data.bpi.EUR.code}</span>
                        <strong>{this.props.data.bpi.EUR.rate}</strong>
                    </li>
        } else {
            ""
        }

        return(
            <div>
                <ul>
                    {list}
                </ul>
                <br />
                <select onChange={e => this.setState({currency: e.target.value})}>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        );
    }
}

export default Prices
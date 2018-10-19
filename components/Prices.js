class Prices extends React.Component {

    state = {
        currency: 'USD'
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
                 <div className="form-group">
                    <label for="exampleSelect1">Currency Selector</label>
                    <select className="form-control" 
                            id="exampleSelect1"
                            onChange={e => this.setState({currency: e.target.value})}
                            >
                      <option value="USD">USD</option>
                      <option value="GBP">GBP</option>
                      <option value="EUR">EUR</option>
                    </select>
                </div>
                <ul>{list}</ul>
            </div>
        );
    }
}

export default Prices
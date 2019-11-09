class Index extends React.Component {
    state = {
        invoiceNumber: 0,
        invoiceDate: 0,

        clientName: 'Full Name and Last Name',
        clientCompany: 'Company Name',
        clientAddress: {
            streetAddress: '12345 X Street',
            streetAddress2: 'Apt 100',
            cityStateZip: 'Phoenix, AZ 85004',
        },
        invoiceCount: 0,
        invoiceDetails: [],
    };

    updateState = val => {
        this.setState(prevState => ({
            count: prevState.count + val,
        }));
    };

    render() {
        return (
            <React.Fragment>
                <Button fnUpdateState={this.updateState} />

                <form>
                    <input
                        type="text"
                        onChange={() => {
                            this.updateState(1);
                        }}
                        placeholder={'text'}
                    ></input>
                </form>

                <Invoice />
            </React.Fragment>
        );
    }
}

const Button = props => {
    return (
        <button
            onClick={() => {
                props.fnUpdateState(2);
            }}
        >
            Button
        </button>
    );
};

const Invoice = () => {
    return (
        <React.Fragment>
            <header>
                <div className="invoice-number-container">
                    <h1>Invoice</h1>
                    <p>190131 | January 31, 2019</p>
                </div>
                <div className="invoice-total-container"></div>
            </header>
        </React.Fragment>
    );
};

ReactDOM.render(<Index />, document.getElementById('main'));

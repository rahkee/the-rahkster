class Index extends React.Component {
    state = {
        invoiceNumber: 0,
        invoiceDate: 0,

        clientName: '',
        clientPosition: 'Owner',

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

    updateForm = event => {
        this.setState({ clientName: event.target.value });

        console.log(this.state);
    };

    render() {
        return (
            <React.Fragment>
                <Button fnUpdateState={this.updateState} />

                <form>
                    <input
                        type="text"
                        onChange={this.updateForm}
                        value={this.state.clientName}
                        placeholder={'First and Last Name'}
                        id="firstLastName"
                    ></input>
                    <label htmlFor="firstLastName">First and Last Name</label>
                </form>

                <Invoice completeState={this.state} />
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

const Invoice = props => {
    console.log(props.completeState);

    // TODO: how to destructure props

    return (
        <React.Fragment>
            <header aria-label="landmark name">
                <div className="invoice-number-container">
                    <h1>Invoice</h1>
                    <p>190131 | January 31, 2019</p>
                </div>
                <div className="invoice-total-container">
                    <h1 aria-labelledby="totalDue">$1923.18</h1>
                    <p id="totalDue">Total Due</p>
                </div>
            </header>

            <article>
                <div className="section-title-bar">
                    <p>Client Information</p>
                </div>
                <div className="client-information">
                    <p>{props.completeState.clientName}</p>
                    <p>{props.completeState.clientPosition}</p>
                </div>
            </article>

            <article>
                <div className="section-title-bar">
                    <p>Invoice Details</p>
                </div>
            </article>
        </React.Fragment>
    );
};

ReactDOM.render(<Index />, document.getElementById('main'));

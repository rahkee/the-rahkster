class Index extends React.Component {
    state = {
        invoiceNumber: 0,
        invoiceDate: 0,

        clientName: 'Ray Villaraza',
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
                {/* <Button fnUpdateState={this.updateState} /> */}

                <div className="form-container">
                    <input
                        type="text"
                        onChange={this.updateForm}
                        value={this.state.clientName}
                        placeholder={'First and Last Name'}
                        id="firstLastName"
                    ></input>
                    <label htmlFor="firstLastName">First and Last Name</label>
                </div>

                <div className="invoice-container">
                    <Invoice completeState={this.state} />
                </div>
            </React.Fragment>
        );
    }
}

// const Button = props => {
//     return (
//         <button
//             onClick={() => {
//                 props.fnUpdateState(2);
//             }}
//         >
//             Button
//         </button>
//     );
// };

const Invoice = props => {
    let { clientName, clientPosition } = props.completeState;

    return (
        <React.Fragment>
            <header aria-label="landmark name">
                <div className="invoice-number-container">
                    <h1>Invoice</h1>
                    <p>190131 | January 31, 2019</p>
                </div>
                <div className="invoice-total-container">
                    <div className="invoice-total-box">
                        <p id="totalDue">Total Due</p>
                        <h1 aria-labelledby="totalDue">
                            $1923.18 <span>USD</span>
                        </h1>
                    </div>

                    <p>includes TAX ($98.90 | 8.6%)</p>
                </div>
            </header>

            <article>
                <div className="section-title-bar">
                    <p>Client Information</p>
                </div>
                <div className="client-information">
                    <p>
                        <strong>{clientName}</strong>
                        <br />
                        {clientPosition}
                    </p>
                    <p>
                        <strong>Moira Sushi</strong>
                        <br />
                        215 East McKinley
                        <br />
                        Suite 102
                        <br />
                        Phoenix, Arizona 85004
                    </p>
                </div>
            </article>

            <article>
                <div className="section-title-bar">
                    <p>Invoice Details</p>
                </div>

                <div className=""></div>
            </article>

            <article>
                <div className="section-title-bar">
                    <p>Payment Information</p>
                </div>
            </article>

            <footer>
                <p>
                    This invoice contains information regarding services
                    completed by Ray Villaraza for client(s) specified in the
                    CLIENT INFORMATION section. Services completed are
                    NON-REFUNDABLE. For questions or concerns, please contact me
                    via telephone at <strong>(480) 544-2623</strong> or through
                    electronic mail at <strong>ray.villaraza@gmail.com</strong>
                </p>
            </footer>
        </React.Fragment>
    );
};

ReactDOM.render(<Index />, document.getElementById('main'));

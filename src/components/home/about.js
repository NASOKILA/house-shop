import React from 'react';

export default class About extends React.Component {

    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <div className="jumbotron title">
                    <h1 className="display-3 text-capitalize">Welcome to my House Shop</h1>
                    <p className="p-tag">Buy interesting houses and discuss great content.</p>
                    <hr className="my-4" />
                    <h2 className="">This is a portfolio website for training purposes only.</h2>
                    <br/>
                    <p className="lead housebuttons">
                        <a className="btn btn-primary btn-lg" href="https://www.digitalartsonline.co.uk/features/creative-business/15-best-portfolio-websites-for-designers-artists/" role="button"><span className="buttons-text"><i className="fas fa-graduation-cap"></i> Learn More</span></a>
                    </p>
                </div>
                <br />
            </div>
        )
    }
}

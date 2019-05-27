import React, { Component } from "react";
import requester from "../../Infrastructure/remote";
import Pagination from "react-js-pagination";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: [],
      activePage: 1
    };
  }

  componentDidMount() {
    this.setHouses();
  }

  handlePageChange(pageNumber) {
    this.setState({
      activePage: pageNumber
    });
  }

  setHouses = () => {
    requester
      .get("appdata", "Houses", "kinvey")
      .then(houses => {
        let counter = 1;

        houses.forEach(houses => {
          houses.key = counter.toString();
          counter++;
        });

        this.setState({
          houses: houses
        });
      })
      .catch(err => console.log(err));
  };

  sortHouses = (a, b) => {
    if (a.Sold === "true") {
      return 1;
    }

    if (b.Sold === "false") {
      return -1;
    }

    return 0;
  };

  redirectToDetails = id => {
    return (window.location = "/house-shop/house/details/" + id);
  };

  render() {
    if (localStorage.getItem("username")) {
      let role = localStorage.getItem("admin") === "true" ? "Admin" : "User";

      return (
        <main className="mt-3 mb-5">
          <br />
          <br />
          <div className="jumbotron title">
            <div className="crd-body container-fluid text-center">
              <br />
              <h2 className="card-title">
                Greetings, {role} [ {localStorage.getItem("username")} ] !
              </h2>
              <h4 className="card-text">
                Feel free to view and order any of my products.
              </h4>
              <br />
            </div>
            <hr className="hr-2 bg-dark" />
          </div>

          <br />

          <div className="jumbotron container-fluid product-holder">
            <div className="row d-flex justify-content-around mt-3">
              {this.state.houses
                .sort(this.sortHouses)
                .slice((this.state.activePage - 1) * 3)
                .map(h => {
                  let classSold = "";
                  let avaliable = "Avaliable";

                  if (h.Sold === "true") {
                    classSold = "classSold";
                    avaliable = "Sold";
                  }

                  return (
                    <button
                      onClick={this.redirectToDetails.bind(this, h._id)}
                      key={h.key}
                      className="col-md-3 button-holding-houses"
                    >
                      <div
                        className={
                          classSold +
                          " product p-1 chushka-bg-color rounded-top rounded-bottom content"
                        }
                      >
                        <h4 className="text-center mt-3 houseData">{h.key}</h4>
                        <h4 className="text-center mt-3 houseData">
                          {avaliable}
                        </h4>
                        <hr className="hr-1 bg-white houseLine" />
                        <h4 className="text-center mt-3 houseData">
                          {h.Location}
                        </h4>
                        <hr className="hr-1 bg-white houseLine" />
                        <img
                          className="imgAnimate home-page-house-image"
                          src={h.Image.toString()}
                          alt="No House Img"
                        />
                        <br />
                        <hr className="hr-1 bg-white houseLine" />
                        <p className="text-center houseData">
                          {h.Description.toString().slice(
                            0,
                            Math.min(h.Description.toString().length, 25)
                          ) + " . . ."}
                        </p>
                        <hr className="hr-1 bg-white houseLine" />
                        <h4 className="text-center mb-3 houseData">
                          ${h.Price}
                        </h4>
                        <hr className="hr-1 bg-white houseLine" />
                        <h4 className="text-center mb-3 houseData">
                          {h.Size + " Meters"}
                        </h4>
                        <hr className="hr-1 bg-white houseLine" />
                        <div className="home-page-house-buttons">
                          <a
                            className="btn btn-sm btn-info housebuttons"
                            href={"/house-shop/house/details/" + h._id}
                          >
                            <span className="buttons-text text-capitalize">
                              <i className="fa fa-info" /> Info
                            </span>
                          </a>

                          {h.Sold === "false" &&
                          localStorage.getItem("admin") === "false" ? (
                            <a
                              className="btn btn-sm btn-success housebuttons"
                              href={"/house-shop/house/confirm-order/" + h._id}
                            >
                              <span className="buttons-text text-capitalize">
                                <i className="fa fa-shopping-cart" /> Buy
                              </span>
                            </a>
                          ) : (
                            ""
                          )}

                          {h.Sold === "false" &&
                          localStorage.getItem("admin") === "true" ? (
                            <a
                              className="btn btn-sm btn-warning housebuttons"
                              href={"/house-shop/house/edit/" + h._id}
                            >
                              <span className="buttons-text text-capitalize">
                                <i className="fa fa-edit" /> Edit
                              </span>
                            </a>
                          ) : (
                            ""
                          )}

                          {localStorage.getItem("admin") === "true" ? (
                            <a
                              className="btn btn-sm btn-danger housebuttons"
                              href={"/house-shop/house/delete/" + h._id}
                            >
                              <span className="buttons-text text-capitalize">
                                <i className="fa fa-trash-alt" /> Trash
                              </span>
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })
                .slice(0, 3)}
            </div>

            <div className="forms">
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={3}
                totalItemsCount={this.state.houses.length}
                pageRangeDisplayed={3}
                onChange={this.handlePageChange.bind(this)}
              />
            </div>
          </div>
        </main>
      );
    }

    return (
      <div>
        <br />
        <br />
        <div className="card text-white mb-6 bg-dark title unauthorizedCard">
          <div className="card-header">Introduction</div>
          <div className="card-body">
            <h2 className="card-title">
              Welcome to my Universal House Shop website
            </h2>
            <p className="card-text">
              The best house prices in the best locations on earth.
            </p>
          </div>
        </div>

        <div className="jumbotron text-white mt-3 bg-dark detailsActions">
          <br />
          <h3 className="text-white">
            This is a portfolio website for training purposes only.
          </h3>
          <br />
          <h3 className="text-white">Admin credentials:</h3>
          <br />
          <h3 className="text-white">Username : Admin</h3>
          <h3 className="text-white">Password : Admin</h3>
          <br />
          <hr className="bg-white" />
          <br />
          <h3 className="text-white">
            <a
              className="nav-link-dark homeLink"
              href="/house-shop/user/register"
            >
              <i className="fa fa-registered" /> Register
            </a>{" "}
            if you don't have an account.
          </h3>
          <br />
          <h3 className="text-white">
            <a className="nav-link-dark homeLink" href="/house-shop/user/login">
              <i className="fa fa-sign-in-alt" /> Login
            </a>{" "}
            if you have an account.
          </h3>
        </div>
        <br />
      </div>
    );
  }
}

import React, { Component } from 'react';
import List from '../../components/List/List';
import Cases from '../../components/Cases/Cases';
import Logo from '../../components/Logo/Logo';
import Empty from '../../components/Empty/Empty';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      countries: [],
      cases: [],
      isMenuOpen: null,
      countries_request: `https://api.covid19api.com/countries`,
      api_url: `https://api.covid19api.com/live/country/`,
      isMobile: null,

    };
      window.addEventListener('resize', this.changeMobile)
  }
  changeMobile = () => {
    window.matchMedia("(max-width: 1024px)").matches
    ? this.setState({ isMobile: true })
    : this.setState({ isMobile: false })
 }
 // This to handle scrolling top when choosing one of the genres from movie sidemen
  scrollTo = () => {
    return window.scrollTo(500, 500);
  }
 // this function to make a request that reflects data which active in specific country
  handleClick = (slug) => {
    axios.get(`${this.state.api_url}${slug}/status/confirmed`)
      .then(response => {
        this.setState({
          cases: [...response.data]
        })
      })
  };
  componentDidMount() {
    // this function to make a request that reflects data which all countries
    axios.get(this.state.countries_request)
      .then(response => {
        this.setState({
          countries: [...response.data]
        })
      })
  }
  renderMenu = () => {
    return(
      <div className="side-menu pb-3">
        <Logo />
        <List
          list={this.state.countries}
          handleClick={this.handleClick}
          scrollTo={this.scrollTo}
          title="countries"
        />
      </div>
    )
  }
  checkDisplay = (type) => {
    // re-rendering side menu
     return this.renderMenu();
  }
  render() {
    return (
        <>
        <Container fluid>
           <Row>
            <Col sm={3}>
               { this.checkDisplay(window.innerWidth <= 788 ? true : this.state.isMobile) }
            </Col>
             <div className="row ml-5 mt-5">
              { this.state.cases.length ?
                <Cases cases={this.state.cases}/> :
                <Empty title="There were no results for that today or you have to click in another country" />}
            </div>
           </Row>
        </Container>
        </>
    );
  }
}

export default DetailsPage;

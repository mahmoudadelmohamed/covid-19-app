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
      active_id: 'EG'
    };
      window.addEventListener('resize', this.changeMobile)
  }
  changeMobile = () => {
    window.matchMedia("(max-width: 1024px)").matches
    ? this.setState({ isMobile: true })
    : this.setState({ isMobile: false })
 }
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  handleClick = (name, id) => {
      axios.get(`${this.state.api_url}${id}/status/confirmed`)
        .then(response => {
          this.setState({
            cases: [...response.data]
          })
        })
  };
  componentDidMount() {
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
          active_id={this.state.active_id}
          title="countries"
        />
      </div>
    )
  }
  checkDisplay = (type) => {
     return this.renderMenu();
  }
  render() {
    console.log(this.state.cases.length);
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

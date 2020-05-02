import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
const SingleCase = ({ active_cases, confirmed_cases, death_cases, recoverd_cases, date }) => {
  let new_date = date.substring(0, 10);
  return (
    <Container fluid className="mt-5">
       <Row>
        <Col lg={12}>
          <h1 className="h1-2-light">{new_date}</h1>
           <div className="d-flex justify-content-between align-items-center flex-wrap mb-lg-20 mb-xl-40 mb-xs-40 mt-3">
              <h3 className="h3-light mr-3 title_uppercase">active cases: { active_cases }</h3>
              <h3 className="h3-light mr-3 title_uppercase">death cases: { death_cases }</h3>
              <h3 className="h3-light mr-3 title_uppercase">confirmed cases: { confirmed_cases }</h3>
              <h3 className="h3-light mr-3 title_uppercase">recoverd cases: { recoverd_cases }</h3>
           </div>
        </Col>
       </Row>
    </Container>
  );
}
export default SingleCase;
/*

*/

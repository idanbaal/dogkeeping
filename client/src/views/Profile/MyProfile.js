import React from 'react';
import { Card, CardBody, CardHeader, FormGroup, Col, Row, Label } from 'reactstrap';
export default class MyProfile extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col xs="12" sm="6" md="4">
        <img height="250" width="250" src={'../../assets/img/avatars/dog_profile.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
          </Col>
            <Col xs="12" sm="6" md="7">
          <Card>
            <CardBody>
              <FormGroup row>
                <Col md="3">
                  <Label><b>Name</b></Label>
                </Col>
                <Col xs="12" md="9">
                  <p className="form-control-static">Simba</p>
                </Col>
              </FormGroup>
              <FormGroup row>
              <Col md="3">
                <Label><b>Location</b></Label>
              </Col>
              <Col xs="12" md="9">
                <p className="form-control-static">Disney</p>
              </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label><b>Kind Of Dog</b></Label>
                </Col>
                <Col xs="12" md="9">
                  <p className="form-control-static">Golden Retriever</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label><b>Age</b></Label>
                </Col>
                <Col xs="12" md="9">
                  <p className="form-control-static">4</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label><b>Asking Price</b></Label>
                </Col>
                <Col xs="12" md="9">
                  <p className="form-control-static">40 - 50 ILS/Hr</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label><b>Time For Keeping</b></Label>
                </Col>
                <Col xs="12" md="9">
                  <p className="form-control-static">Every Sunday</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label><b>Owner</b></Label>
                </Col>
                <Col xs="12" md="9">
                  <p className="form-control-static">Eliran Sabag</p>
                </Col>
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
        </Row>


      </div>
    );
  }

}

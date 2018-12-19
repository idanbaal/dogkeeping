import React from 'react';
import {Button, Badge, Card, Input, CardBody, FormGroup, Label, FormText, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';


export default class SearchDoggySitter extends React.Component {

    render() {
        return(
            <div className="animated fadeIn">
              <Row>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Text Input</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                    <FormText color="muted">This is a help text</FormText>
                  </Col>
                </FormGroup>
                <col width="20px" />
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Filter By</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="select" name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Full Name</option>
                      <option value="2">Location</option>
                      <option value="3">Price</option>
                    </Input>
                  </Col>
                </FormGroup>
                <col width="20px" />
                <Col sm="2" md="1" >
                  <Button block color="primary">Search</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <CardHeader>
                      <i className="fa fa-align-justify"></i> Doggy Sitter List
                    </CardHeader>
                    <CardBody>
                      <Table hover bordered striped responsive size="sm">
                        <thead>
                        <tr>
                          <th>Full Name</th>
                          <th>Location</th>
                          <th>Price</th>
                          <th>Rate</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>Vishnu Serghei</td>
                          <td>2012/01/01</td>
                          <td>Member</td>
                          <td>
                            <Badge color="success">Active</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>Zbyněk Phoibos</td>
                          <td>2012/02/01</td>
                          <td>Staff</td>
                          <td>
                            <Badge color="danger">Banned</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>Einar Randall</td>
                          <td>2012/02/01</td>
                          <td>Admin</td>
                          <td>
                            <Badge color="secondary">Inactive</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>Félix Troels</td>
                          <td>2012/03/01</td>
                          <td>Member</td>
                          <td>
                            <Badge color="warning">Pending</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>Aulus Agmundr</td>
                          <td>2012/01/21</td>
                          <td>Staff</td>
                          <td>
                            <Badge color="success">Active</Badge>
                          </td>
                        </tr>
                        </tbody>
                      </Table>
                      <nav>
                        <Pagination>
                          <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                          <PaginationItem active>
                            <PaginationLink tag="button">1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                          <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                          <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                          <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                        </Pagination>
                      </nav>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
        );
    }

}

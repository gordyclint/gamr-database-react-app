import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  ListGroup,
  ListGroupItem,
  Media,
  Table
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactSVG } from "react-svg";
import Popular from "../components/Popular";
import api from "../utils/api";

const userProfile = (props) => {

  async function searchGame() {
    const res = await api.search();
    console.log(res, "Games!!");
  }

  return (
    <Container>
      <Row>
        <h1>Welcome to your Profile History</h1>
      </Row>
      <Row>
        <Table hover dark>
          <thead>
            <tr>
              <th>Game</th>
              <th>Rating</th>
              <th>Summary</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {props.searches.map(search => {
              return (
                <tr>
                  <td>{search.name}</td>
                  <td>{search.totalRatingCount}</td>
                  <td>{search.summary}</td>
                  <td>{search.url}</td>
                </tr>
              )
            })}

          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default userProfile;

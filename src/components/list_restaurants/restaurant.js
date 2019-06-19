import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Box, Column, Icon } from 'rbx';
import { Link } from 'react-router-dom';
import "../../styles/restaurants.scss";

const Restaurant = (props) => (
  <Column size="one-third" id="restaurant">
    <Link to={`/restaurants/${props.id}`}>
      <Box>
        <Column.Group gapless >
          <Column size={3} textAlign="centered">
            <img src={props.image_url} alt="new"/>
          </Column>

          <Column size={7} mobile={{size: 12}} className="infos">
            <h2 className="title has-text-custom-gray">{props.name}</h2>
            <h4 className="subtitle has-text-weight-bold">cozinha {props.category_title}</h4>
            <span className="dashed_box">Entrega ${props.delivery_tax}</span>
          </Column>

          <Column size={2} id="reviews">
            <Icon size="medium" color="warning">
              <FaStar />
            </Icon>
            <span className="has-text-warning has-text-weight-bold">{props.review || 0}</span>
          </Column>
        </Column.Group>
      </Box>
    </Link>
  </Column>
);

export default Restaurant;

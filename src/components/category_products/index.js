import React from 'react';
import { Title, Box, Column, Image } from 'rbx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal';
import "../../styles/product.scss";

const CategoryProducts = (props) => (
  <div id="product">
    <Title size="5">{props.title}</Title>
    <Column.Group gapSize={2} multiline>
      {props.products.map((product, i) => {
        return <Column size="6" key={i}>
                <Box>
                  <a href="#" onClick={ () => props.showModal('ADD_PRODUCT', {'product': product, 'restaurant': props.restaurant})}>
                    <Column.Group>
                      <Column size="three-fifths">
                        <Title size="6">{product.name}</Title>
                        <p>{product.description}</p>
                        <span className="dashed_box">Preço ${product.price}</span>
                      </Column>
                      <Column size="two-fifths">
                        <Image src={product.image_url} width="50%" />
                      </Column>
                    </Column.Group>
                  </a>
                </Box>
               </Column>
      })}
    </Column.Group>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({ showModal }, dispatch);

export default connect(null, mapDispatchToProps)(CategoryProducts);

import React, { Fragment, Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from 'rbx';
import { Link } from 'react-router-dom';

import '../../styles/categories.scss';
import slickSettings from './slick_settings';
import { loadRestaurants } from '../../actions/restaurant';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import api from '../../services/api';

class Categories extends Component {
  state = {
    categories: []
  }

  filterByCategory = (category) => {
    this.props.loadRestaurants(this.props.address, category)
  }

  componentWillMount() {
    api.loadCategories().then(response => {
      this.setState(() => ({ categories: response.data.categories }))
    });
  }

  render(){
    return(
      <Fragment>
        <h3 className="title is-size-4">Categorias</h3>
        <Box>
          <Slider {...slickSettings}>
            {this.state.categories.map((category, i) => {
              return(
                <a href="#" key={i} onClick={() => this.filterByCategory(category)}>
                  <div className="slider-item">
                    <img src={category.image_url} alt="new"/>
                    <span>{category.title}</span>
                  </div>
                </a>
              )
            })}
          </Slider>
        </Box>
    </Fragment>
    );
  }
};
const mapStateToProps = store => ({
  address: store.AddressReducer.address
})
const mapDispatchToProps = dispatch => bindActionCreators({ loadRestaurants }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Categories);

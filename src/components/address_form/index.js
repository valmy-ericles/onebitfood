import React, { Component, Fragment } from 'react';
import { Input, Column, Title, Button, Field, Control, Label, Select } from 'rbx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAddress } from '../../actions/address';
import { hideModal } from '../../actions/modal';
import stateList from './states_list';

class AddressForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      state: this.props.address.state,
      city: this.props.address.city,
      street: this.props.address.street,
      number: this.props.address.number,
      cep: this.props.address.cep,
      complement: this.props.address.complement,
      reference: this.props.address.reference
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    this.props.setAddress(this.state);
    this.props.hideModal('ADDRESS_MODAL');
    event.preventDefault();
  }
  render(){
    return(
      <Fragment>
        <Column.Group>
          <Column size={10} offset={1}>
            <Title size={6} className="has-text-custom-gray-darker status_msg">
              Endereço de Entrega
            </Title>
          </Column>
        </Column.Group>
        <Column.Group>
          <Column>
            <form onSubmit={this.handleSubmit}>
              <Field textAlign="left">
                <Label>Estado</Label>
                <Control>
                  <Select.Container fullwidth>
                    <Select required>
                      {stateList.map((state, i) => {
                        return <Select.Option key={i} value={state}>{state}</Select.Option>
                      })}
                    </Select>
                  </Select.Container>
                </Control>
              </Field>
              <Field textAlign="left">
                <Label>Cidade</Label>
                <Control>
                  <Input
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    placeholder="São Paulo..."
                    required
                  />
                </Control>
              </Field>
              <Field textAlign="left">
                <Label>Endereço</Label>
                <Control>
                  <Input
                    type="text"
                    name="street"
                    value={this.state.street}
                    onChange={this.handleInputChange}
                    placeholder="Av Paulista..."
                    required
                  />
                </Control>
              </Field>

                <Field.Body>
                  <Field textAlign="left">
                    <Label>Número</Label>
                    <Control>
                      <Input
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        placeholder="15"
                        required
                      />
                    </Control>
                  </Field>
                  <Field textAlign="left">
                    <Label>Cep</Label>
                    <Control>
                      <Input
                        type="text"
                        name="cep"
                        value={this.state.cep}
                        onChange={this.handleInputChange}
                        placeholder="13234-000"
                        required
                      />
                    </Control>
                  </Field>
                </Field.Body>

              <Field textAlign="left">
                <Label>Complemento</Label>
                <Control>
                  <Input
                    type="text"
                    name="complement"
                    value={this.state.complement}
                    onChange={this.handleInputChange}
                    placeholder="Av Paulista..."
                    required
                  />
                </Control>
              </Field>
              <br/>
                <Field kind="group" align="centered">
                  <Control>
                    <Button size="medium" color="custom-orange">
                      <span className="has-text-white">Salvar Endereço</span>
                    </Button>
                  </Control>
                </Field>
            </form>
          </Column>
        </Column.Group>
     </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  address: state.AddressReducer.address
});


const mapDispatchToProps = dispatch => bindActionCreators({ setAddress, hideModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);

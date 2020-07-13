import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import Axios from 'axios';
import PropTypes from 'prop-types';

import ModalDelete from './ModalDelete';

class PutUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      password2: '',
      email: '',
      phoneNumber: '',
      phoneNumber2: '',
      localisation: '',
      cv: '',
    };
  }

  putInfo() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const url = `http://localhost8080/api/v1/user/${id}`;
    Axios.put(url).then();
  }

  deleteInfo() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const url = `http://localhost8080/api/v1/user/${id}`;
    Axios.delete(url).then();
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      password2,
      phoneNumber,
      phoneNumber2,
      localisation,
      cv,
    } = this.state;
    return (
      <Container>
        <Form>
          <Row form className="mt-5">
            <Col md={4}>
              <FormGroup>
                <Label for="Nom">Nom</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastName}
                  onChange={(event) =>
                    this.setState({ lastName: event.target.value })
                  }
                  placeholder="Votre nom ..."
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="Prenom">Prenom</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={firstName}
                  onChange={(event) =>
                    this.setState({ firstName: event.target.value })
                  }
                  placeholder="Votre prénom ..."
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                  placeholder="Votre adresse email"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6}>
              <FormGroup>
                <Label for="Password">Mot de Passe*</Label>
                <Input
                  type="password"
                  name="password"
                  id="Password"
                  value={password}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                  placeholder="*******"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password2">Confirmez votre mot de passe*</Label>
                <Input
                  type="password"
                  name="password2"
                  id="password2"
                  value={password2}
                  onChange={(e) => this.setState({ password2: e.target.value })}
                  placeholder="********"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={4}>
              <Label for="Password">Téléphone 1</Label>
              <PhoneInput
                country="fr"
                onlyCountries={['fr', 'es']}
                value={phoneNumber}
                onChange={(event) => this.setState({ phoneNumber: event })}
              />
            </Col>
            <Col md={4}>
              <Label for="Password">Téléphone 2</Label>
              <PhoneInput
                country="fr"
                onlyCountries={['fr', 'es']}
                value={phoneNumber2}
                onChange={(event) => this.setState({ phoneNumber2: event })}
              />
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="localisation">Localisation</Label>
                <Input
                  type="text"
                  name="localisation"
                  id="localisation"
                  value={localisation}
                  onChange={(event) =>
                    this.setState({ localisation: event.target.value })
                  }
                  placeholder="Bayonne"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleFile" className="mt-3">
                  CV
                </Label>
                <Input type="file" name="file" id="exampleFile" value={cv} />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Button onClick={this.putInfo}>Modifier mes informations</Button>
            </Col>
            <Col>
              <ModalDelete onClick={this.deleteInfo} />
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

PutUser.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PutUser;

import React from 'react';
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
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import Axios from 'axios';
import PropTypes from 'prop-types';
import ModalDelete from './ModalDelete';

class PutCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      siretNumber: '',
      firstName: '',
      lastName: '',
      password: '',
      password2: '',
      email: '',
      phoneNumber: '',
      poste: '',
      sector: '',
      localisation: '',
      logo: '',
    };
  }

  putInfo() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const { password2, password } = this.state;
    if (password === password2) {
      const url = `http://localhost8080/api/v1/user/${id}`;
      Axios.put(url).then();
    } else {
      // <Alert color="danger">Mot de passe différent.</Alert>;
    }
  }

  deleteInfo() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const { password2, password } = this.state;
    if (password === password2) {
      const url = `http://localhost8080/api/v1/user/${id}`;
      Axios.delete(url).then();
    } else {
      // <Alert color="danger">Mot de passe différent.</Alert>;
    }
  }

  render() {
    const {
      companyName,
      siretNumber,
      firstName,
      lastName,
      email,
      password,
      password2,
      phoneNumber,
      phoneNumber2,
      localisation,
      poste,
      sector,
      logo,
    } = this.state;
    return (
      <Container>
        <Form>
          <Row form className="mt-5">
            <Col md={3}>
              <FormGroup>
                <Label for="Nom" className="mt-3">
                  Nom de l&apos;entreprise
                </Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={companyName}
                  onChange={(event) =>
                    this.setState({ companyName: event.target.value })
                  }
                  placeholder="Nom de votre entreprise"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="Nom" className="mt-3">
                  Numero de siret
                </Label>
                <Input
                  type="text"
                  name="siret"
                  id="siret"
                  value={siretNumber}
                  onChange={(event) =>
                    this.setState({ siretNumber: event.target.value })
                  }
                  placeholder="Votre numero de siret"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="Nom" className="mt-3">
                  Nom
                </Label>
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
            <Col md={3}>
              <FormGroup>
                <Label for="Prenom" className="mt-3">
                  Prenom
                </Label>
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
          </Row>
          <Row className="mt-5">
            <Col md={4}>
              <FormGroup>
                <Label for="Email" className="mt-3">
                  Email
                </Label>
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
            <Col md={4}>
              <FormGroup>
                <Label for="Password" className="mt-3">
                  Mot de Passe*
                </Label>
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
            <Col md={4}>
              <FormGroup>
                <Label for="Password" className="mt-3">
                  Confirmez votre mot de passe*
                </Label>
                <Input
                  type="password"
                  name="Password"
                  id="Password"
                  value={password2}
                  onChange={(event) =>
                    this.setState({ password2: event.target.value })
                  }
                  placeholder="********"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={4}>
              <Label for="Password" className="mt-3">
                Téléphone 1
              </Label>
              <PhoneInput
                country="fr"
                onlyCountries={['fr', 'es']}
                value={phoneNumber}
                onChange={(event) => this.setState({ phoneNumber: event })}
              />
            </Col>
            <Col md={4}>
              <Label for="Password" className="mt-3">
                Téléphone 2
              </Label>
              <PhoneInput
                country="fr"
                onlyCountries={['fr', 'es']}
                value={phoneNumber2}
                onChange={(event) => this.setState({ phoneNumber2: event })}
              />
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="localisation" className="mt-3">
                  Localisation
                </Label>
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
          <Row className="mt-5">
            <Col md={4}>
              <FormGroup>
                <Label for="localisation" className="mt-3">
                  Poste dans l&apos;entreprise
                </Label>
                <Input
                  type="text"
                  name="poste"
                  id="poste"
                  value={poste}
                  onChange={(event) =>
                    this.setState({ poste: event.target.value })
                  }
                  placeholder="Directeur"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="sector" className="mt-3">
                  Secteur d&apos;activité de l&apos;entrerpise
                </Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  value={sector}
                  onChange={(event) =>
                    this.setState({ sector: event.target.value })
                  }
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleFile" className="mt-3">
                  Logo
                </Label>
                <Input type="file" name="file" id="exampleFile" value={logo} />
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

PutCompany.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default PutCompany;

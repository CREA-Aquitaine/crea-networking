/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import moment from 'moment';
import { Button, notification } from 'antd';
import PropTypes from 'prop-types';
import Axios from 'axios';

// import store from '../../store';

import getBrowserElements from './getBrowserElements';

const host = process.env.REACT_APP_HOST;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
      errorInfo: '',
    };
    this.saveNewError = this.saveNewError.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidUpdate(prevProps, prevState) {
    const { error, errorInfo } = this.state;

    if (prevState.errorInfo !== errorInfo) {
      const url = window.location.href;
      const errorDate = moment().format('YYYY-MM-DD HH:mm:ss');
      const browserElements = getBrowserElements();

      const errorDatas = {
        error: error.toString(),
        componentStack: errorInfo.componentStack,
        url,
        date: errorDate,
        // UserId: userInfos.id,
        navigateur: browserElements[0],
        version: browserElements[1],
        os: browserElements[2],
      };

      // Contrôle de la taille du tableau des erreurs
      if (errorDatas.length >= 30) {
        errorDatas.shift();
        this.saveNewError(errorDatas);
      } else {
        this.saveNewError(errorDatas);
      }
    }
  }

  componentDidCatch(isError, isErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: isError,
      errorInfo: isErrorInfo,
    });
  }

  async saveNewError(errorObject) {
    try {
      await Axios.post(`${host}/api/v1/errorBoundary/create`, errorObject);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    const refreshPage = () => {
      window.location.reload();
    };

    // Bouton apparaissant dans la notification pour recharger la page
    const btn = (
      <Button type="primary" size="small" onClick={() => refreshPage()}>
        Recharger
      </Button>
    );

    if (hasError) {
      notification.error({
        message: 'Une erreur est survenue',
        description:
          'Excusez nous pour ce problème... Veuillez recharger la page',
        btn,
      });
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;

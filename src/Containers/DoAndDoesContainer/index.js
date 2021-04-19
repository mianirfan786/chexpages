/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import ActionCreators from '../../actions';
import { DoAndDoesScreen } from '../../Screens';

const DoAndDontContainer = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const doAndDont = localStorage.getItem('doAndDont');
    console.log(doAndDont);
    // const recommendScreen = localStorage.getItem('recommendScreen');
    if (doAndDont == true) {
      console.log('hahahah');
      history.push('/vehicleinspection');
    }
  }, []);

  const handleSubmit = (params) => {
    // const { changeRecommendation } = props;

    // changeRecommendation(setLoading, history);
    localStorage.setItem('doAndDont', true);
    history.push('/vehicleinspection');
  };

  return <DoAndDoesScreen companies={props.companies} handleSubmit={handleSubmit} loading={loading} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(DoAndDontContainer);

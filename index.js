// @flow

import React, { PureComponent, PropTypes } from 'react';
import { Text, StyleSheet } from 'react-native';
import Icons from './lib/FontAwesomeIconUnicodes';

/**
  * Example usage:
  *
  <Icon name='STRING' />
  *
**/


type Props = {
  name: string,
  style?: any
};


export default class Icon extends PureComponent<Props, void> {  

  render() {
    const { name, style, ...other } = this.props;

    return (
      <Text
        {...other}
        style={[styles.icon, style]}
      >
        {Icons[name]}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'FontAwesome',
    backgroundColor: 'transparent'
  },
});

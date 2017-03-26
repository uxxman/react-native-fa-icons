import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import Icons from './FontAwesomeIcons';

export default class Icon extends PureComponent {
  render() {
    const { name, style } = this.props;

    return (
      <Text style={[styles.icon, style]}>
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

import React, { PureComponent, PropTypes } from 'react';
import { Text, StyleSheet } from 'react-native';
import Icons from './lib/FontAwesomeIconUnicodes';

/**
  * Example usage:
  *
  <Icon
    name='STRING'
    style={OBJECT}
    allowFontScaling={BOOLEAN}
  />
  *
*/

export default class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.any,
    allowFontScaling: PropTypes.bool
  }


  render() {
    const { name, style, allowFontScaling } = this.props;

    return (
      <Text 
        allowFontScaling={allowFontScaling} 
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

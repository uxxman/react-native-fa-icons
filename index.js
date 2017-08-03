// @flow

import React, { PureComponent, PropTypes } from 'react';
import { Text, StyleSheet } from 'react-native';
import Icons from './lib/FontAwesomeIconUnicodes';

/**
  * Example usage:
  *
  <Icon
    onPress={() => console.log("item clicked")}
    name='STRING'
    style={OBJECT}
    allowFontScaling={BOOLEAN}
  />
  *
**/


type Props = {
  name: string,
  style?: any,
  allowFontScaling?: boolean
};


export default class Icon extends PureComponent<void, Props, void> {  
  static defaultProps = {
    onPress: ()=>{}
  }
  render() {
    const { name, style, allowFontScaling } = this.props;

    return (
      <Text
        onPress={this.props.onPress}
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

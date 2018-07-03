import React, { Component, PropTypes } from 'react';
import { TextInput } from 'react-native';

class TextArea extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    initialHeight: PropTypes.number,
    isEditing: PropTypes.bool,
    scrollViewRef: PropTypes.object,
  }

  static defaultProps = {
    initialHeight: 40,
    isEditing: true,
    scrollViewRef: null,
  }

  state = {
    height: this.props.initialHeight,
  }

  componentWillUnmount(){
    this._isUnmounted = false
  }

  focus(){
    this.refs.textInput.focus()
  }

  blur(){
    this.refs.textInput.blur()
  }

  _contentSizeChanged = e => {
    this.setState({
      height: e.nativeEvent.contentSize.height,
    }, () => {
      if (this.props.scrollViewRef) {
        setTimeout(() => {
          if (!this._isUnmounted) this.props.scrollViewRef.scrollToEnd()
        }, 0)
      }
    })
  }

  _onChangeText = text => {
    this.props.onChangeText(text)
  }

  render(){
    return (
      <TextInput
        ref = "textInput"
        multiline
        value = {this.props.text}
        style = {{ height: this.state.height, color: 'black', flex: 1 }}
        onChangeText = {this._onChangeText}
        onContentSizeChange = {this._contentSizeChanged}
        editable = {this.props.isEditing}
        blurOnSubmit = {false}
      />
    )
  }
}

export default TextArea;
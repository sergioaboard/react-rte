/* @flow */
import React, {Component} from 'react';
import IconButton from '../ui/IconButton';
import InputPopover from './InputPopover';
import cx from 'classnames';

type Props = {
  active: boolean;
  className: ?string;
};

export default class LinkButton extends Component<Props> {
  props: Props;

  constructor() {
    super(...arguments);
    this.state = {
      showInput: false,
    };
    this._togglePopover = this._togglePopover.bind(this);
    this._hidePopover = this._hidePopover.bind(this);
    this._setURL = this._setURL.bind(this);
  }

  render(): React.Element {
    let {props} = this;
    let className = cx(props.className, {
      'RichTextEditor-styleButton': true,
      'RichTextEditor-activeButton': props.active,
      'ui-link-button': true,
    });
    return (
      <div className="ui-button-wrap">
        <IconButton
          className={className}
          label="Link"
          iconName="link"
          onClick={this._togglePopover}
        />
        {this._renderPopover()}
      </div>
    );
  }

  _renderPopover() {
    if (!this.state.showInput) {
      return null;
    }
    return (
      <InputPopover
        onSubmit={this._setURL}
        onCancel={this._hidePopover}
      />
    );
  }

  _togglePopover() {
    this.setState({
      showInput: !this.state.showInput,
    });
  }

  _hidePopover() {
    this.setState({
      showInput: false,
    });
  }

  _setURL(url: string) {
    console.log('add link', url);
    this._hidePopover();
  }
}
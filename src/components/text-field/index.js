import * as React from 'react'

export class TextField extends React.PureComponent {
  handleInput = e => {
    this.props.onChange(e.target.value)
  }
  render() {
    const { value, placeholder, type } = this.props
    return (
      <input
        type={type}
        onChange={this.handleInput}
        value={value}
        placeholder={placeholder}
      />
    )
  }
}

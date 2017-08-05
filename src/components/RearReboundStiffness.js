import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button, Card } from 'reactstrap'

class RearReboundStiffness extends Component {
  constructor (props) {
    super(props)

    this.state = {
      stiffest: '',
      softest: '',
      weight: '',
      setting: '',
      bumpStiffnes:''
    }
  }

  getSetting = () => {
    let stiff = parseFloat(this.state.stiffest)
    let soft = parseFloat(this.state.softest)
    let displacement = parseFloat(this.state.weight)
    return  (((stiff-soft)*displacement)+soft).toFixed(2)
  }

  getStiffness = (setting) => {
    return parseFloat(setting)*0.65
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
     this.setState({
        setting: this.getSetting(),
        bumpStiffnes: this.getStiffness(this.getSetting())
    });
  }

  render () {
    return (
      <Card>
       <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="stiffest">Stiffest Setting</Label>
          <Input type="text" id="stiffest" onChange={(evt) => this.setState({ stiffest: evt.target.value })} />
        </FormGroup>
       <FormGroup>
          <Label for="softest">Softest Setting</Label>
          <Input type="text" id="softest" onChange={(evt) => this.setState({ softest: evt.target.value })} />
        </FormGroup>
        <FormGroup>
          <Label for="stiffest">Weight Displacement</Label>
          <Input type="text" id="stiffest" onChange={(evt) => this.setState({ weight: evt.target.value })} />
        </FormGroup>
        <Button type="submit" color="primary" >Math</Button>
        <FormGroup>
          <Label for="setting">Bump Stiffness:{this.state.bumpStiffnes}</Label>
        </FormGroup>
         <FormGroup>
          <Label for="setting">Setting:{this.state.setting}</Label>
        </FormGroup>
      </Form>
      </Card>
    )
  }
}

export default RearReboundStiffness

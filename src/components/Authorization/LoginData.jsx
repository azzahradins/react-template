import { Component } from "react";
import { Form } from "react-final-form";
import { Button, Card, CardBody, Container, FormGroup, Label, Row } from "reactstrap";
import InputField from "../Common/InputField";
import { Link } from "react-router-dom";

const LoginDataValidate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Email is Required'
  }

  if (!values.password) {
    errors.password = 'Password is Required'
  }

  return errors
}

class LoginData extends Component {
  render() {
    const { onSubmit } = this.props
    return (
      <Form
        onSubmit={onSubmit}
        validate={LoginDataValidate}
        render={({ handleSubmit }) => (
          <Container className="mt-5">
            <Row>
              <Card>
                <CardBody>
                  <form onSubmit={handleSubmit}>
                    <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                      <Label for="exampleEmail" className="mr-sm-2">
                        Email
                      </Label>
                      <InputField
                        key={'email'}
                        name={'email'}
                        type={'email'}
                        placeholder={'Email'}
                      />
                    </FormGroup>
                    <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                      <Label for="examplePassword" className="mr-sm-2">
                        Password
                      </Label>
                      <InputField
                        key={'password'}
                        name={'password'}
                        type={'password'}
                        placeholder={'Password'}
                      />
                    </FormGroup>
                    <Button type="submit" color="primary" className="me-2"> Login </Button>
                    <Link to="/" className="btn btn-warning"> Back to home </Link>
                  </form>
                  Check console for login values
                </CardBody>
              </Card>
            </Row>
          </Container>
        )}>
      </Form>
    );
  }
}

export default LoginData;
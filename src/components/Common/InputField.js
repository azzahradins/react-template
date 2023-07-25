import { Field } from "react-final-form";
import { Input } from "reactstrap";

function InputField(props) {
  const {
    key,
    name,
    type,
    label,
  } = props
  return (
    <Field name={name} key={key}>
      {({ input, meta }) => (
        <div>
          <Input
            {...input}
            type={type}
            placeholder={label}
            invalid={meta.error && meta.touched}
          />
          {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
        </div>
      )}
    </Field>
  );
}

export default InputField;
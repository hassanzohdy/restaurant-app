import { useFormControl, FormControlProps } from "@mongez/react-form";

export default function TextInput(props: FormControlProps) {
  const { value, changeValue } = useFormControl(props);

  return (
    <div>
      <label
        className="block text-black font-medium text-base mb-2"
        htmlFor={props.id}>
        {props.placeholder}
      </label>
      <input
        name={props.name}
        type={props.type}
        id={props.id}
        value={value}
        onChange={e => {
          changeValue(e.target.value);
        }}
        placeholder={props.placeholder}
      />
      {/* <span>{errors.firstName?.message as string}</span> */}
    </div>
  );

  // TextInput.props = {
  //   type: "text",
  // };
}

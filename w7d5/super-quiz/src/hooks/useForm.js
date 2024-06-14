import { useState } from "react";
import useWow from "./useWow";

export default function useForm(initialFormData, onSubmit) {
  const { sayWow } = useWow();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { value, name } = event.target;

    // const updatedFormData= {...formData}
    // updatedFormData[name] = value

    // setFormData(updatedFormData)

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);
    // sayWow()
  };

  return { formData, handleChange, handleSubmit };
}

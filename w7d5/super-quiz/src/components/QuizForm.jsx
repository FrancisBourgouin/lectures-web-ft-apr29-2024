import useForm from "../hooks/useForm";

export default function QuizForm(props) {
  const { onSubmit, question } = props;
  const initialFormData = { answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialFormData, onSubmit);

  return (
    <form className="QuizForm" onSubmit={handleSubmit}>
      <p>{question}</p>
      <input
        type="text"
        name="answer"
        placeholder="Enter the answer"
        value={formData.answer}
        onChange={handleChange}
      />
      <button>Answer</button>
    </form>
  );
}

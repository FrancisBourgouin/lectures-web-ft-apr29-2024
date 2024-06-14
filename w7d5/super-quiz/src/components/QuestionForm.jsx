import useForm from "../hooks/useForm";
export default function QuestionForm(props) {
  // const [question, setQuestion] = useState();
  // const [answer, setAnswer] = useState();

  const initialFormData = { question: "", answer: "" };
  const { formData, handleChange, handleSubmit } = useForm(
    initialFormData,
    props.onSubmit
  );

  return (
    <form className="QuestionForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="question"
        placeholder="Enter the question"
        value={formData.question}
        onChange={handleChange}
      />
      <input
        type="text"
        name="answer"
        placeholder="Enter the answer"
        value={formData.answer}
        onChange={handleChange}
      />
      <button>Add question</button>
    </form>
  );
}

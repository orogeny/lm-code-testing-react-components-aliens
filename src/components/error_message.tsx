function ErrorMessage({ messages = [] }: { messages: string[] }) {
  if (messages.length === 0) return null;

  return (
    <ul className="error-message__list">
      {messages.map((msg) => (
        <li key={msg}>{msg}</li>
      ))}
    </ul>
  );
}

export default ErrorMessage;

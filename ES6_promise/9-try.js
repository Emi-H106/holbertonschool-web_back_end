export default function guardrail(mathFunction) {
  const queque = [];
  try {
    const value = mathFunction();
    queque.push(value);
  } catch(err) {
    queque.push(err.toString());
  } finally {
    queque.push("Guardrail was processed");
  }
    return queque;
}
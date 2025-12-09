export default function CounterButton({label, func}) {
    return (
        <button onClick={func}>{label}</button>
    )
}

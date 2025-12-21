import MouseTracker from './components/MouseTracker.jsx'

function MouseCoordinates({ x, y }) {
  return (
    <p style={{textAlign: 'center'}}> X: {x}, Y: {y}</p>
  )
}

function MousePointer({ x, y }) {
  return (
    <div style={{position: 'absolute', top: y, left: x, width: '16px', height: '16px', backgroundColor: 'red', borderRadius: '50%', transform: 'translate(-50%, -50%)'}}>
    </div>
  )
}

function App() {

  return (
    <>
      <MouseTracker render={(x, y) => MouseCoordinates(x, y)} />
      <MouseTracker render={(x, y) => MousePointer(x, y)}/>
    </>
  )
}

export default App

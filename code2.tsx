import React, { Component } from 'react';

// Étape 1 : Définir les types pour les props et le state
interface CounterProps {}

interface CounterState {
  count: number;
}

// Étape 2 : Spécifier les types dans la classe avec <Props, State>
class Counter extends Component<CounterProps, CounterState> {
  // Étape 3 : Initialisation du state avec le bon type
  state: CounterState = {
    count: 0,
  };

  // Étape 4 : Fonction fléchée pour conserver le contexte `this`
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

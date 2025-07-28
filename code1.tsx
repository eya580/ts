import React from 'react';

// Étape 1 : Définir une interface pour typer les props
interface GreetingProps {
  name: string;
}

// Étape 2 : Typage du paramètre de la fonction avec l'interface
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div> Hello, {name}! </div>;
};

export default Greeting;
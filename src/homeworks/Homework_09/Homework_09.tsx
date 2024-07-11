import React, { useEffect, useState } from 'react';
import { Container, Card, Button, ErrorMessage } from './styles';
import {Joke} from 'components/Input/types';

const Homework_09 = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJoke(data);
      setError(null);
    } catch (err) {
      setError('Ошибка при получении данных');
      setJoke(null);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Container>
      <h1>Random Joke</h1>
      {joke && (
        <Card>
          <h2>{joke.setup}</h2>
          <p>{joke.punchline}</p>
        </Card>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button onClick={fetchJoke}>Get Another Joke</Button>
    </Container>
  );
};

export default Homework_09;
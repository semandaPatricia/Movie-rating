import React, { useState } from 'react';
//import axios from 'axios';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';
import { useMutation, useQuery } from '@tanstack/react-query'; // Imported useMutation and useQuery
import { useNavigate } from 'react-router-dom';
import { mutationLogin } from './mutations';

export const Auth: React.FC = () => { // Added React.FC type
  const navigate = useNavigate(); // Corrected usage of useNavigate
  
  const { data, mutate } = useMutation<{ guest_session_id: string }>({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
    onSuccess: (data) => { // Added onSuccess callback
      localStorage.setItem("guest_session_id", data.guest_session_id);
      navigate("/"); // Navigate on success
    },
  });

  const handleLogin = async () => {
    await mutate();
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleLogin} error={data === undefined}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              value={''} // Placeholder value, replace with actual username state
              // onChange={(e) => setUsername(e.target.value)} // Uncomment and replace with actual onChange handler
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={''} // Placeholder value, replace with actual password state
              // onChange={(e) => setPassword(e.target.value)} // Uncomment and replace with actual onChange handler
            />
            <Button color="teal" fluid size="large" disabled={false /* Replace with actual condition */}>
              {'Login'} {/* Replace with actual condition for displaying loading state */}
            </Button>
          </Segment>
          {data === undefined && <Message error content={'Invalid username or password'} />}
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Auth;


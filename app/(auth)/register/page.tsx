"use client";

import { registerUser } from "@/actions/auth/register";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React from "react";
import { FaCheck } from "react-icons/fa";

const RegisterPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const res = await registerUser(data.name, data.email, data.password);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex-1 flex flex-col align-middle">
      <Card className="m-auto">
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <Card.Header>
            <Card.Title className="text-2xl font-bold">Register</Card.Title>
          </Card.Header>
          <Card.Content>
            <TextField isRequired name="name" type="text">
              <Label>Nama</Label>
              <Input placeholder="john" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
              <FieldError />
            </TextField>
          </Card.Content>
          <Card.Footer className="flex gap-2 justify-end">
            <Button type="reset" variant="secondary">
              Reset
            </Button>
            <Button type="submit">
              <FaCheck />
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterPage;

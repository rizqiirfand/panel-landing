"use client";
import { loginUser } from "@/app/actions/auth/login";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";

const LoginPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      await loginUser(data.email, data.password);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex-1 flex flex-col align-middle">
      <Card className="m-auto">
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <Card.Header>
            <Card.Title className="text-2xl font-bold">Login</Card.Title>
          </Card.Header>
          <Card.Content>
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
              <FieldError />
            </TextField>
          </Card.Content>
          <Card.Footer className="flex gap-2 justify-end">
            <Button type="submit">Login</Button>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;

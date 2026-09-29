import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Bubble } from "@/components/ui/bubble";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function LoginForm() {
  return (
    <div>
      <form className="m-auto">
        <FieldSet className="w-md h-full p-8 m-auto border border-orange-600  rounded-sm  ">
          <FieldLegend>Login</FieldLegend>
          <FieldDescription> Login as user or admin</FieldDescription>

          <FieldGroup className=" flex min-w-sm max-w-md items-center justify-between p-4 border-b">
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input
                type="email"
                id="loginEmail"
                placeholder="Email address"
                required
              />
            </Field>
            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input
                type="password"
                id="loginPassword"
                placeholder="Enter Password"
                required
              />
              <Button
                type="submit"
                className="color-orange-500 border border-orange-400"
              >
                Login
              </Button>
              <Button className="font-light text-blue-500">
                Forget password?
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}

export default LoginForm;

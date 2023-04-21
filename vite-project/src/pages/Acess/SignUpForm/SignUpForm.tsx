import {DeepMap, FieldError, FieldValues, UseFormRegister} from "react-hook-form"

interface SignUpData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

interface SignUpFormProps {
    handleSignUp: () => void;
    errors: DeepMap<FieldValues, FieldError>
    register: UseFormRegister<SignUpData>
    loading: boolean
}

const SignUpForm = ({handleSignUp, errors, register, loading}: SignUpFormProps) =>(
    <form onSubmit={handleSignUp}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <span>This field is required</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
)

export default SignUpForm
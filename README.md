# Multistep Form

The form is designed to collect user information over multiple steps, providing a smooth and user-friendly experience. It uses functional components and React hooks to manage state and form validation efficiently.

<br>

### Screenshorts

![image](https://github.com/azlibdar/r-multistep-form/assets/121456353/bc793f32-fdd4-4e2f-8f24-d61a69b8b8c8)

![image](https://github.com/azlibdar/r-multistep-form/assets/121456353/451d794e-b815-4272-8c8c-892d9561eea9)

![image](https://github.com/azlibdar/r-multistep-form/assets/121456353/847dae69-67b5-4a21-8668-c69d31c8e13e)

<br>

### Features

- **Step-by-Step Navigation:** The form is divided into three steps: Personal Details, Address, and Confirmation. Users can navigate between steps using "Next" and "Previous" buttons.
- **Form Validation:** The form utilizes native HTML form validation to ensure that all required fields are filled out correctly before allowing the user to proceed to the next step.
- **State Management:** The component uses the useState and useRef hooks to manage form data and track the current step.
- **Form Submission:** On the final step, the user can submit the form, which triggers an alert and logs the form data to the console.
- **Responsive Design:** The form is designed to be responsive and works well on various screen sizes.
- **Reusable Components:** The form uses reusable components like InputField, Button, and Table to create a modular and maintainable codebase.

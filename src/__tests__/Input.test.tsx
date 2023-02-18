import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RightSection from "../component/Login/RightSection";

describe("Renders Login form", () => {
  it("Email Input", () => {
    render(<RightSection />);

    expect(
      screen.getByRole("textbox", {
        name: /email/i,
      })
    ).toBeInTheDocument();
  });

  it("has password input", () => {
    render(<RightSection />);

    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("has login button", () => {
    render(<RightSection />);

    expect(
      screen.getByRole("button", {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });
});

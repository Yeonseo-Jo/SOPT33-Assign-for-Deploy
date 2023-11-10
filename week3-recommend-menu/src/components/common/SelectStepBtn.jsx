import styled, { css } from "styled-components";

const SelectStepBtn = ({
  isAbsolute = false,
  selectedMethod,
  isDisabled,
  innerTxt,
  setStep,
}) => {
  const handleStep = () => {
    if (isDisabled) return;

    switch (innerTxt) {
      case "START!":
        console.log("?>DSF");
        selectedMethod === "optional"
          ? setStep((prev) => prev + 1)
          : setStep(4);
        break;
      case "이전으로":
        setStep((prev) => prev - 1);
        break;
      case "다음으로":
      case "결과보기":
        setStep((prev) => prev + 1);
        break;
      case "처음으로":
        setStep(0);
        break;
    }
  };

  return (
    <>
      <StepBtn
        $isAbsolute={isAbsolute}
        $isDisabled={isDisabled}
        onClick={handleStep}
      >
        {innerTxt}
      </StepBtn>
    </>
  );
};

export default SelectStepBtn;

const StepBtn = styled.button`
  width: 7rem;
  height: 4rem;

  color: ${({ theme }) => theme.colors.pointColor};
  background-color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;

  border-radius: 0.5rem;

  &:hover {
    border: 0.2rem solid ${({ theme }) => theme.colors.pointColor};
  }

  ${({ $isAbsolute }) =>
    $isAbsolute &&
    css`
      position: absolute;
      right: 0;

      margin-right: 5rem;
    `}

  ${({ $isDisabled }) =>
    $isDisabled &&
    `
    filter: opacity(50%);
    `};
`;
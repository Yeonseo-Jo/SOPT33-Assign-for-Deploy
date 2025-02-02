import { useState } from "react";
import SelectMenuBtn from "../common/SelectMenuBtn";
import SelectStepBtn from "../common/SelectStepBtn";
import {
  CurrStepTag,
  CurrStepWrapper,
  MianContentsBodyWrapper,
  SelectMenuBtnWrapper,
  StepBtnWrapper,
} from "../../styles/common/CommonContentsStyle";
import { COUNTRY_MENUS } from "../../assets/data/MENU_CATEGORY";

const SelectCountryMenu = ({
  selectedMenu,
  setSelectedMenu,
  step,
  setStep,
  maxStep,
}) => {
  //STEP 1 : 나라별 메뉴(Country) 선택 단계
  // 이미 선택한 메뉴의 나라가 있다면, 불러올수 있도록 useState의 초기화 값으로 활용
  const [selectedCountry, setSelectedCountry] = useState(selectedMenu.country);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setSelectedMenu((prev) => {
      return { ...prev, country: country };
    });
  };

  return (
    <MianContentsBodyWrapper>
      <CurrStepWrapper>
        <CurrStepTag>
          {step} / {maxStep}
        </CurrStepTag>
      </CurrStepWrapper>

      <SelectMenuBtnWrapper>
        {COUNTRY_MENUS.map(({ country, title }) => {
          return (
            <SelectMenuBtn
              key={country}
              innerTxt={title}
              isSelected={selectedCountry === country}
              onClick={() => handleSelectCountry(country)}
            />
          );
        })}
      </SelectMenuBtnWrapper>

      <StepBtnWrapper>
        <SelectStepBtn innerTxt={"이전으로"} setStep={setStep} />
        <SelectStepBtn
          isDisabled={selectedCountry ? false : true}
          innerTxt={"다음으로"}
          setStep={setStep}
        />
      </StepBtnWrapper>
    </MianContentsBodyWrapper>
  );
};

export default SelectCountryMenu;

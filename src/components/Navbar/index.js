import React from "react";
import * as S from "./style";

function Navbar() {
  return (
    <S.Wrapper>
      <S.Navbar>
        <S.NavbarList>
          <S.NavbarLink href="/">All</S.NavbarLink>
        </S.NavbarList>

        <S.NavbarList>
          <S.NavbarLink href="/">Manpower Supply</S.NavbarLink>
        </S.NavbarList>

        <S.NavbarList>
          <S.NavbarLink href="/">Mobile App / Websites</S.NavbarLink>
        </S.NavbarList>

        <S.NavbarList>
          <S.NavbarLink href="/">UI/UX Design</S.NavbarLink>
        </S.NavbarList>
        
      </S.Navbar>

    </S.Wrapper>
  );
}

export default Navbar;

import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 90px;
  padding-bottom: 60px;
`

export const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavbarList = styled.li`
  list-style-type: none;
  padding: 8px 16px;

  &:hover {
    background-color: #F8D000;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 15%);
    border-radius: 8px;
  }
`

export const NavbarLink = styled.a`
  color: #212529;
  font-weight: bolder;
  text-decoration: none;
  font-size: 18px;
`

import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";
import Navigation from "components/Navigation";
import Link from "next/link";
import HeaderContext from "../contexts/HeaderContext";
import { useContext } from "react";
import ToggleMenuItemsColor from "./ToggleMenuItemsColor";

function Header({ isDark, navigation }) {
  const {menuItems} = useContext(HeaderContext);
  return (
    <HeaderStyled isDark={isDark}>
      <Box variant="container">
        <Flex justifyContent="space-between" alignItems="center">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/images/logo.svg" alt="logo site" />
                <span className="logo-text">Next Video</span>
              </a>
            </Link>
          </div>
          <Navigation menuItems={menuItems} />
          <ToggleMenuItemsColor />
        </Flex>
      </Box>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: ${props => (props.isDark ? "#000" : "#efefef")};
  padding: 20px;
  .logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-text {
      color: #333;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
    }
  }
`;

export default Header;

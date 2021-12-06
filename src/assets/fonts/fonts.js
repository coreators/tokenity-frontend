import { createGlobalStyle } from 'styled-components';
import ReadexPro from './readex-pro-v5-latin/readex-pro-v5-latin-regular.woff';
import ReadexProBold from './readex-pro-v5-latin/readex-pro-v5-latin-700.woff';
import Roboto from './roboto-v29-latin/roboto-v29-latin-regular.woff';
import RobotoBold from './roboto-v29-latin/roboto-v29-latin-700.woff';

export default createGlobalStyle`
  @font-face {
    font-family: "ReadexPro";
    src: local("Readex Pro"),
    url(${ReadexPro}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "ReadexProBold";
    src: local("Readex Pro Bold"),
    url(${ReadexProBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),
    url(${Roboto}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "RobotoBold";
    src: local("Roboto Bold"),
    url(${RobotoBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
`;

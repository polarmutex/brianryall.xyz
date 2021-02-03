import styled from 'styled-components';

import colors from '../../../common';

export const Nav = styled.div`
background: #222;
margin: 0;
  padding: 0 15px;
  a {
      color: white;
  text-decoration: none;
  }
    box-sizing: border-box;
`;

export const Container = styled.ul`
list-style-type: none;
// Mobile
display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  li {
      a {
          display: block;
  padding: 15px 5px;
      }
  }
// tablet
@media all and (min-width: 700px) {
justify-content: center;
}
//desktop
@media all and (min-width: 960px) {
    align-items: flex-start;
    flex-wrap: nowrap;
    background: none;
}
`;

export const Logo = styled.li`
font-size: 20px;
  padding: 7.5px 10px 7.5px 0;
  //tablet
  @media all and (min-width: 700px) {
      flex: 1;
  }
//desktop
@media all and (min-width: 960px) {
order: 0;
}
`;

export const YellowContainer = styled.span`
`;

export const Item = styled.li`
padding: 10px;
// mobile
order: 3;
  width: 100%;
  text-align: center;
  display: none;
// desktop
@media all and (min-width: 960px) {
order: 1;
    position: relative;
    display: block;
    width: auto;
}
`;

export const Icon = styled(Item)`
padding: 9px 5px;
//mobile
order: 2;
//tablet
  @media all and (min-width: 700px) {
width: auto;
    order: 1;
    display: block;
  }
//desktop
@media all and (min-width: 960px) {
order: 2;
}
`;

export const Toggle = styled.li`
// mobile
order: 1;
  font-size: 20px;
  //tablet
  @media all and (min-width: 700px) {
  flex: 1;
    text-align: right;
    order: 2;
  }
@media all and (min-width: 960px) {
display: none;
}
`;

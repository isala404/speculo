import React, { useState, useLayoutEffect } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import "../../style/fonts.css";
import { BasicButton } from "../button/button.component";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export const Header = () => {
  const [width, height] = useWindowSize();
  return (
    <HeaderDiv>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <HeaderHeadingDiv>
              <Row>
                <HeaderHeading>Real-Time Face Detection</HeaderHeading>
              </Row>
              <Row>
                <SubText>
                  Detect faces with ease with Speculo. See who is in your video
                  footage with a simple click.
                </SubText>
              </Row>
              <Row>
                <Col style={{padding: "1em 1em 1em 0em"}}>
                  <Input placeholder={"example@gmail.com"} type="text"/>
                </Col>
                <Col style={{padding: "1em 0em 1em 0em"}}>
                  <BasicButton buttonTitle="Get Started" toggleShadow={true}/>
                </Col>
              </Row>
              <Row>
                <SubText fontSize={"0.7em"} fontColor="grey">
                  Try it for free • No credit card required
                </SubText>
              </Row>
            </HeaderHeadingDiv>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div style={{overflow:"hidden"}}>
            {/* TODO: Add image here */}
            </div>
          </Col>
        </Row>
      </Grid>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  background: #0b162b;
  color: white;
`;

const HeaderHeading = styled.h1`
  font-weight: bold;
  font-size: 3em;
  text-align: left;
  font-family: "Gilroy-SemiBold";
`;

const HeaderHeadingDiv = styled.div`
  padding: ${props =>
    props.divWidth > 992 ? "15em 5em 15em 5em" : "5em 5em 5em 5em"};
`;

const SubText = styled.span`
  font-size: ${props => (props.fontSize === null ? "1em" : props.fontSize)};
  color: ${props => (props.fontColor === null ? "white" : props.fontColor)};
  text-align: left;
  z-index: 0;
  font-family: "Lexend Deca", sans-serif;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const Input = styled.input`
  background: white;
  padding: 0.4em;
  width: 250px;
  border: 1px solid #FFFFFF;
  border-radius: 3px;
  box-shadow: 0px 0px 100px 2px #2bba85;
  height: 10;
  transition: 0.3s;
  font-family: "Lexend Deca", sans-serif;
  &:hover {
    box-shadow: 0px 0px 200px 10px #1ddd96;
  }
`;

const imgURL =
  "https://www.itl.cat/pngfile/big/39-394465_background-pictures-hd.jpg";

const string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor justo at turpis mollis, et condimentum magna bibendum. Aliquam viverra magna lorem, quis sagittis ante tincidunt a. Etiam venenatis ipsum elementum lectus consectetur, vel efficitur enim euismod. Quisque accumsan erat ut malesuada egestas. Curabitur volutpat dui sit amet odio maximus, eget imperdiet arcu convallis. Sed sit amet sapien mi. Fusce ligula elit, faucibus hendrerit lacus ut, suscipit finibus diam. Nulla laoreet, nulla eu vulputate efficitur, mauris dolor maximus eros, a ultrices quam sem et enim. Praesent sodales leo nec semper scelerisque. Sed aliquam finibus egesta. Nunc lectus nibh, vestibulum et auctor eu, feugiat tempus nisi. Etiam sem quam, convallis convallis posuere vitae, gravida id justo. Aliquam erat volutpat. Curabitur turpis eros, tincidunt nec diam non, aliquam feugiat nisi. Cras quis vestibulum lacus. Proin libero nisl, tempor nec nunc at, tempor fringilla ante. Maecenas purus ex, vulputate fringilla feugiat suscipit, rutrum vel eros. Duis lectus nisl, eleifend ut accumsan non, dapibus a odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas faucibus dui suscipit, fermentum dui eu, ornare diam. Aliquam maximus elementum leo at sagittis. Sed vel lobortis massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque hendrerit dictum odio id auctor. Donec id fermentum mi, vitae malesuada nunc. Sed nec vulputate mauris, eu gravida nisl. Quisque est neque, viverra nec rutrum at, placerat sed est. Integer mollis enim id purus sagittis sagittis. Donec vel aliquet lorem. Suspendisse efficitur dapibus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus, felis nec consectetur laoreet, orci mauris luctus ligula, sed posuere purus enim a metus. Quisque iaculis urna eu tempor tempor. Proin ut dolor rhoncus, finibus ex at, blandit quam. Fusce fermentum, ante sit amet posuere consequat, magna nulla hendrerit neque, nec auctor dui erat et mi. Aenean gravida mattis arcu vel posuere. Etiam arcu ipsum, sollicitudin in pellentesque quis, blandit at massa. Nam at ultricies lectus, id mattis neque. Sed pulvinar urna non mi sagittis, a pulvinar nisl rhoncus. Maecenas quis ligula non tellus interdum dictum. Vivamus malesuada egestas luctus. Pellentesque tempor tortor eget leo iaculis, sed dapibus ante hendrerit. Pellentesque sed neque sed turpis laoreet luctus. Phasellus convallis egestas elit, viverra semper quam tincidunt vitae. Aliquam sed leo eu urna efficitur maximus. Cras iaculis dui non condimentum auctor. Suspendisse id ullamcorper erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin consectetur, dui at imperdiet lobortis, nibh dolor malesuada nibh, placerat volutpat justo nunc et sem. Duis luctus, ex id consectetur aliquam, ipsum ligula tincidunt nibh, id facilisis lorem nibh nec nisi. In hac habitasse platea dictumst. Morbi tincidunt elit ac ullamcorper interdum. Curabitur vel nibh posuere, volutpat velit eu, ullamcorper lacus. Mauris non leo congue, molestie massa a, eleifend massa. Suspendisse placerat malesuada mattis. Nulla hendrerit dolor lectus, eget cursus magna lacinia vitae. Mauris pellentesque ligula neque, et luctus elit aliquet in. Mauris consequat urna vel aliquam venenatis. Mauris sed odio pulvinar, laoreet augue in, viverra felis. Quisque a nunc ut nisl tincidunt pharetra nec in neque. Phasellus ultrices metus id bibendum finibus. Etiam a ligula justo. Nulla lobortis lorem ac mi cursus, et lacinia purus porta.";

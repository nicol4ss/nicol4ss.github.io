import { HFlow, VFlow, Text } from "bold-ui";
import Typed from "react-typed";
import { css } from "@emotion/core";
import test from "../assets/teste2.gif";

function Home() {
  return (
    <VFlow
      style={css`
        color: white;
        margin: 1rem;
        @media screen and (max-width: 420px) {
          margin-top: -2rem;
        }
      `}
    >
      <VFlow
        style={css`
          @media screen and (max-width: 420px) {
            height: 14rem;
          }
        `}
      >
        <Text
          fontWeight="bold"
          fontSize={2}
          style={css`
            color: white;
          `}
        >
          Olá, Me chamo{" "}
          <Text
            fontWeight="bold"
            fontSize={2}
            style={css`
              color: #61ffca;
            `}
          >
            Nicolas
          </Text>
          .
        </Text>

        <Text
          fontWeight="bold"
          fontSize={2.5}
          style={css`
            color: white;
          `}
        >
          <Typed
            strings={[
              "Desenvolvedor Full Stack.",
              "Apaixonado por Tecnologia.",
              "Estudante de Ciências da Computação.",
            ]}
            typeSpeed={50}
            backSpeed={80}
            loop
          />
        </Text>
      </VFlow>
      <img src={test} className="giff" />
    </VFlow>
  );
}

export default Home;

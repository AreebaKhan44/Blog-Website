import {
  Links,
  Container,
  Chrome,
  Firefox,
  ColunaImagem,
  Paragrafo,
  Titulo,
  Linha,
  Textos,
} from "./styled";
import image01 from "./../../assets/images/image01.jpeg";
import { i18n } from "./../../translate/i18n";
export default function About() {
  return (
    <Container>
      <Linha>
        <Textos>
          <Titulo>{i18n.t("about.titulo")}</Titulo>
          <Paragrafo>{i18n.t("about.paragrafo")}Basic</Paragrafo>
          <Links>
            <Chrome           
              target="_blank"
            >
              {i18n.t("about.buttons.chrome")}
            </Chrome>
            <Firefox
              href="https://www.mozilla.org/pt-BR/firefox/new/"
              target="_blank"
            >
              {i18n.t("about.buttons.firefox")}
            </Firefox>
          </Links>
        </Textos>
        <ColunaImagem>
          <img src={image01} alt="image1" />
        </ColunaImagem>
      </Linha>
    </Container>
  );
}

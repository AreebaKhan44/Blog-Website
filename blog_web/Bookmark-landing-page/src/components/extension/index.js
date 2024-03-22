import {
  Container,
  Links,
  Paragrafo,
  Titulo,
  Cards,
  Card,
  Linha,
  TituloCard,
  Imagem,
} from "./styled";
import basic from "./../../assets/images/basic.jpg";
import premium from "./../../assets/images/premium.jpg";
import standard from "./../../assets/images/standard.jpg";
import { i18n } from "./../../translate/i18n";
import button from "./../../assets/images/button.png";
export default function extension() {
  return (
    <Container>
      {/* <Titulo>{i18n.t("extension.titulo")}</Titulo>
      <Paragrafo>{i18n.t("extension.paragrafo")}</Paragrafo> */}
      <Cards>
        <Card>
          <Imagem src={basic} alt="chrome logo" />
          <p>Free Trial</p>
          <p>All Access</p>
          <p>10 free process</p>
          <Linha />
          <Links href="/">{i18n.t("extension.button")}</Links>
          <buttonImg src={button} alt="button"/>
        </Card>
        <Card id="card2">
          <Imagem src={premium} alt="firefox logo" />
          
          <p>All Access</p>
          <p>50 free process</p>
          <p>PDF File</p>
          <p>20$</p>
          <Linha />
          <Links href="/">{i18n.t("extension.button")}</Links>
          <buttonImg src={button} alt="button"/>
        </Card>
        <Card id="card3">
          <Imagem src={standard} alt="opera logo" />
          {/* <Paragrafo>{i18n.t("extension.opera.paragrafo")}</Paragrafo> */}
          <p>Unlimited</p>
          <p>All Access</p>
          <p>PDF File</p>
          <p>Extra suggestion</p>
          <p>40$</p>
          <Linha />
          <Links href="/">{i18n.t("extension.button")}</Links>
          <buttonImg src={button} alt="button"/>
        </Card>
      </Cards>
    </Container>
  );
}

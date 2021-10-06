import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "react-grid-system";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import api from "../API";
import path from "path";

//import css or image
import "../components/assets/css/Home.css";
import send_email from "../components/assets/images/send_email.jpg";

const style = {
  grid: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
  },
  col: {
    paddingLeft: 0,
    paddingRight: 0,
  },
};

function Home(props) {
  const [body, setBody] = useState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api
      .get("/blog")
      .then((response) => {
        setBody(response.data);
        setTotal(response.data.length);
      })
      .catch((error) => console.log(error));
    console.log(__dirname);
  }, []);

  return (
    <>
      <div className="section_cards" id="section_cards">
        <Container>
          <Row>
            <Col md={6}>
              <Form className="formSelectThemes">
                <FormGroup>
                  <FormGroup>
                    <Row>
                      <Label for="exampleSelect" className="title_filter">
                        CATEGORIA
                      </Label>
                    </Row>
                    <Row>
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        className="select_filter"
                      >
                        <option value="1">Entretenimento</option>
                        <option value="2">Jornalismo</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </Input>
                    </Row>
                  </FormGroup>
                </FormGroup>
              </Form>
              <Row>
                <p className="qntdd_post_publicados">
                  <span>{total}</span> POSTS PUBLICADOS
                </p>
              </Row>
            </Col>
            <Col md={6}>
              <Label className="label_search" for="search">
                Pesquisar
              </Label>
              <Input
                type="search"
                name="search"
                id="search"
                className="input_search"
              />
            </Col>
          </Row>
          <div className="card_blog_resposive">
          <Row gutter={40} >
            {body != null ? (
              body.map((obj) => (
                <Col xs={12} sm={6} md={4} lg={3}>
                  <a href={`/blog?id=${obj._id}`} className="teste" key={obj._id}>
                    <Card className="card_blogs_crud_home">
                      <CardImg
                        top
                        width="100%"
                        src={"http://localhost:3001/uploads/" + obj.image}
                      />

                      <CardBody>
                        <CardTitle className="title_card" tag="h5">
                          {obj.title}
                        </CardTitle>
                        <CardText className="card_text">
                          <p>{obj.subTitle}</p>
                        </CardText>
                        <CardText className="description_muted">
                          <small className="author">
                            Escrito por: <span>{obj.autor}</span>
                          </small>
                          {/* <small className="date">
                            <span>{obj.autor}</span>
                          </small> */}
                        </CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Col>
              ))
            ) : (
              <p>Não existem blogs nessa seção :( </p>
            )}
          </Row>
          </div>
        </Container>
        <Container>
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink first href="#" className="pagination_link" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="pagination_link">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="pagination_link">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="pagination_link">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#" className="pagination_link" />
            </PaginationItem>
          </Pagination>
        </Container>
      </div>
      <div className="section_cards_publicidade">
        <Container className="cards_publicitarios">
          <Row className="cards_publicitarios">
            <Col md={12}>
              <h2 className="title_card_publicitario">CONTEÚDO PUBLICITÁRIO</h2>
            </Col>
            <Col xs={6} md={3}>
              <a className="" href="https://valor.globo.com/empresas/noticia/2021/10/04/fortuna-de-mark-zuckerberg-segue-queda-das-acoes-e-diminui-us-7-bi-em-horas.ghtml">
                <Card className="conteudo_publi_home_card">
                  <CardImg
                    top
                    width="100%"
                    src="https://s2.glbimg.com/2aq7x2Won3AxqJ1Km-_b5OOU4jQ=/0x0:1153x649/540x304/middle/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2021/m/d/b77oCsQpOA1Zc0u5GGQA/05fin-100-whatts-c9-img01.jpg"
                  />
                  <CardBody>
                    <CardTitle tag="h5" className="font-title-h5">
                      Pane nas redes sociais
                    </CardTitle>
                    <CardText>
                      Mark Zuckerberg perde US$ 7 bilhões em poucas horas
                    </CardText>
                  </CardBody>
                </Card>
              </a>
            </Col>
            <Col xs={6} md={3}>
              <a className="" href="https://ge.globo.com/futebol/futebol-internacional/futebol-frances/noticia/mbappe-diz-saborear-companhia-de-messi-e-fala-de-reclamacao-com-neymar-coisas-que-acontecem.ghtml">
                <Card className="conteudo_publi_home_card">
                  <CardImg
                    top
                    width="100%"
                    src="https://s2.glbimg.com/IGDSSoC_ZvV-_sCu1liM4nxj6AA=/197x0:3737x1990/540x304/middle/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/t/p/pgOslISpCmSl74X7xMaQ/gettyimages-1343632518.jpg"
                  />
                  <CardBody>
                    <CardTitle tag="h5" className="font-title-h5">
                      Entrevista
                    </CardTitle>
                    <CardText>
                      Mbappé diz saborear companhia de Messi e admite bronca com
                      Ney
                    </CardText>
                  </CardBody>
                </Card>
              </a>
            </Col>
            <Col xs={6} md={3}>
              <a className="" href="https://multishow.globo.com/programas/tvz/noticia/juliette-se-despede-do-tvz-errei-fui-eu-mesma-e-me-diverti-muito.ghtml">
                <Card className="conteudo_publi_home_card">
                  <CardImg
                    top
                    width="100%"
                    src="https://s2.glbimg.com/iZ5QEa-6yd0YtfudmC_RGVK_EXE=/150x34:1161x603/540x304/middle/smart/filters:strip_icc()/s01.video.glbimg.com/x720/9918015.jpg"
                  />
                  <CardBody>
                    <CardTitle tag="h5" className="font-title-h5">
                      TVZ
                    </CardTitle>
                    <CardText>
                      Juliette se emociona em despedida: 'Fui eu mesma e me
                      diverti'
                    </CardText>
                  </CardBody>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="subscribe">
          <Col md={6}>
            <img src={send_email} className="img-thumbnail" />
          </Col>
          <Col>
            <Form className="send_email">
              <h2 className="display-3 subtitle_send_email">
                Se inscreva e fique atualizado
              </h2>
              <p className="lead_send_email">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <FormGroup className="input_send_email">
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="example@example.com"
                />
                <Button outline>Enviar</Button>{" "}
              </FormGroup>
            </Form>
          </Col>
        </div>
      </Container>
    </>
  );
}

export default Home;

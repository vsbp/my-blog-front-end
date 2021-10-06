import React, { useEffect, useState } from "react";
import { Container, Grid, Row, Col } from "react-grid-system";
import {
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  Input,
  Jumbotron,
  NavLink,
  Media,
  Form,
  FormGroup,
} from "reactstrap";

//import pages or css
import api from "../../../API";
import "../../assets/css/Blog.css";
import "../../assets/css/Home.css";

//import image
import send_email from "../../assets/images/send_email.jpg";

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

//import icons
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const styles = {
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

function Blog(props) {
  const [id, setId] = useState("");
  const history = useHistory();
  const [body, setBody] = useState();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    setId(id);
    api
      .get(`/blog/${id}`)
      .then((response) => {
        setBody(response.data);
      })
      .catch((error) => console.log(error));
    console.log(__dirname);
  }, []);

  async function deleteBlog() {
    await api
      .delete(`/blog/${id}`)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => console.log(error));
  }

  if (body != null) {
    return (
      <>
        <div className="blog_body">
          <div className="height_min_blog">
            <Container>
              <Row>
                <Col sm={12} xl={9}>
                  <Card className="card_body_page_blog">
                    <div></div>
                    <CardBody>
                      <CardTitle className="title_card_page_blog" tag="h1">
                        {body.title}
                      </CardTitle>
                      <CardSubtitle className="subtitle_card_page_blog">
                        {body.subTitle}
                      </CardSubtitle>
                      <CardText className="description_muted_publi">
                        <Col xs={12} style={styles.col}>
                          <small className="author_description">
                            {body.autor}
                          </small>
                        </Col>
                        <Col xs={12} style={styles.col}>
                          <small className="date_description">
                            Data: 29/09/2021
                          </small>
                        </Col>
                        <Col xs={12} style={styles.col}>
                          <div className="btn-crud">
                            <Link to={`/edit?id=${body._id}`}>
                              <AiFillEdit />
                            </Link>
                            <Button onClick={deleteBlog}>
                              <AiFillDelete />
                            </Button>
                          </div>
                        </Col>
                      </CardText>
                      <CardImg
                        top
                        src={"http://localhost:3001/uploads/" + body.image}
                        alt="Card image cap"
                        className="image_blog_principal"
                      />
                      <figcaption className="figure_caption">
                        A caption for the above image.
                      </figcaption>
                      <CardText className="card_text_page_blog">
                        {body.texto}
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={3}>
                  <div className="publicidades_display_responsive">
                    <Card className="card_sm_none">
                      <CardImg
                        top
                        src="https://www.thebest10websitebuilders.com/img/otros/5dccc1fda23050c9354ed80f6.jpg"
                        alt="Card image cap"
                        className="image_publici_primeira"
                      />
                    </Card>
                    <Card className="card-image-publi">
                      <CardBody>
                        <CardTitle tag="h5" className="publi_media_title">
                          POPULAR POSTS
                        </CardTitle>
                        <CardText className="card_text_media_publi">
                          <Row>
                            <Media className="media_body_card">
                              <Media left href="#">
                                <Media
                                  object
                                  width="100px"
                                  height="64px"
                                  src="https://s2.glbimg.com/Qh2BZuukhd3yzr0Mi_6lM3F2a78=/645x388/top/i.glbimg.com/og/ig/infoglobo1/f/original/2021/09/27/95477196_ec_sao_paulo_sp_27-09-2021_alfredo_setubal_presidente_da_itausa._foto_edilson_dantas.jpg"
                                  alt="Generic placeholder image"
                                  className="media_destaque"
                                />
                              </Media>
                              <Media body className="media_body">
                                <Media heading>
                                  "Seja lá quem ganhe em 2022 vai pegar o Brasil
                                  em fragalhos", diz presidente da controladora
                                  do Itaú
                                </Media>
                              </Media>
                            </Media>
                          </Row>
                          <Row>
                            <Media className="media_body_card">
                              <Media left href="#">
                                <Media
                                  object
                                  width="100px"
                                  height="64px"
                                  src="https://s2.glbimg.com/DOKKKQxwSKYIDCCl31Pan9C_AJY=/645x388/i.glbimg.com/og/ig/infoglobo1/f/original/2021/08/27/rio_imagepr1.png"
                                  alt="Autor: Mariana Barbosa"
                                  className="media_destaque"
                                />
                              </Media>
                              <Media body className="media_body">
                                <Media heading>
                                  Embraer vai simular rota do 'carro voador'
                                  ligando Galeão à Barra
                                </Media>
                              </Media>
                            </Media>
                          </Row>
                          <Row>
                            <Media className="media_body_card">
                              <Media left href="#">
                                <Media
                                  object
                                  width="100px"
                                  height="64px"
                                  src="https://s2.glbimg.com/T29hsxYD-paZ-4dIJkqV6wb_WKk=/645x388/i.glbimg.com/og/ig/infoglobo1/f/original/2018/05/25/76837049_the_index_chart_is_seen_on_an_electronic_board_at_the_sao_paulo_stock_exchange_b3_in_sao_pa.jpg"
                                  alt="Autor: Rennan Setti"
                                  className="media_destaque"
                                />
                              </Media>
                              <Media body className="media_body">
                                <Media heading>
                                  O 'Monstro do Leblon', um ano (e R$: 5
                                  bilhões) depois de sua ruína financeira
                                </Media>
                              </Media>
                            </Media>
                          </Row>

                          {/* termina aqui */}
                        </CardText>
                      </CardBody>
                    </Card>
                    <ButtonToolbar className="publi_btns">
                      <ButtonGroup>
                        <NavLink href="/">
                          <Button>Jornalismo</Button>
                        </NavLink>
                        <NavLink href="/">
                          <Button>Casa</Button>
                        </NavLink>
                        <NavLink href="/">
                          <Button>Design</Button>
                        </NavLink>
                        <NavLink href="/">
                          <Button>Esporte</Button>
                        </NavLink>
                        <NavLink href="/">
                          <Button>Comida</Button>
                        </NavLink>
                        <NavLink href="/">
                          <Button>Jardinagem</Button>
                        </NavLink>
                      </ButtonGroup>
                    </ButtonToolbar>
                    <Card className="card-image-publi card_sm_none">
                      <CardImg
                        top
                        src="https://www.thebest10websitebuilders.com/img/otros/5d4b644a4fc1626f635cfb15b.png"
                        alt="Card image cap"
                        className="image_publici_terceira"
                      />
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <Row style={styles.row}>
            <Jumbotron className="conteudo-publicitario-motorola-blog">
              <h5 className="title-conteudo-publicitario-motorola">
                CONTEÚDO PUBLICITÁRIO
              </h5>

              <NavLink href="https://www.motorola.com.br/" target="_blank">
                <img
                  src="https://gkpb.com.br/wp-content/uploads/2019/11/motorola-razr-v3-2019.jpg"
                  className="img-thumbnail img-publi-motorola"
                  alt="CONTEÚDO PUBLICITÁRIO"
                />
              </NavLink>
              <div className="conteudo-publicitario-motorola-body">
                <h4 className="lead">
                  Abuse de imagens fenomenais com super zoom 50X
                </h4>
                <p>
                  Exagere com imagens de tirar o fôlego. Jogos, vídeos e fotos
                  com cores muito mais vibrante.
                </p>
                <p className="lead">
                  <NavLink href="https://www.motorola.com.br/" target="_blank">
                    <img
                      src="https://s0.2mdn.net/simgad/4919568276258845213"
                      className="assinatura_motorola_img"
                      alt="Motorola"
                    />
                  </NavLink>
                </p>
              </div>
            </Jumbotron>
          </Row>

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
  } else {
    return <h2></h2>;
  }
}

export default Blog;

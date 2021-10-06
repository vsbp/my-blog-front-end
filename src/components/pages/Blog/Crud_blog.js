import React, { useEffect, useState, FormEventm, useReducer } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
} from "reactstrap";
import { useHistory } from "react-router-dom";

//import pages or css
import Dropzone from "../../dropzone";
import "../../assets/css/Crud_blog.css";
import api from "../../../API";

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

function Crud_blog() {
  const history = useHistory();
  const [value, onChange] = useState(new Date());
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    image: "",
    texto: "",
    autor: "",
    calendar: "",
  });
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const [selectFile, setSelectFile] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    const { title, subTitle, image, texto, autor } = formData;
    const data = new FormData();

    data.append("title", title);
    data.append("subTitle", subTitle);
    data.append("image", "");
    data.append("texto", texto);
    data.append("autor", autor);
    if (selectFile)
      // data.append('file', {uri:selectFile, name:selectFile, type:'image/jpg'})
      data.append("file", selectFile);

    console.log(data.values());
    await api
      .post("/blog", data)
      .then((response) => {
        alert("Conteúdo Cadastrado");
      })
      .catch((error) => {
        console.log(error);
      });
    history.push("/");
  }

  return (
    <>
      <div className="page_blog_crud">
        <Container>
          <Col md={12}>
            <form className="page_crud_blog" id="blog" onSubmit={handleSubmit}>
              <div className="title_h1_crud">
                <h1>Crie seu texto e adicione ao blog</h1>
              </div>
              <div className="espace_padding">
                <Col xs={6}>
                  <div className="wropper_descriptions">
                    <h2>Adicione título, descrição, imagem, texto, autor e escolha a data de publicação.</h2>
                  </div>
                </Col>
                <div className="form_group_crud">
                  <h3>Adicionar conteúdo</h3>
                  <textarea
                    placeholder="Escreva o título da sua postagem aqui"
                    type="textarea"
                    name="title"
                    onChange={handleInputChange}
                    className="page_crud_blog"
                    required
                    cols="30"
                    rows="5"
                    maxlength="200"
                  ></textarea>
                </div>
                <div className="form_group_crud">
                  <textarea
                    placeholder="Escreva o sub-titulo da sua postagem aqui"
                    type="textarea"
                    name="subTitle"
                    onChange={handleInputChange}
                    className="page_crud_blog"
                    required
                    cols="30"
                    rows="5"
                    maxlength="400"
                  ></textarea>
                </div>
                <div className="form_group_crud">
                  {/* <Label for="content_picture">Adicionar uma imagem</Label> */}
                  {/*<input type="file" name="file" accept="image/*" id="content_picture" onChange={handleInputChange} />*/}
                  <Dropzone onFileUpload={setSelectFile} />
                </div>
                <div className="form_group_crud">
                  <textarea
                    placeholder="Escreva o conteúdo da sua postagem aqui"
                    type="textarea"
                    name="texto"
                    onChange={handleInputChange}
                    className="page_crud_blog textarea_text"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="form_group_crud">
                  <textarea
                    placeholder="Autor(a) da postagem"
                    type="textarea"
                    name="autor"
                    onChange={handleInputChange}
                    className="page_crud_blog"
                    required
                    rows="5"
                    maxlength="100"
                  ></textarea>
                </div>
                <button type="submit" id="btn_publicar_blog">
                  Publicar
                </button>
              </div>
            </form>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default Crud_blog;

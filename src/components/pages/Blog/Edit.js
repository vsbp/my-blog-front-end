import React, { useEffect, useState } from "react";
import { Container, Col } from "react-grid-system";
import { Label } from "reactstrap";

//import pages or css
import "../../assets/css/Edit.css";
import api from "../../../API";
import Dropzone from "../../dropzone";
import "../../assets/css/Crud_blog.css";

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

function Edit() {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    image: "",
    texto: "",
    autor: "",
    calendar: "",
  });

  const [body, setBody] = useState();
  const [selectFile, setSelectFile] = useState();
  const [auxImage, setAuxImage] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [image, setImage] = useState();
  const [texto, setTexto] = useState("");
  const [autor, setAutor] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    setId(id);
    loadingBlog(id);
  }, []);

  async function loadingBlog(id) {
    await api
      .get(`/blog/${id}`)
      .then((response) => {
        setBody(response.data);
        setTitle(response.data.title);
        setSubTitle(response.data.subTitle);
        setImage(response.data.image);
        setTexto(response.data.texto);
        setAutor(response.data.autor);
      })
      .catch((error) => console.log(error));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    //const { title, subTitle, image, texto, autor } = formData;
    const data = new FormData();

    data.append("title", title);
    data.append("subTitle", subTitle);
    data.append("image", "");
    data.append("texto", texto);
    data.append("autor", autor);
    if (selectFile)
      // data.append('file', {uri:selectFile, name:selectFile, type:'image/jpg'})
      data.append("file", selectFile);

    console.log(selectFile);

    await api
      .put(`/blog/${id}`, data)
      .then((response) => {
        alert("Conteúdo alterado");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (body != null) {
    return (
      <>
        <div className="height_vh">
          <div className="page_blog_edit page_blog_crud">
            <Container style={styles.col}>
              <Col md={12} style={styles.col}>
                <form className="page_crud_blog">
                  <div className="title_h1_crud">
                    <h1>Edite alguma informação do seu conteúdo!</h1>
                  </div>
                  <div className="espace_padding">
                    <div className="form_group_crud">
                      <textarea
                        placeholder="Escreva o título da sua postagem aqui"
                        type="textarea"
                        name="title"
                        cols="30"
                        rows="5"
                        onChange={(event) => setTitle(event.target.value)}
                        value={title}
                        className="page_crud_blog page_edit_crud"
                      ></textarea>
                    </div>
                    <div className="form_group_crud">
                      <input
                        type="textarea"
                        name="subTitle"
                        cols="30"
                        rows="5"
                        onChange={(event) => setSubTitle(event.target.value)}
                        value={subTitle}
                        className="page_crud_blog page_edit_crud"
                      ></input>
                    </div>
                    <div className="form_group_crud input_file_img">
                      {/* <Label for="content_picture">Adicionar uma imagema</Label> */}
                      <Dropzone
                        onFileUpload={setSelectFile}
                      />
                    </div>
                    <div className="form_group_crud">
                      <textarea
                        placeholder="Escreva o conteúdo da sua postagem aqui"
                        type="textarea"
                        name="texto"
                        rows="10"
                        onChange={(event) => setTexto(event.target.value)}
                        value={texto}
                        className="page_crud_blog page_edit_crud"
                      ></textarea>
                    </div>
                    <div className="form_group_crud">
                      <input
                        placeholder="Autor(a) da postagem"
                        type="textarea"
                        name="autor"
                        rows="5"
                        onChange={(event) => setAutor(event.target.value)}
                        value={autor}
                        className="page_crud_blog page_edit_crud"
                      ></input>
                    </div>
                    <button
                      type="submit"
                      className="btn_edit"
                      onClick={handleSubmit}
                    >
                      Publicar
                    </button>
                  </div>
                </form>
              </Col>
            </Container>
          </div>
        </div>
      </>
    );
  } else {
    return <p>ops</p>;
  }
}
export default Edit;

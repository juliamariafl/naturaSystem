import React from "react";
import { Container, Col } from "react-bootstrap";
import {
  YoutubeOutlined,
  XOutlined,
  TikTokOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "../Rodape/Rodape.css";

function Rodape() {
  return (
    <Container className="rainy">
      <Col>
        <footer class="py-0 my-1 justify-content-right footer">
          <p class=" nav-link linke text-right">
            © 2024 AylaCompany. Todos os direitos reservados.
          </p>
          <ul className="nav justify-content-right rodape">
            <li className="nav-item">
              <a href="#" class="nav-link linkk px-2 text-body-secondary">
                Politica de privacidade
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link linkk px-2 text-body-secondary">
                Termos de uso
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link linkk px-2 text-body-secondary">
                Gerenciar preferências de cookies
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link linkk  px-2 text-body-secondary">
                Info
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link linkk px-2 text-body-secondary">
                Ajuda
              </a>
            </li>
            <li className="icons">
              <YoutubeOutlined className="icon" />
              <XOutlined className="icon" />
              <TikTokOutlined className="icon" />
              <WhatsAppOutlined className="icon" />
              <InstagramOutlined className="icon" />
            </li>
          </ul>
        </footer>
      </Col>
    </Container>
  );
}
export default Rodape;

'use client'

import apiFilmes from "@/app/apis/apiFilmes";
import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";

// a pagina vai receber as propriedades
export default function page(props) {

  const [series, setSeries] = useState({})

  // ao acessar a pagina, chama o use effect e busca o filme da função assincrona
  useEffect(() => {
    buscarSeries()
  }, [])

  async function buscarSeries() {
    const resultado = await apiFilmes.get("/tv/" + props.params.id + "?language=pt-BR")

    const seriesRecebido = resultado.data

    console.log(resultado.data);
    setSeries(seriesRecebido)
  }

  // vai receber como parametro o numero do series
  // console.log(props.params.id)
  return (

    < Pagina titulo={series.name}>


      {/* if em jsx */}
      {series.id && (
        <div className="py-4">

          <Row>

            {/* Imagem do series */}
            < Col md={3}>
              <CardImg src={"https://image.tmdb.org/t/p/w500/" + series.poster_path} />
            </Col>

            {/* Detalhes do series */}
            {/* título, lançamento, nota, quantidade de temporadas, quantidade de episódios, gêneros, sinopse */}
            <Col md={9}>
              <p><b>Data de Lançamento: </b>{series.first_air_date}</p>
              <p><b>Nota: </b>{series.vote_average}   ⭐</p>
              <p><b>Quantidade de Temporadas: </b>{series.number_of_seasons}</p>
              <p><b>Quantidade de Episódios: </b>{series.number_of_episodes}</p>
              <p><b>Sinopse: </b>{series.overview}</p>
              <p><b>Gêneros: </b></p>
              <ul>
                {/* mapeia cada item e torna em outra coisa */}
                {series.genres.map(item => {
                  return (
                    <li>{item.name}</li>
                  )
                })}
              </ul>

            </Col>

          </Row>
        </div>
      )
      }




    </ Pagina >
  )
}
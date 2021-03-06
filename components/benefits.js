import {
  Row,
  Container,
  Col,
  Card,
  Button 
  }from 'react-bootstrap';
  import Image from 'next/image'; 

 
  function Benefits(){
    return   <div>
                <section id="benefits" className="benefits mt-5 pt-md-3 pb-3">
      <Container>
        <Row>
            <Col className="col-12 col-md-5 col-lg-4">
                 <div className="p-0 d-flex align-items-center mb-2">
                    <span class="badge badge-pill badge-danger text-danger align-items-center">.</span>
                    <h6 className="text-muted pt-2 ml-2">Vantagens </h6>
                    </div>
                <h2  className="h1 text-primary-main mb-3">
                    Aplicações rápidas que  <strong> otimizam o envolvimento.</strong>
                </h2>
                <p className="mt-4 mb-4 ">
                    Conheça vantagens de se obter uma aplicação fluida e de auto desempenho para seu negócio.
                </p>

                <div className="buttons d-flex">
                    <a href="https://wa.me/+5512983171532?text=" target="_blank" className="btn btn-danger text-white rounded-pill p-2 shadow-sm mr-2" >Fale comigo &nbsp; <i className="fab text-sucess fa-whatsapp"></i></a>
                    <a href="#portfolio" className="rounded-pill btn btn-transparent border border-primary-main ">Portfólio</a>
                </div>
                
            </Col>

            <Col  className="col-md-6 col-lg-4 justify-content-center  align-items-start d-none d-lg-flex pt-md-2"> 
            
                <Image className="img-fluid"
                    src="/mockup_mobile.png"
                    alt="Picture of the author"
                    width={248}
                    height={430}
                    />
            </Col>

            <Col  className="col-12 col-md-7 col-lg-4 pt-5 p-md-2 pl-md-5 p-lg-0 ">
            
                <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2 mr-4 ml-3 " >
                <Card.Body >
                    <Card.Title className="text-primary-main fw-bold">
                    
                    <h6>
                    <i class="far fa-chart-bar mr-2 "></i> 
                        <strong> 
                        Auto Desempenho  
                        </strong> 
                    </h6>
                    </Card.Title>
                    <Card.Text><p>Aplicações rápidas e avançadas para aplicativos de Internet que otimizam o envolvimento.</p> </Card.Text>
                </Card.Body>
                </Card>

                <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2 mr-4 ml-3" >
                <Card.Body>
                    <Card.Title className="text-primary-main">
                    <h6> 
                    <i class="fas fa-chess mr-2"></i>
                    <strong> 
                    Experiência do Usuário
                    </strong>
                    </h6>
                    </Card.Title>
                    <Card.Text><p>Veja como UX pode ajudar a aumentar as conversões do seus site.</p> </Card.Text>
                    
                </Card.Body>
                </Card>
                <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2 mr-4 ml-3 d-md-none d-lg-block" >
                <Card.Body>
                    <Card.Title className="text-primary-main fw-bold ">
                    <h6> 
                    <i class="far fa-bookmark mr-2"></i>
                    <strong>
                        Search Engine Optimization   
                    </strong>

                    </h6>
                    </Card.Title> 
                    <Card.Text><p>Otimização de Sites é o conjunto de estratégias com objetivo.</p> </Card.Text>

                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  

    </section>


            </div>
  }

export default Benefits
 

function Main() {
    return (
        <>
            <div id="home" className="intro route bg-image" style={{backgroundImage: "url('https://img.freepik.com/fotos-gratis/papel-de-parede-de-placa-mae-eletronica-de-computador_1409-5907.jpg?t=st=1711644274~exp=1711647874~hmac=a10508059a623bc630ec5f23c7fe31431d629866e0d846ca1e7235f9e8a20e8b&w=826')"}}>
                <div className="overlay-itro"></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className="intro-title mb-4">Bruno Gama</h1>
                            <p className="intro-subtitle"><span className="text-slider-items">Web Devops, Devops Full-stack, White Hack</span><strong className="text-slider"></strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5">
                                                <div className="about-img">
                                                    <img src="../../assets/fotobruno.png" className="img-fluid rounded b-shadow-a" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-7">
                                                <div className="about-info">
                                                    <p><span className="title-s">Name: </span> <span>Bruno Gama</span></p>
                                                    <p><span className="title-s">Email: </span><span>bruno.g.masseiras@gmail.com</span></p>
                                                    <p><span className="title-s">Telefone: </span> <span>11 966066593</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-mf">
                                            <p className="title-s">Skills</p>
                                            <span>HTML</span> <span className="pull-right">85%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                            <span>CSS</span> <span className="pull-right">85%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                            <span>Design</span> <span className="pull-right">85%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                            <span>Figma</span> <span className="pull-right">80%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                            <span>Javascript</span> <span className="pull-right">65%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">About me</h5>
                                            </div>
                                            <p className="lead" style={{fontWeight: "inherit"}}>
                                                Sou um menino apaixonado por tecnologia, gosto de mexer com computador, celular
                                                e tablets; gosto de programar, gosto de fazer designs, seja no figma ou no
                                                canva. Faço estágio como Monitor de Laborátorio, onde tenho varias
                                                experiências
                                                com
                                                computadores, sistema, rede de computadores, com notebook, com programação
                                                via
                                                cmd, liberações de firewall, regras de cloud, entre outros.
                                            </p>
                                        </div>
                                        <div className="skill-mf">
                                            <p className="title-s">Other Skills:</p>
                                            <span> A - B - C - D - E - F - G - H - I - J - K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="service" className="services-mf route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Services</h3>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="icon ion-md-laptop"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Web Developer</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="icon ion-md-laptop"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Web Designs</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="icon ion-md-laptop"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Back End</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;
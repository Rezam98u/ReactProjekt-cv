import { React, useContext, Suspense } from 'react';
// import video from './video/stock-footage-multi-generation-family-preparing-dinner-outdoors-by-car-caravan-holiday-trip.mp4'
import video1 from "../video/video-1.mp4"
import video2 from "../video/stock-footage-multi-generation-family-preparing-dinner-outdoors-by-car-caravan-holiday-trip.mp4"
import { List, ListItem } from '@mui/material';
import { AppContext } from '../ContextApp';
import { motion } from 'framer-motion'
// import './hero.styles.scss'
import img from '../img/norway-gd7ea90b9a_1920-1229x1536.jpg'

import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";



//////////////////////////////////
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 62px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`


const HeroSection = () => {
  const { mood } = useContext(AppContext);

  return (
    <>
      <div>
        <Section>
          <Container>
            <Left>
              <Title>Think Make Solve</Title>
              {/* <WhatWeDo>
                <Line src="./img/line.png" />
                <Subtitle>What we Do</Subtitle>
              </WhatWeDo>
              <Desc>
                we enjoy creating delightful, human-centered digital experiences.
              </Desc> */}
              <div>
                <button className='w-48 p-2 cssBtn2'> Learn more </button>
              </div>

              <div>
                <button className="cssBtn3 text-lg">
                  <p>&nbsp; scroll to explore &nbsp;</p>
                  <p className="hover-text"> &nbsp; scroll to explore&nbsp; </p>
                </button>
              </div>

              <motion.img
                width={"4.7%"}
                src='/img/scroll-down.png'
                initial={{ y: 7, opacity: 1 }}
                animate={{ y: 20, opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </Left>
            <Right>
              <Canvas>
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={1.4} />
                  <directionalLight position={[3, 2, 1]} />
                  <Sphere args={[1, 100, 200]} scale={2.6}>
                    <MeshDistortMaterial
                      color="#3d1c56"
                      attach="material"
                      distort={0.5}
                      speed={2}
                    />
                  </Sphere>
                </Suspense>
              </Canvas>
              <Img src="/img/hero.png" />
            </Right>
          </Container>
        </Section>



        {/* <div className="hero_con">
                    {mood ?
                        <video src={video1} autoPlay loop muted />
                        : <video src={video2} autoPlay loop muted />
                    }

                    <div className="banner">
                        <p className='text-4xl'>
                            <span className='shadow-inner text-teal-400'> Zelten </span>
                            in der Natur oder irgendwo
                        </p>
                        <Button variant='contained' className='text-xl  mt-3 bg-blue-500'> Get Started </Button>
                    </div>
                </div>

                <div style={{ width: "90%" }} className=" mx-auto my-5">
                    <div className="flex gap-5 items-center relative overflow-hidden">
                        <motion.div
                            className="relative"
                            initial={{ x: '-70px' }}
                            whileInView={{ x: 10 }}
                            transition={{ duration: 1.7 }}>
                            <img src={img} alt="" className='rounded-md' width={840} />
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ right: "-170px" }}
                            whileInView={{ right: 10 }}
                            transition={{ duration: 1.9 }}>
                            <p className="break-normal whitespace-normal px-5 leading-8">
                                Ohne Zelt einfach unter freiem Himmel zu schlafen oder im Winter in einem Iglu zu übernachten, nennt sich biwakieren.
                                Das ist in Deutschland erlaubt, insofern es aus einer Notsituation heraus geschieht.In den meisten Bundesländern darfst du für eine solche Notüberachtung auch ein Tarp, also eine Schutzplane, aufspannen. Da Bergwacht, Ranger und Förster allerdings damit rechnen, nur in notgeratene Naturliebhaber nachts anzutreffen, haben Taschenlampen oder gar offenes Feuer oft schon Rettungseinsätze ausgelöst.
                                Man sollte mit nächtlichem Besuch rechnen. In besonders geschützten Bereichen ist auch biwakieren aus Naturschutzgründen untersagt.
                            </p>
                        </motion.div>
                    </div>

                    <div className="my-5">
                        <div className="text-xl font-bold"> Wo in Europa ist Wildcampen erlaubt? </div>
                        <div className="break-normal whitespace-normal leading-8 mt-2">
                            In Österreich ist die Regelung ähnlich wie in Deutschland, das Wildcampen ist verboten und Biwakieren unter bestimmten Voraussetzungen erlaubt.
                            Wie genau die Regelungen sind, unterscheidet sich ähnlich wie in Deutschland auch je nach Bundesland: In Kärnten, Niederösterreich und Tirol ist das Zelten außerhalb von Campingplätzen verboten, in Oberösterreich, Salzburg, der Steiermark und Vorarlberg gibt es kein explizites Verbot, die Gemeinden können jedoch Einschränkungen festlegen.
                            Eine vorherige Abklärung ist deshalb empfehlenswert. Aktuelle Informationen gibt’s auf der österreichischen Plattform oesterreich.gv.at.
                            Italien und die Schweiz sehen das etwas lockerer, hier kommt es aber stark auf die Region und die Zeit an, ob du dein Zelt in der freien Natur aufschlagen darfst.
                            Die Strafen können aber – insbesondere in der Schweiz –  empfindlich hoch sein. Ebenso beim Biwak. In Ländern wie Portugal, den Niederlanden oder Kroatien beispielsweise ist auch das verboten.
                        </div>
                    </div>

                    <div className="my-5">
                        <div className="text-xl font-bold "> Beliebte Naturcamping-Plätze in Deutschland  </div>
                        <List sx={{
                            listStyleType: 'disc',
                            pl: 1,
                            '& .MuiListItem-root': {
                                display: 'list-item',
                            },
                        }}
                            className="break-normal whitespace-normal leading-8 mt-2">
                            <ListItem> Campingplatz Zum Hexenwäldchen – am See, im Wald und fast im Müritz-Nationalpark (auch von uns wärmstens zu empfehlen) </ListItem>
                            <ListItem> Campingplatz Naturfreund – einziger Zeltplatz im Müritz-Nationalpark </ListItem>
                            <ListItem> Regenbogen Prerow – am Strand auf der Ostseehalbinsel Darß </ListItem>
                            <ListItem> NaturCamping am Ellbogensee – Seen, Kanäle, Flüsse und Wald </ListItem>
                            <ListItem> Zeltplatz Spiekeroog – in den Dünen ohne Autos und Strom </ListItem>
                            <ListItem> Adventure Camp Schnitzmühle – am Fluss im Bayerischem Wald </ListItem>
                            <ListItem> Camping Müllerwiese – im Schwarzwald,Heidelbeerdorf </ListItem>
                            <ListItem> Naturcampingpark Isarhorn – am Fluss mit Alpenblick </ListItem>
                            <ListItem> Camping Walchensee – am See in den Alpen </ListItem>
                            <ListItem> Campinginsel Buchau – im Staffelsee mit Alpenblick und autofrei </ListItem>
                            <ListItem> Naturcampingplatz Strotzbüschermühle – im Tal am Fluss </ListItem>
                            <ListItem> Zeltareal vom Biber Ferienhof – im Herzen der Mecklenburgischen Seenplatte </ListItem>
                            <ListItem> Am Schlosspark – im Spreewald und ideal für Paddler und Angler </ListItem>
                            <ListItem> Wilde Heimat – Brandenburg an der Havel mit Natur-Kinderprogramm </ListItem>
                            <ListItem> Camping Haus am Einberg – im Sauerland mit Bauernhofanschluss </ListItem>
                            <ListItem> Campingplatz „Entenfarm“ Hohnstein – in der Sächsischen Schweiz </ListItem>
                        </List>
                    </div>
                </div> */}
      </div>
    </>
  )
}

export default HeroSection;

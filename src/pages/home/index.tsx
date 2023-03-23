import React, { useEffect, useState } from "react";
import "../../App.css";
import CardAgents from "../../components/agents/CardAgents";
import { getAllAgents } from "../../api/agents";
import WrapperBody from "../../components/Layout/WrapperBody";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VerticalMode from "../../components/carrossel/Vertical";
import { ButtonTitleAgent } from "../../components/agents/styles";
import {
  Container,
  RowColumn,
  CenterView,
} from "../../components/Layout/styles";
import {
  Heptagon,
  SvgArrow,
  WrapperTooltip,
} from "../../components/mouse-hover/styles";

function App() {
  const [agentsData, setAgentsData] = useState<any>([]);
  console.log("🚀 ~ file: index.tsx:23 ~ App ~ agentsData:", agentsData);

  const [activeAgent, setActiveAgent] = useState<any>([]);
  console.log("🚀 ~ file: index.tsx:27 ~ App ~ activeAgent:", activeAgent);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseOverParent, setIsMouseOverParent] = useState(false);

  function setAgent(agentName: string) {
    const selectedAgent = agentsData.find(
      (agent: any) => agentName === agent.displayName
    );
    setActiveAgent(selectedAgent);
  }

  const handleMouseEnter = () => {
    setIsMouseOverParent(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOverParent(false);
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    getAllAgents().then((response) => {
      setAgentsData(response.data.data);
    });
  }, []);

  return (
    <WrapperBody>
      <Container
        onMouseMove={onMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CenterView>
          <RowColumn>
            <CenterView className="w-[40%] h-1/2 items-center justify-center flex m-auto">
              <VerticalMode>
                {agentsData.map((agent: any) => {
                  return (
                    <ButtonTitleAgent
                      onClick={() => setAgent(agent.displayName)}
                    >
                      {agent.displayName}
                    </ButtonTitleAgent>
                  );
                })}
              </VerticalMode>
            </CenterView>

            {
              <img
                className="w-full"
                src={activeAgent.fullPortrait}
                alt="agente"
              />
            }
          </RowColumn>
        </CenterView>

        {isMouseOverParent && (
          <WrapperTooltip
            x={1}
            y={2}
            style={{
              position: "absolute",
              left: mousePosition.x - 44,
              top: mousePosition.y - 40,
              pointerEvents: "none",
            }}
          >
            <Heptagon>
              <RowColumn flexDirection="column">
                <CenterView>
                  <SvgArrow rotate={true} src="/img/valorant-arrow.svg" />
                </CenterView>
                <CenterView>
                  <SvgArrow src="/img/valorant-arrow.svg" />
                </CenterView>
              </RowColumn>
            </Heptagon>
          </WrapperTooltip>
        )}
      </Container>

      {/* <div className="grid grid-cols-4 h-full gap-10 mx-auto w-3/4 mt-10">
        {agentsData.map((agent: any) => {
          const colors = agent.backgroundGradientColors;

          const gradient = `linear-gradient(to bottom right, #${colors[0]}, #${colors[1]}, #${colors[2]}, #${colors[3]})`;
          return (
            <CardAgents
              gradient={gradient}
              bgImage={agent.background}
              key={agent.uuid}
              image={agent.fullPortraitV2}
              name={agent.displayName}
              country={""}
              skills={[]}
            />
          );
        })}
      </div> */}
    </WrapperBody>
  );
}

export default App;

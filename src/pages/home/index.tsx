import React, { useEffect, useState } from "react";
import "../../App.css";
import { getAllAgents } from "../../api/agents";
import WrapperBody from "../../components/Layout/WrapperBody";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VerticalMode from "../../components/carrossel/Vertical";
import Container from "../../components/Layout/Container";
import { ButtonTitleAgent } from "../../components/buttons/ButtonTitleAgent";
import { TooltipSlider } from "../../components/mouse-hover/TooltipSlider";

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
      const randomIndex = Math.floor(Math.random() * response.data.data.length);
      const randomAgent = response.data.data[randomIndex];
      setActiveAgent(randomAgent);
      setAgentsData(response.data.data);
    });
  }, []);

  return (
    <WrapperBody>
      <Container>
        <div className="flex items-center">
          <div
            onMouseMove={onMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <VerticalMode>
              {agentsData.map((agent: any) => {
                return (
                  <ButtonTitleAgent
                    onClick={() => setAgent(agent.displayName)}
                    key={agent.uuid}
                  >
                    {agent.displayName}
                  </ButtonTitleAgent>
                );
              })}
            </VerticalMode>
          </div>

          {
            <img
              className="w-1/2"
              src={activeAgent.fullPortrait}
              alt="agente"
            />
          }
        </div>

        {isMouseOverParent && (
          <TooltipSlider x={mousePosition.x} y={mousePosition.y} />
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

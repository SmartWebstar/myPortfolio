import React from "react";
import { Proficiencies, SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";

import { Fade } from "react-reveal";

const Proficiency = () => {
  return (
    <Container className="section section-lg">
      <Fade bottom duration={2000}>
        <h1 className="h1">Skills</h1>
        <Row>
          <Col lg="6">
            {Proficiencies.map((skill) => {
              return (
                <div className="progress-info" key={skill.Stack}>
                  <div className="progress-label">
                    <span style={{ fontSize: "15px" }}>{skill.Stack}</span>
                  </div>
                  <div className="progress-percentage">
                    <span>{skill.progressPercentage}%</span>
                  </div>
                  <Progress
                    max="100"
                    value={skill.progressPercentage}
                    color="info"
                    role="progressbar"
                    aria-label={skill.Stack}
                  />
                </div>
              );
            })}
          </Col>
          <Col lg="6">
            {SkillBars.map((skill) => {
              return (
                <div className="progress-info" key={skill.Stack}>
                  <div className="progress-label">
                    <span style={{ fontSize: "15px" }}>{skill.Stack}</span>
                  </div>
                  <div className="progress-percentage">
                    <span>{skill.progressPercentage}%</span>
                  </div>
                  <Progress
                    max="100"
                    value={skill.progressPercentage}
                    color="info"
                    role="progressbar"
                    aria-label={skill.Stack}
                  />
                </div>
              );
            })}
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default Proficiency;

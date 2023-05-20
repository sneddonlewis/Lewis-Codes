import React from "react";
import Project from "./Project";
import {TabPane} from "reactstrap";
import ITabContentsProps from "../../Typings/ITabContentsProps";

function ProjectTabContents(props: ITabContentsProps) {
  return (
      <div className="">
        {props.projects.map((i) => {
          return (
            <Project
              title={i.title}
              description={i.description}
              codeUrl={i.codeUrl}
              launchUrl={i.launchUrl || ""}
              techStack={i.techStack}
              launchable={i.launchable}
              key={i.title}
            />
          );
        })}
      </div>
  );
}

export default ProjectTabContents;

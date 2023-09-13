import React, { useEffect } from "react";
import "./index.less";

const TemplateFun = (props: any, ref: any) => {
  // 初始化
  useEffect(() => {
    console.log("初始化1", props);
  }, []);

  return <div className="ezb-name-label">demo</div>;
};

export default TemplateFun;

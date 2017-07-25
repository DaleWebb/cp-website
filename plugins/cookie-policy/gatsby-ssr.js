import React from "react"

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  return setHeadComponents([
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />,
    <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>,
    <script dangerouslySetInnerHTML={{
      __html: `window.addEventListener("load", function(){ window.cookieconsent.initialise(${JSON.stringify(pluginOptions)})});`
    }}/>
  ])
}

import { renderToStaticMarkup } from "react-dom/server";
import { json } from "@remix-run/node";
import moduleArtifacts from './../../../artifacts/components.json' assert {type: 'json'}; 

export async function loader() {
    let markup = renderToStaticMarkup(navigation());
    let artifacts = moduleArtifacts["global-navigation"];

    let data = {
        items:[
            {
                html: markup,
                scripts: artifacts.scripts,
                styles:artifacts.styles
            }
        ]
    };

    return json(data)
  }

  function navigation(){
      return (<nav>
          <a>Link 1</a>
      </nav>);
  }
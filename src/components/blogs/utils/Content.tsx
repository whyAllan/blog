// The content component is intended to be used in main components to display a content, it expecet Title, description and image.
//  It can be used for both creating the main content of a page or be used in a loop to create mutiples content components.

function Content() {
  <div className="content">
    <div className="content-header">
      <h1 className="content-title"></h1>
      <img className="img-fluid content image"></img>
    </div>
    <div className="content-description"></div>
  </div>;
}

export default Content;

// This is a static page mocking an "About Us" section for our fake user data
export default function ProjectPage() {
  return (
    <div className="container pt-4">
      <p>
        Hello these would be my feautred projects id want to show off
      </p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3 >Book Search Engine</h3>
                <p className="lead mb-0">
                <a class="btn btn-secondary btn-sm" href="https://github.com/AlxMarz/book-SE" role="button">GitHub Link</a>
                </p>
                <p>This is a book search engine using Javascrpt, API, MVC</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Project 2</h3>
                <p className="lead mb-0">
                <a class="btn btn-secondary btn-sm" href="https://github.com/AlxMarz/book-SE" role="button">GitHub Link</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Project 3</h3>
                <p className="lead mb-0">
                <a class="btn btn-secondary btn-sm" href="https://github.com/AlxMarz/book-SE" role="button">GitHub Link</a>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>
        bellow this would be other repos id want to show off
      </p>
    </div>
  );
}

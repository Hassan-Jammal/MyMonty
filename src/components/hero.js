class Hero extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <!-- hero -->
            <section id="section-1">
              <div class="container">
                <div
                  class="
                    row
                    align-items-center
                    justify-content-center
                    text-center text-md-start
                  "
                >
                  <div class="col-md-5 order-md-1 align-self-end text-end">
                    <img
                      src="./assets/hero--desktop.png"
                      class="img-fluid"
                      alt="MyMonty - Shaping the future of money"
                    />
                  </div>
                  <div class="col-md-7">
                    <div class="pb-5">
                      <div class="title display-1 mt-4">Shaping The</div>
                      <div>
                        <p class="animate-text">
                          <span class="display-1">Finance Gateway</span>
                          <span class="display-1">Banking Experience</span>
                          <span class="display-1">Future of Money</span>
                        </p>
                      </div>
                      <div>
                        <p class="col-md-8 col-12 mt-4">
                          Enter your phone number, and we'll send you an invite link to
                          download the app.
                        </p>
                        <form action="">
                          <div class="row">
                            <div class="col-md-8 col-12 mt-3">
                              <div class="input-group position-static">
                                <select
                                  id="code"
                                  class="border-0 p-2 cursor-pointer fs-4 bg-white"
                                >
                                  <option value="">Code</option>
                                  <option value="+961">+961</option>
                                  <option value="+962">+962</option>
                                  <option value="+963">+963</option>
                                </select>
                                <input
                                  type="text"
                                  class="form-control position-static border-0 p-2 fs-4"
                                  placeholder="Enter your Number"
                                />
                              </div>
                            </div>
                            <div class="col-md-4 col-12 mt-3">
                              <input
                                type="submit"
                                value="Get MyMonty"
                                class="border-0 rounded-pill py-2 px-4 fs-4"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          `;
    }
  }
  
  customElements.define('hero-component', Hero);
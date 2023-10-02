import React, { useState } from "react";

const Login = ({ onLogin }) => {
  return (
    <div className="bg-light min-vh-100 d-flex flew-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body">
                  <form>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign in</p>
                    <div className="input-group mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Kullanıcı Adı"
                        autoComplete="username"
                      />
                    </div>
                    <div className="input-group mb-4">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Şifre"
                        autoComplete="current-password"
                      />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button type="button" className="btn btn-primary px-4">
                          Giriş Yap
                        </button>
                      </div>
                      <div className="col-6 text-right">
                        <button type="button" className="btn btn-link px-0">
                          Forgot password?
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="card text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <div className="card-body text-center">
                  <div>
                    <h2>Hasta Başı Monitör</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aspernatur distinctio, sapiente laudantium quasi
                      cupiditate fugiat sequi vitae necessitatibus cumque
                      reiciendis hic vero nobis officiis tempora quo veritatis
                      illo minima doloremque.
                    </p>
                    <a href="#">
                        <button className="btn btn-primary mt-3 active" aria-current="page" type="button" tabIndex={-1}>Kaydet</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

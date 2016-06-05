import React from 'react';
import Nav from '../../components/Nav';


export default class Registration extends React.Component {


	render() {
		return (
			<div class="page-header">
				<div>
					<Nav />
				</div>
				<div class="container">
					<div class="row">
						
						<div class="col-lg-12">
							<div class="page-header">
								<h1 id="tables">Регистрация</h1>
							</div>
							
							<div class="bs-component">
								

								<br/><br/>
								<div class="col-lg-8 col-lg-offset-2">
						            <div class="well bs-component">
						              <form name="form-horizontal new user registration" id="registration22"  method="POST" action="index.php" >
						                <fieldset>

							                <input type="hidden" name="op" value="register"/>
											<input type="hidden" name="sha1" value=""/>


						                  <div class="form-group">
						                    <label for="inputEmail" class="col-lg-2 control-label">Username</label>
						                    <div class="col-lg-10">
						                      <input required type="text" class="form-control" name="username" placeholder="Username" />
						                    </div>
						                  </div>
						                  <div class="form-group">
						                    <label for="inputEmail" class="col-lg-2 control-label">Email</label>
						                    <div class="col-lg-10">
						                      <input required type="email" class="form-control" name="email" placeholder="Email" />
						                    </div>
						                  </div>
						                  <div class="form-group">
						                    <label for="inputEmail" class="col-lg-2 control-label">Пароль</label>
						                    <div class="col-lg-10">
						                      <input ref="password1" required type="password" name="password1"  class="form-control" placeholder="Пароль" />
						                    </div>
						                  </div>
						                  <div class="form-group">
						                    <label for="inputEmail" class="col-lg-2 control-label">Пароль еще раз</label>
						                    <div class="col-lg-10">
						                      <input ref="password1" required type="password" name="password2"  class="form-control" placeholder="Пароль еще раз" />
						                    </div>
						                  </div>
						                  <div class="form-group">
						                    <div class="col-lg-10 col-lg-offset-2">
						                      <button value="register" class="btn btn-primary" onClick={User.processRegistration()}>Отправить</button>
						                    </div>
						                  </div>
						                </fieldset>
						              </form>
						            </div>
						          </div>




							</div>
						</div>

					</div>
				</div>
			</div>	
		);
	}
}
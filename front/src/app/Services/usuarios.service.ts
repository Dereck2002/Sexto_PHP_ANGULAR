import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../Interfaces/iusuario';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private urlBase: string = environment.URL + 'Usuario.Controller.php?op=';
  constructor(private clientePHP: HttpClient) {}

  login(uid: any): Observable<IUsuario> {
    console.log(this.urlBase + 'login');
    var usuariosLogin = new FormData();
    usuariosLogin.append('correo', uid.correo.toString());
    usuariosLogin.append('contrasenia', uid.contrasenia.toString());
    return this.clientePHP.post<any>(this.urlBase + 'login', usuariosLogin);
  }
}

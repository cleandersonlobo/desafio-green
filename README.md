<img src="resources/icons/android_xhdpi.png" align="right" />
# Desafio Green

Aplicativo desenvolvido para o <b>#desafiofrontend</b> [Greenmile](http://greenmile.com/pt/greenmile/).

### Desenvolvido com

* [Meteor](https://www.meteor.com) - Meteor é um plataforma full-stack de JavaScript para desenvolvimento de aplicações web e mobile.
* [Cordova](https://cordova.apache.org/) - A solução para Apps híbridas mais usada no mundo.
* [Materialize](http://materializecss.com/) - Um framework front-end moderno e responsivo baseado em Material Design.
* [Leafletjs](http://leafletjs.com/) - Uma biblioteca JavaScript open-source
de mapas.

### Packages Meteor

```
* kadira:flow-router
* kadira:blaze-layout
* materialize:materialize
* cleandersonlobo:mdi-icons
* rounce:fastclick
* kevohagan:sweetalert
* fourseven:scss
```
Exemplo de como instalar um novo pacote
```
meteor add cleandersonlobo:mdi-icons
```
+ Outros pacotes disponível no [Atmosphere](https://atmospherejs.com/)

## Quick Start Projet

On Windows, simply go to https://www.meteor.com/install and use the Windows installer.

On Linux/macOS, use this line:

```bash
curl https://install.meteor.com/ | sh
```

## Running:

###Get the Code

```bash
git clone https://github.com/cleandersonlobo/desafio-green.git
```
### Iniciar Servidor

```bash
cd desafio-green
meteor
```
+ Link da aplicação é http://localhost:3000

### Iniciar aplicação no Android ou iOS (Simulador ou Dispositivo)

```bash
meteor run android
ou
meteor run android-device
```
+ Precisa do Xcode
```bash
meteor run ios
ou
meteor run ios device
```
### Build da aplicação

Para gerar o <b>apk</b> ou projeto no Xcode basta realizar o seguinte comando;

```bash
meteor build <build-output-directory> --server <host>:<port>
```

### 1.0

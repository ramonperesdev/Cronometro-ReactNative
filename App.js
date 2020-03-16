import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
 } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    };

    this.timer = null;

    this.limpar = this.limpar.bind(this);
    this.vai = this.vai.bind(this);
  }

  vai() {
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null; 

      this.setState({
        botao: 'VAI'
      })
    } else {
      this.timer = setInterval( () => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100);
      this.setState({
        botao: 'PAUSAR'
      })
    }
  }

  limpar() {
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI'
    })
  }

  render () {
    return (
      <View style={styles.container} >
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer} >{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea} >

          <TouchableOpacity style={styles.botao} >
            <Text style={styles.btnTexto} onPress={this.vai} >{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} >
            <Text style={styles.btnTexto} onPress={this.limpar} >LIMPAR</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.areaUltima} >
            <Text style={styles.textoUltimo} >
              {this.state.ultimo > 0 ? 'Ultimo numero: ' + this.state.ultimo.toFixed(1) + 's' : ''}
            </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222'
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 80,
    height: 40
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 15,
    borderRadius: 30 
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222'
  },
  areaUltima: {
    marginTop: 40
  },
  textoUltimo: {
    fontSize: 25,
    color: '#FFF',
    fontStyle: 'italic'
  }
});

export default App;
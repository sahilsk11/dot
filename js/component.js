class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <h3 className="title">click the dots to connect them</h3>
        <DotMap dots={15} />
      </div>
    )
  }
}

class DotMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastClicked: 0, dotsVisible: 2 };
    this.clicked = this.clicked.bind(this);
  }

  clicked(index) {
    if (this.state.lastClicked == null) {
      this.setState({ lastClicked: index });
    } else {
      if (this.state.lastClicked == 14 && index == 0) {
        this.setState({ lastClicked: null, dotsVisible: 17 });
      } else if (this.state.lastClicked + 1 == index) {
        this.setState({ lastClicked: index, dotsVisible: index + 2 });
      }
    }
  }

  componentDidUpdate() {
    var c = document.getElementById("drawing-board");
    var ctx = c.getContext("2d");
    if (this.state.dotsVisible > 2) {
      ctx.beginPath();
      var rotation = (24 * (this.state.dotsVisible - 2)) * Math.PI / 180 - Math.PI / 2, rotation;
      ctx.arc(250, 246, 222, - Math.PI / 2, rotation);
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 5;
      ctx.stroke();
    } else {
      ctx.clearRect(0, 0, 500, 500);
    }
    if (this.state.dotsVisible == 17) {
      const burst = new mojs.Burst({
        radius: { 0: 100 },
        count: 15,
        children: {
          shape: 'polygon',
          points: 5,
          fill: { 'cyan': 'yellow' },
          angle: { 360: 0 },
          duration: 2000,
          delay: 'stagger(0, 100)'
        }
      });
      burst
        .tune({ x: -7, y: -10 })
        .replay();

    }
  }

  reset() {
    this.setState({ lastClicked: 0, dotsVisible: 2 });
  }

  render() {
    var elements = [];
    for (var i = 0; i < this.state.dotsVisible && i < this.props.dots; i++) {
      elements.push(<Dot index={i} clicked={this.clicked} />);
    }
    return (
      <div className="circle">
        <canvas id="drawing-board" width="500px" height="500px">
        </canvas>
        <div className="overlay">
          {elements}
        </div>
        <MusicController />
        <img className="reload" onClick={() => { this.reset() }} src="img/reload.png" />
      </div>
    );
  }
}

class MusicController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pause: true, audio: new Audio('music/circleoflife.mp3') }
  }

  togglePause() {
    if (this.state.pause) {
      this.state.audio.play();
      this.setState({ pause: false });
    } else {
      this.state.audio.pause();
      this.setState({ pause: true });
    }
  }
  render() {
    if (this.state.pause) {
      return (<img src="img/mute.png" onClick={() => this.togglePause()} className="music-controller" />);
    } else {
      return (<img src="img/volume.png" onClick={() => this.togglePause()} className="music-controller" />);
    }
  }
}

class Dot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const burst = new mojs.Burst({
      left: 0, top: 0,
      radius: { 4: 19 },
      angle: 45,
      children: {
        shape: 'line',
        radius: 6,
        scale: 1,
        stroke: '#FD7932',
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        duration: 500,
        easing: 'quad.out',
      }
    });
    document.getElementById(this.props.index).style.transform = "rotate(" + 24 * (this.props.index) + "deg)";
    document.getElementById("label-" + this.props.index.toString()).style.transform = "rotate(-" + 24 * (this.props.index) + "deg)";
    document.getElementById("dot-" + this.props.index).addEventListener('click', function (e) {
      burst
        .tune({ x: e.pageX, y: e.pageY })
        .replay();
    });
  }

  getImage() {
    return "img/dot.png"
  }

  render() {
    return (
      <div className="dot-wrapper" id={this.props.index}>
        <div onClick={() => this.props.clicked(this.props.index)} className="dot" id={"dot-" + this.props.index}>
          <p id={"label-" + this.props.index.toString()} className="label">{this.props.index + 1}</p>
          <img id={"image-" + this.props.index.toString()} src={this.getImage(this.props.index)} className="dot-image" />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("content-container"));
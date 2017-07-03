var React = require('react');

class ItemImage extends React.Component {
  constructor(props){
    super(props);
  }

  endLoading(){

  }

  render(){
    var background = {
      backgroundImage: "url(" + this.props.src + ")"
    };

    return (
      <div className='image_container'>
        {this.props.render === 'img'
          ?
            <img
              src={this.props.src}
              onLoad={this.endLoading()}
              onError={this.endLoading()}
            />
          :
            <div className='image' style={background}></div>
        }
      </div>
    )
  }
}

module.exports = ItemImage;

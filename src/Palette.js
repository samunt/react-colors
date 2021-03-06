import React, {Component} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import './Palette.css'
class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {level:500};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(newLevel) {
        this.setState({level: newLevel, format: 'hex'})
    }
    changeFormat(val) {
       this.setState({format: val})
    }
    render() {
        const {colors, paletteName, emoji } = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id}/>
        ));
        return (
            <div className='Palette'>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <footer className='Palette-footer'>
                    {paletteName} {emoji}
                </footer>
            </div>
        )
    }
}
export default Palette

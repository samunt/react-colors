import React, {Component} from 'react';
import MiniPalette from './MiniPalette';
import {Link} from 'react-router-dom';
class PaletteList extends Component {
    render() {
        const {palette} = this.props;
        return (
            <div>
                <MiniPalette/>
                {palette.map(palette => (
                    <p>
                        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    </p>
                ))}
            </div>
        )
    }
}
export default PaletteList

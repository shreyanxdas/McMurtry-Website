import React from 'react';
import { Box } from 'rebass';
import './mcministry.css';
import Title from '../../general/title';
import Cards from '../../general/contactcards';
import { executive_council, peoples_council, mccabinet } from './mcministry.json';

export default class McMinistry extends React.Component {
    render() {
        return (
            <div className='mcministry-page'>
                <Title width={240} title="McMinistry" />
                <Box width={[330]} ml='auto' mr='auto'>
                    <h1 className='division-title'>Executive Council</h1>
                </Box>
                <Cards content={executive_council} height={150} width={[270]} />
                <Box width={300} ml='auto' mr='auto'>
                    <h1 className='division-title'>People's Council</h1>
                </Box>
                <Cards content={peoples_council} height={150} width={270} />
                <Box width={270} ml='auto' mr='auto'>
                    <h1 className='division-title'>McCabinet</h1>
                </Box>
                <Cards content={mccabinet} height={150} width={300} />
            </div>
        )
    }
}